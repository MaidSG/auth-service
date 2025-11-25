package io.github.maidsg.service.business.route;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.maidsg.model.dto.ws.OkxSubscriptionResp;
import io.github.maidsg.model.dto.ws.OkxTickersDataDTO;
import io.github.maidsg.util.JsonParserProvider.RootFields;
import io.github.maidsg.websocket.bridge.MarketMessageBridge;
import io.github.maidsg.websocket.enums.OkxMessageTypeEnum;
import io.github.maidsg.websocket.handler.MarketMessageHandler;
import io.quarkus.logging.Log;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

import java.io.IOException;
import java.util.EnumSet;

/*******************************************************************
 * ticker推送消息处理器
 * 负责订阅响应与ticker数据分发
 * @author wy
 */
@ApplicationScoped
public class OkxTickersRoute implements MarketMessageHandler{

    private static final EnumSet<OkxMessageTypeEnum> SUPPORTED = EnumSet.of(
            OkxMessageTypeEnum.TICKER,
            OkxMessageTypeEnum.TICKER_DATA
    );

    @Inject
    ObjectMapper mapper;

    private OkxTickersDataDTO toTickerDto(String payload) {
        try {
            return mapper.readValue(payload, OkxTickersDataDTO.class);
        } catch (IOException e) {
            Log.errorf(e, "Failed to parse ticker payload: %s", payload);
            return null;
        }
    }

    private OkxSubscriptionResp toSubscriptionResp(String payload) {
        try {
            return mapper.readValue(payload, OkxSubscriptionResp.class);
        } catch (IOException e) {
            Log.errorf(e, "Failed to parse subscription response payload: %s", payload);
            return null;
        }
    }

    @Override
    public EnumSet<OkxMessageTypeEnum> getSupportedTypes() {
        return SUPPORTED;
    }

    @Override
    public boolean validate(OkxMessageTypeEnum type, RootFields rootFields, String message) {
        return true;
    }

    @Override
    public void handleMessage(OkxMessageTypeEnum type, RootFields rootFields, String message) {
        switch (type) {
            case TICKER -> handleSubscriptionAck(message);
            case TICKER_DATA -> handleTickerData(message);
            default -> {
            }
        }
    }

    private void handleSubscriptionAck(String payload) {
        // TODO handle subscription response
        OkxSubscriptionResp resp = toSubscriptionResp(payload);
        Log.infof("Received ticker subscription response: %s", resp);
        MarketMessageBridge.dispatch(payload);
    }

    private void handleTickerData(String payload) {
        // TODO parse ticker data DTO and push downstream
        OkxTickersDataDTO data = toTickerDto(payload);
//        Log.infof("Received ticker data: %s", data);
        MarketMessageBridge.dispatch(payload);
    }
}
