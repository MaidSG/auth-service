//package io.github.maidsg.websocket.client;
//
//import io.github.maidsg.websocket.eventbus.ControlEvent;
//import io.github.maidsg.websocket.eventbus.MemoryEventBus;
//import io.github.maidsg.websocket.eventbus.ServerEvent;
//import io.github.maidsg.websocket.manager.OkxConnectionManager;
//import io.quarkus.runtime.StartupEvent;
//import io.quarkus.websockets.next.WebSocketClient;
//import jakarta.enterprise.event.Observes;
//import jakarta.inject.Inject;
//
///*******************************************************************
// *
// * @author wy
// */
//@WebSocketClient(path = "/ws/v5/business")
//public class OkxBusinessClientEndpoint {
//
//
//    @Inject
//    MemoryEventBus bus;
//
//    @Inject
//    OkxConnectionManager manager;
//
//    void onStart(@Observes StartupEvent ev) {
//        bus.register(this::onEvent);
//    }
//
//    void onEvent(ServerEvent event) {
//        if (!(event instanceof ControlEvent)) return;
//        ControlEvent c = (ControlEvent) event;
//        String cmd = c.getCommand();
//        switch (cmd) {
//            case "subscribe":
//                // 从 c.getParams() 中读取 symbol 等信息并执行订阅
//                String subscribeJson = """
//                        {
//                            "op":"subscribe",
//                            "args":[
//                                {
//                                    "channel":"tickers",
//                                    "instId":"BTC-USDT"
//                                }
//                            ]
//                        }
//                        """;
//                manager.send(subscribeJson);
//                break;
//            case "unsubscribe":
//                // 取消订阅
//                break;
//            case "ping":
//                // 示例：响应心跳或记录
//                break;
//            default:
//                // 处理自定义控制命令
//        }
//    }
//
//
//
//}
