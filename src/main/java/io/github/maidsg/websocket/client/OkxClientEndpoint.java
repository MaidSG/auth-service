package io.github.maidsg.websocket.client;

import io.github.maidsg.websocket.eventbus.ControlEvent;
import io.github.maidsg.websocket.eventbus.MemoryEventBus;
import io.github.maidsg.websocket.eventbus.ServerEvent;
import io.github.maidsg.websocket.heartbeat.OkxHeartbeatManager;
import io.github.maidsg.websocket.manager.OkxConnectionManager;
import io.quarkus.logging.Log;
import io.quarkus.runtime.StartupEvent;
import io.quarkus.websockets.next.*;
import io.vertx.core.buffer.Buffer;
import jakarta.enterprise.event.Observes;
import jakarta.inject.Inject;
import org.quartz.SchedulerException;

/**
 * OKX 公共 WebSocket 客户端端点
 * 接口@WebSocketClient 提供的都是@SessionScoped 实现
 * 所以WebSocketClientConnection对象
 * 只适用于被 @OnOpen 、 @OnTextMessage 、 @OnBinaryMessage
 * 和 @OnClose 注解的方法
 */
@WebSocketClient(path = "/ws/v5/public")
public class OkxClientEndpoint {

    void onStart(@Observes StartupEvent ev) {
        bus.register(this::onEvent);
    }

    @Inject
    MemoryEventBus bus;

    @Inject
    OkxConnectionManager manager;

//    @Inject
//    OkxHeartbeatManager heartbeatManager;




    void onEvent(ServerEvent event) {
        if (!(event instanceof ControlEvent)) return;
        ControlEvent c = (ControlEvent) event;
        String cmd = c.getCommand();
        switch (cmd) {
            case "subscribe":
                // 从 c.getParams() 中读取 symbol 等信息并执行订阅
                String subscribeJson = """
                        {
                            "op":"subscribe",
                            "args":[
                                {
                                    "channel":"tickers",
                                    "instId":"BTC-USDT"
                                }
                            ]
                        }
                        """;
                manager.send(subscribeJson);
                break;
            case "unsubscribe":
                // 取消订阅
                break;
            case "ping":
                // 示例：响应心跳或记录
                break;
            default:
                // 处理自定义控制命令
        }
    }


    @OnTextMessage
    void onMessage(String msg, WebSocketClientConnection conn) {

        Log.debug(">>> 收到 OKX 公共 WebSocket 消息: " + msg);
        System.out.println(msg);

        // 区分消息,分发给不同的工厂处理




    }

    @OnOpen
    void onOpen(WebSocketClientConnection conn) {
        Log.info(">>> 已连接到 OKX 公共 WebSocket 服务");
        manager.setConnection(conn);

    }

    @OnPongMessage
    void onPongMessage(Buffer buffer) {
//        Log.info(">>> 收到 OKX 公共 WebSocket Pong 消息");
//        doConnTouch(conn);
    }

//    private void doConnTouch(WebSocketClientConnection conn) {
//        try {
//            heartbeatManager.triggerHeartbeat(conn);
//        } catch (SchedulerException e) {
//            Log.error(">>> 触发 OKX 心跳任务失败", e);
//        }
//    }

    @OnClose
    void onClose() {
        manager.reconnect();
    }


}
