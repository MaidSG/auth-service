package io.github.maidsg.websocket.client;

import io.github.maidsg.service.business.OkxMessageDispatcher;
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

/*******************************************************************
 * WS / K线频道
 * 获取K线数据，推送频率最快是间隔1秒推送一次数据。
 * @author wy
 */
@WebSocketClient(path = "/ws/v5/business")
public class OkxBusinessClientEndpoint {


    @Inject
    MemoryEventBus bus;

    @Inject
    OkxConnectionManager manager;

    @Inject
    OkxPublicWebSocketConnector connector;

    @Inject
    OkxMessageDispatcher dispatcher;

    private static  String CLIENT_ID = "";

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
                manager.send(CLIENT_ID,subscribeJson);
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

//        Log.debug(">>> 收到 OKX 公共 WebSocket 消息: " + msg);
//        System.out.println(msg);
        // 区分消息,分发给不同的工厂处理

        // 行情频道 成功订阅响应 失败响应 行情数据推送
        dispatcher.dispatchRaw(msg);

        // 交易频道数据



    }

    @OnOpen
    void onOpen(WebSocketClientConnection conn) {
        Log.info(">>> 已连接到 OKX 公共 WebSocket K线频道");
        CLIENT_ID = conn.clientId();
        manager.setConnection(CLIENT_ID, conn);

        // 订阅交易频道数据
        String subscribeJson = """
                        {
                            "op":"subscribe",
                            "args":[
                                {
                                    "channel":"candle3m",
                                    "instId":"BTC-USDT-SWAP"
                                }
                            ]
                        }
                        """;
        manager.send(CLIENT_ID,subscribeJson);

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
        connector.connectBusiness();
        Log.warn(">>> OKX 公共 WebSocket 连接已关闭");

    }



}
