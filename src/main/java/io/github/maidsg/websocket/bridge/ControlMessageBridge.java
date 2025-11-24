package io.github.maidsg.websocket.bridge;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.maidsg.websocket.eventbus.ControlEvent;
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
public class ControlMessageBridge {

    private static ControlMessageBridge INSTANCE;

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
        ControlMessageBridge bridge = INSTANCE;
        if (bridge == null) {
            return;
        }
        try {
            @SuppressWarnings("unchecked")
            Map<String, Object> m = bridge.mapper.readValue(json, Map.class);
            Object t = m.get("type");
            if (t == null || !"control".equals(t.toString())) {
                // 非控制消息，忽略或按需处理
                return;
            }
            String command = m.getOrDefault("command", "").toString();
            @SuppressWarnings("unchecked")
            Map<String, Object> params = (Map<String, Object>) m.get("params");
            ControlEvent evt = new ControlEvent("control", System.currentTimeMillis(), command, params, json);
            bridge.bus.publish(evt);
        } catch (Exception e) {
            Log.error("Failed to dispatch control message: " + json, e);
        }
    }


}
