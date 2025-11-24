package io.github.maidsg.websocket.eventbus;

import java.util.Map;

/*******************************************************************
 *
 * @author wy
 */
public class ControlEvent implements ServerEvent {
    private final String type;
    private final long timestamp;
    private final String command;
    private final Map<String, Object> params;
    private final String rawJson;

    public ControlEvent(String type, long timestamp, String command, Map<String, Object> params, String rawJson) {
        this.type = type;
        this.timestamp = timestamp;
        this.command = command;
        this.params = params;
        this.rawJson = rawJson;
    }

    @Override
    public String getType() {
        return type;
    }

    @Override
    public long getTimestamp() {
        return timestamp;
    }

    public String getCommand() {
        return command;
    }

    public Map<String, Object> getParams() {
        return params;
    }

    public String getRawJson() {
        return rawJson;
    }
}
