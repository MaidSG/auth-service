package io.github.maidsg;

import io.quarkus.logging.Log;
import io.quarkus.websockets.next.OnOpen;
import io.quarkus.websockets.next.OnTextMessage;
import io.quarkus.websockets.next.WebSocketClient;
import io.quarkus.websockets.next.WebSocketClientConnection;
import jakarta.inject.Inject;

@WebSocketClient(path = "/ws/v5/public")
public class OkxClientEndpoint {


    @Inject
    WebSocketClientConnection connection;

    @OnTextMessage
    void onMessage(String msg) {
        Log.info(">>> 收到 OKX 公共 WebSocket 消息: " + msg);
    }

    @OnOpen
    void onOpen() {
        Log.info(">>> 已连接到 OKX 公共 WebSocket 服务");
    }


}
