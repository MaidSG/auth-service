package io.github.maidsg.websocket.server;

import io.github.maidsg.websocket.bridge.ControlMessageBridge;
import io.github.maidsg.websocket.eventbus.ControlEvent;
import io.github.maidsg.websocket.eventbus.MarketEvent;
import io.github.maidsg.websocket.eventbus.MemoryEventBus;
import io.github.maidsg.websocket.eventbus.ServerEvent;
import io.quarkus.logging.Log;
import io.quarkus.runtime.StartupEvent;
import io.quarkus.websockets.next.*;
import io.vertx.core.buffer.Buffer;
import jakarta.enterprise.event.Observes;
import jakarta.inject.Inject;

import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

/*******************************************************************
 * WebSocket 服务端，前端连接到 /ws/events
 * @author wy
 */
@WebSocket(path = "/ws/events")
public class FrontendWebSocketEndpoint {

    private final Set<WebSocketConnection> clients = ConcurrentHashMap.newKeySet();

    @Inject
    MemoryEventBus bus;


    void onStart(@Observes StartupEvent ev) {
        bus.register(this::onEvent);
    }

    void onEvent(ServerEvent event) {
        if (!(event instanceof MarketEvent)) {
            return;
        }
        pushMarketEvent((MarketEvent) event);
    }

    private void pushMarketEvent(MarketEvent event) {
        String payload = event.getRawJson();
        for (WebSocketConnection client : clients) {
            if (!client.isOpen()) {
                clients.remove(client);
                continue;
            }
            client.sendText(payload)
                    .subscribe().with(
                            ignored -> {
                            },
                            failure -> {
                                Log.errorf(failure, "Failed to push market event to client %s", client.endpointId());
                                clients.remove(client);
                            }
                    );
        }
    }

    @OnOpen
    public String onOpen(WebSocketConnection conn) {
        clients.add(conn);
        Log.infof("FrontendWebSocketEndpoint opened: %s", conn.endpointId());
        return "Connected to FrontendWebSocketEndpoint";
    }

    @OnClose
    public void onClose(WebSocketConnection conn) {
        clients.remove(conn);
        Log.infof("FrontendWebSocketEndpoint closed: %s", conn.endpointId());
    }

//    @OnError
//    public void onError(Session session, Throwable thr) {
//        SESSIONS.remove(session);
//    }

    @OnTextMessage
    public void onMessage(String msg, WebSocketConnection conn) {
        Log.info("Message from FrontendWebSocketEndpoint: " + msg);
        if (msg == null || msg.isEmpty()) {
            return;
        }

        if (msg.trim().equalsIgnoreCase("ping")) {
            Log.info(">>> 收到 FrontendWebSocketEndpoint 心跳 Ping 消息");
            conn.sendText("pong").subscribe().with(
                    ignored -> Log.info(">>> 发送 FrontendWebSocketEndpoint 心跳 Pong 消息成功"),
                    failure -> Log.errorf(failure, ">>> 发送 FrontendWebSocketEndpoint 心跳 Pong 消息失败")
            );
            return;
        }

        ControlMessageBridge.dispatch(msg);
    }

    @OnPingMessage
    void onPingMessage(Buffer buffer) {
        Log.info(">>> 收到 FrontendWebSocketEndpoint Ping 消息: " + buffer.toString());
//        doConnTouch(conn);
    }



}
