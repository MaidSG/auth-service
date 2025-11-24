package io.github.maidsg.websocket.eventbus;

/*******************************************************************
 *
 * @author wy
 */
public class MarketEvent implements ServerEvent{


    private final String type;
    private final long timestamp;
    private final String symbol;
    private final String rawJson;

    public MarketEvent(String type, long timestamp, String symbol, String rawJson) {
        this.type = type;
        this.timestamp = timestamp;
        this.symbol = symbol;
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


    public String getSymbol() {
        return symbol;
    }

    public String getRawJson() {
        return rawJson;
    }
}
