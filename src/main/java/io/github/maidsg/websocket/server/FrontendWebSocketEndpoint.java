package io.github.maidsg.websocket.server;

import io.github.maidsg.websocket.bridge.ControlMessageBridge;
import io.quarkus.logging.Log;
import io.quarkus.websockets.next.*;
import jakarta.inject.Inject;

import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

/*******************************************************************
 * WebSocket 服务端，前端连接到 /ws/events
 * @author wy
 */
@WebSocket(path = "/ws/events")
public class FrontendWebSocketEndpoint {

    @Inject
    WebSocketConnection connection;

    // 全局 session 集合，供推送类使用
//    private static final Set<Session> SESSIONS = ConcurrentHashMap.newKeySet();

    @OnOpen
    public String onOpen() {
        return "Connected to FrontendWebSocketEndpoint";
    }

    @OnClose
    public void onClose() {
        Log.info("FrontendWebSocketEndpoint closed");
    }

//    @OnError
//    public void onError(Session session, Throwable thr) {
//        SESSIONS.remove(session);
//    }

    @OnTextMessage
    public void onMessage(String msg) {
        Log.info("Message from FrontendWebSocketEndpoint: " + msg);
        ControlMessageBridge.dispatch(msg);
    }

//    public static void broadcastText(String text) {
//        for (Session s : SESSIONS) {
//            if (s.isOpen()) {
//                s.getAsyncRemote().sendText(text);
//            }
//        }
//    }

}
