package io.github.maidsg;

import io.quarkus.logging.Log;
import io.quarkus.websockets.next.BasicWebSocketConnector;
import io.quarkus.websockets.next.WebSocketClientConnection;
import io.quarkus.websockets.next.WebSocketConnector;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.inject.Singleton;
import org.eclipse.microprofile.config.inject.ConfigProperty;

import java.net.URI;

@Singleton
public class OkxPublicWebSocketConnector {

    @Inject
    WebSocketConnector<OkxClientEndpoint> connector;

    public void connect() {
        URI uri = URI.create("wss://ws.okx.com:8443"); // 外部 ws 服务

        WebSocketClientConnection conn = connector
                .baseUri(uri)      // ws://localhost:9000
                .connectAndAwait(); // 阻塞直到连接成功

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
//        conn.sendTextAndAwait(subscribeJson);

        System.out.println("订阅消息已发送！");



    }



}
