package io.github.maidsg.service.business;

import io.github.maidsg.util.JsonParserProvider;
import io.github.maidsg.util.JsonParserProvider.RootFields;
import io.github.maidsg.websocket.enums.OkxMessageTypeEnum;
import io.github.maidsg.websocket.handler.MarketMessageHandler;
import io.quarkus.logging.Log;
import io.quarkus.runtime.StartupEvent;
import jakarta.annotation.Priority;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.event.Observes;
import jakarta.enterprise.inject.Instance;
import jakarta.inject.Inject;

import java.io.IOException;
import java.util.EnumMap;
import java.util.EnumSet;
import java.util.Map;

/*******************************************************************
 * 消息分类路由 接收Okx交易所推送的消息后，根据消息类型进行分发处理
 * @author wy
 */
@ApplicationScoped
public class OkxMessageDispatcher {

    private final Instance<MarketMessageHandler> handlerInstances;
    private final JsonParserProvider parserProvider;

    private EnumMap<OkxMessageTypeEnum, MarketMessageHandler> handlerMap;

    @Inject
    public OkxMessageDispatcher(Instance<MarketMessageHandler> handlerInstances, JsonParserProvider parserProvider) {
        this.handlerInstances = handlerInstances;
        this.parserProvider = parserProvider;
    }

    void onStart(@Observes @Priority(2000) StartupEvent ev) {
        handlerMap = new EnumMap<>(OkxMessageTypeEnum.class);
        for (MarketMessageHandler handler : handlerInstances) {
            EnumSet<OkxMessageTypeEnum> types = handler.getSupportedTypes();
            if (types == null || types.isEmpty()) {
                Log.warnf("Handler %s did not declare supported types, skipping", handler.getClass().getSimpleName());
                continue;
            }
            for (OkxMessageTypeEnum type : types) {
                MarketMessageHandler previous = handlerMap.putIfAbsent(type, handler);
                if (previous != null && previous != handler) {
                    Log.warnf("Duplicate handler registration detected for type %s, keeping %s and ignoring %s", type,
                            previous.getClass().getSimpleName(), handler.getClass().getSimpleName());
                } else {
                    Log.debugf("Registered handler %s for type %s", handler.getClass().getSimpleName(), type);
                }
            }
        }
    }

    public void dispatch(OkxMessageTypeEnum type, RootFields rootFields, String payload) {
        MarketMessageHandler handler = handlerMap.get(type);
        if (handler == null) {
            Log.warnf("No handler registered for type %s, dropping payload", type);
            return;
        }
        if (!handler.validate(type, rootFields, payload)) {
            Log.debugf("Payload validation failed for handler %s, type %s", handler.getClass().getSimpleName(), type);
            return;
        }
        handler.handleMessage(type, rootFields, payload);
    }

    public void dispatch(RootFields rootFields, String payload) {
        OkxMessageTypeEnum type = resolveMessageType(rootFields);
        if (type == null) {
            Log.debugf("Unable to resolve message type from payload: %s", payload);
            return;
        }

        if (type == OkxMessageTypeEnum.LOGIN) {
            Log.infof("====== Received LOGIN message: %s", payload);
            return;
        }

        if (type == OkxMessageTypeEnum.ERROR) {
            Log.errorf("====== Received ERROR message: %s", payload);
            return;
        }

        dispatch(type, rootFields, payload);
    }

    public void dispatchRaw(String payload) {
        try {
            RootFields rootFields = parserProvider.parseRoot(payload);
            dispatch(rootFields, payload);
        } catch (IOException e) {
            Log.errorf(e, "Failed to parse OKX payload: %s", payload);
        }
    }

    private OkxMessageTypeEnum resolveMessageType(RootFields rootFields) {
        String event = rootFields.getEvent();
        String channel = rootFields.getChannel();
        String type = "";

        if ("subscribe".equalsIgnoreCase(event) || "error".equalsIgnoreCase(event)) {
            return resolveSubscriptionType(channel);
        }

        if (channel == null && event == null) {
            return null;
        }

        type = channel == null ? event.toLowerCase() : channel.toLowerCase();

        return switch (type) {
            case "tickers" -> OkxMessageTypeEnum.TICKER_DATA;
            case "books" -> OkxMessageTypeEnum.ORDER_BOOK_DATA;
            case "bbo-tbt" -> OkxMessageTypeEnum.ORDER_BOOK_TBT_DATA;
            case "books5" -> OkxMessageTypeEnum.ORDER_BOOK_5_DATA;
            case "trades" -> OkxMessageTypeEnum.TRADE_DATA;
            case "candle3m" -> OkxMessageTypeEnum.CANDLE_DATA;
            case "login" -> OkxMessageTypeEnum.LOGIN;
            default -> null;
        };
    }

    private OkxMessageTypeEnum resolveSubscriptionType(String channel) {
        if (channel == null) {
            return null;
        }
        return switch (channel.toLowerCase()) {
            case "tickers" -> OkxMessageTypeEnum.TICKER;
            case "books" -> OkxMessageTypeEnum.ORDER_BOOK;
            case "bbo-tbt" -> OkxMessageTypeEnum.ORDER_BOOK_TBT;
            case "books5" -> OkxMessageTypeEnum.ORDER_BOOK_5;
            case "trades" -> OkxMessageTypeEnum.TRADE;
            case "error" -> OkxMessageTypeEnum.ERROR;
            default -> null;
        };
    }

    public Map<OkxMessageTypeEnum, MarketMessageHandler> getHandlerMap() {
        return handlerMap;
    }
}
