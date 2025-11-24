package io.github.maidsg.websocket.client;

import io.github.maidsg.model.entity.User;
import io.quarkus.logging.Log;
import io.quarkus.runtime.Startup;
import io.quarkus.runtime.StartupEvent;
import io.quarkus.websockets.next.WebSocketClientConnection;
import io.quarkus.websockets.next.WebSocketConnector;
import jakarta.enterprise.event.Observes;
import jakarta.inject.Inject;
import jakarta.inject.Singleton;

import java.net.URI;
import java.util.List;
import java.util.concurrent.atomic.AtomicReference;

@Singleton
public class OkxPublicWebSocketConnector {

    @Inject
    WebSocketConnector<OkxClientEndpoint> connector;


    public WebSocketClientConnection connect() {
        // 以 OKX 公共 WS 为例
        URI uri = URI.create("wss://ws.okx.com:8443");

        var connection = connector
                .baseUri(uri)
                .connectAndAwait(); // 建立连接



        // ===== 连接成功后立即发送订阅请求 =====
//        String subscribeJson = """
//            {
//                "op":"subscribe",
//                "args":[
//                    {
//                        "channel":"tickers",
//                        "instId":"BTC-USDT"
//                    }
//                ]
//            }
//            """;
//
//        connection.sendTextAndAwait(subscribeJson);

        return  connection;


    }


}
