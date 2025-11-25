package io.github.maidsg.websocket.bridge;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.maidsg.websocket.eventbus.ControlEvent;
import io.github.maidsg.websocket.eventbus.MarketEvent;
import io.github.maidsg.websocket.eventbus.MemoryEventBus;
import io.quarkus.logging.Log;
import io.quarkus.runtime.StartupEvent;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.event.Observes;
import jakarta.inject.Inject;

import java.util.Map;

/*******************************************************************
 *
 * @author wy
 */
@ApplicationScoped
public class MarketMessageBridge {

    private static MarketMessageBridge INSTANCE;

    @Inject
    MemoryEventBus bus;

    @Inject
    ObjectMapper mapper;

    void onStart(@Observes StartupEvent ev) {
        INSTANCE = this;
    }

    /**
     * 分发控制消息到事件总线
     * @param json 控制消息 JSON 字符串
     */
    public static void dispatch(String json) {
        MarketMessageBridge bridge = INSTANCE;
        if (bridge == null) {
            return;
        }
        try {
            MarketEvent evt = new MarketEvent("market", System.currentTimeMillis(), "", json);
            bridge.bus.publish(evt);
        } catch (Exception e) {
            Log.error("Failed to dispatch control message: " + json, e);
        }
    }




}
