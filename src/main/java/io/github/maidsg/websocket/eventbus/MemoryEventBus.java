package io.github.maidsg.websocket.eventbus;

import io.quarkus.logging.Log;
import jakarta.annotation.PreDestroy;
import jakarta.enterprise.context.ApplicationScoped;

import java.util.Set;
import java.util.concurrent.*;
import java.util.concurrent.atomic.AtomicBoolean;

/*******************************************************************
 * 内存事件总线：注册/注销订阅者，异步分发（有界队列，CallerRunsPolicy 做回退）。
 * @author wy
 */
@ApplicationScoped
public class MemoryEventBus {

    private final Set<ServerEventSubscriber> subscribers = new CopyOnWriteArraySet<>();
    private final ThreadPoolExecutor dispatcher;
    private final AtomicBoolean running = new AtomicBoolean(true);

    public MemoryEventBus() {

        int cores = Math.max(2, Runtime.getRuntime().availableProcessors() / 2);
        BlockingQueue<Runnable> queue = new ArrayBlockingQueue<>(1024);
        dispatcher = new ThreadPoolExecutor(
                cores, cores * 2,
                60L, TimeUnit.SECONDS,
                queue,
                r -> {
                    Thread t = new Thread(r, "eventbus-dispatcher");
                    t.setDaemon(true);
                    return t;
                },
                new ThreadPoolExecutor.CallerRunsPolicy() // 低延时优先，队满则调用方执行，产生背压
        );

    }

    public void register(ServerEventSubscriber s) {
        subscribers.add(s);
    }

    public void unregister(ServerEventSubscriber s) {
        subscribers.remove(s);
    }

    public void publish(ServerEvent event) {
        if (!running.get()) return;
        for (ServerEventSubscriber s : subscribers) {
            try {
                dispatcher.execute(() -> {
                    try {
                        s.onEvent(event);
                    } catch (Throwable ex) {
                        // 忽略单个订阅者异常，必要时扩展 DLQ / 日志
                        Log.errorf(ex, "EventBus subscriber %s failed to handle event %s", s.getClass().getName(), event.getClass().getName());
                    }
                });
            } catch (RejectedExecutionException ex) {
                // 队列已满，采用简单降级：直接在当前线程调用（已经由 CallerRunsPolicy 避免）
                try {
                    s.onEvent(event);
                } catch (Throwable ignored) {
                    Log.errorf(ignored, "EventBus subscriber %s failed to handle event %s in fallback", s.getClass().getName(), event.getClass().getName());
                }
            }
        }
    }

    @PreDestroy
    public void shutdown() {
        running.set(false);
        dispatcher.shutdown();
        try {
            dispatcher.awaitTermination(5, TimeUnit.SECONDS);
        } catch (InterruptedException ignored) {
            Thread.currentThread().interrupt();
        }
    }


}
