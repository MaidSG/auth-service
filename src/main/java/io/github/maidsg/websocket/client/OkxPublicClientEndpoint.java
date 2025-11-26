package io.github.maidsg.websocket.client;

import io.github.maidsg.service.business.OkxMessageDispatcher;
import io.github.maidsg.service.business.OkxSignatureService;
import io.github.maidsg.websocket.eventbus.ControlEvent;
import io.github.maidsg.websocket.eventbus.MemoryEventBus;
import io.github.maidsg.websocket.eventbus.ServerEvent;
import io.github.maidsg.websocket.manager.OkxConnectionManager;
import io.quarkus.logging.Log;
import io.quarkus.runtime.StartupEvent;
import io.quarkus.websockets.next.*;
import io.vertx.core.buffer.Buffer;
import jakarta.enterprise.event.Observes;
import jakarta.inject.Inject;

import java.util.Date;

/**
 * OKX 公共 WebSocket 客户端端点
 * 接口@WebSocketClient 提供的都是@SessionScoped 实现
 * 所以WebSocketClientConnection对象
 * 只适用于被 @OnOpen 、 @OnTextMessage 、 @OnBinaryMessage
 * 和 @OnClose 注解的方法
 * <p>
 * WS / 行情频道
 * 获取产品的最新成交价、买一价、卖一价和24小时交易量等信息。在提前挂单阶段，best ask的价格有机会低于best bid。
 * 最快100ms推送一次，没有触发事件时不推送，触发推送的事件有：成交、买一卖一发生变动。
 * <p>
 * WS / 交易频道
 * 获取最近的成交数据，有成交数据就推送，每次推送可能聚合多条成交数据。
 * 根据每个taker订单的不同成交价格推送消息，并使用count字段表示聚合的订单匹配数量。
 */
@WebSocketClient(path = "/ws/v5/public")
public class OkxPublicClientEndpoint {

    @Inject
    MemoryEventBus bus;

    @Inject
    OkxConnectionManager manager;

    @Inject
    OkxPublicWebSocketConnector connector;

    @Inject
    OkxMessageDispatcher dispatcher;

    @Inject
    OkxSignatureService signatureService;

    private static String CLIENT_ID = "";


    void onStart(@Observes StartupEvent ev) {
        bus.register(this::onEvent);
    }


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
                manager.send(CLIENT_ID, subscribeJson);
                break;
            case "unsubscribe":
                // 取消订阅
                String unsubscribeJson = """
                        {
                            "op":"unsubscribe",
                            "args":[
                                {
                                    "channel":"tickers",
                                    "instId":"BTC-USDT"
                                }
                            ]
                        }
                        """;
                manager.send(CLIENT_ID, unsubscribeJson);

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

//        Log.debug(">>> 收到 OKX 公共 WebSocket 消息: " + msg);
//        System.out.println(msg);
        // 区分消息,分发给不同的工厂处理

        // 行情频道 成功订阅响应 失败响应 行情数据推送
        dispatcher.dispatchRaw(msg);

        // 交易频道数据


    }

    @OnOpen
    void onOpen(WebSocketClientConnection conn) {
        Log.info(">>> 已连接到 OKX 公共 WebSocket 行情频道");
        CLIENT_ID = conn.clientId();
        manager.setConnection(CLIENT_ID, conn);

        // 订阅交易频道数据
        String subscribeJson = """
                {
                    "op":"subscribe",
                    "args":[
                        {
                            "channel":"trades",
                            "instId":"BTC-USDT-SWAP"
                        }
                    ]
                }
                """;
        manager.send(CLIENT_ID, subscribeJson);

        // 订阅行情频道数据
        subscribeJson = """
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
        manager.send(CLIENT_ID, subscribeJson);


        // 订阅深度频道数据
        // 登录
        Long timestamp = System.currentTimeMillis() / 1000;

        String loginJson = """
                {
                    "op":"login",
                    "args":[
                        {
                            "apiKey":"%s",
                            "passphrase":"%s",
                            "timestamp":"%s",
                            "sign":"%s"
                        }
                    ]
                }
                """.formatted(
                signatureService.getApiKey(),
                signatureService.getPassphrase(),
                timestamp.toString(),
                signatureService.buildWebSocketSig(timestamp.toString(), signatureService.getApiSecret())
        );
        manager.send(CLIENT_ID, loginJson);


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
        connector.connectPC();
        Log.warn(">>> OKX 公共 WebSocket 连接已关闭");

    }


}
