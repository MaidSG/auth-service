package io.github.maidsg.websocket.client;

import io.quarkus.websockets.next.WebSocketClientConnection;
import io.quarkus.websockets.next.WebSocketConnector;
import jakarta.inject.Inject;
import jakarta.inject.Singleton;

import java.net.URI;

@Singleton
public class OkxPublicWebSocketConnector {

    @Inject
    WebSocketConnector<OkxPublicClientEndpoint> publicConnector;

    @Inject
    WebSocketConnector<OkxBusinessClientEndpoint> businessConnector;


    public WebSocketClientConnection connectPC() {
        // 以 OKX 公共 WS 为例
        URI uri = URI.create("wss://ws.okx.com:8443");

        var connection = publicConnector
                .baseUri(uri)
                .connectAndAwait(); // 建立连接

        return  connection;
    }

    public WebSocketClientConnection connectBusiness() {
        // 以 OKX 公共 WS 为例
        URI uri = URI.create("wss://ws.okx.com:8443");

        var connection = businessConnector
                .baseUri(uri)
                .connectAndAwait(); // 建立连接

        return  connection;
    }


}
