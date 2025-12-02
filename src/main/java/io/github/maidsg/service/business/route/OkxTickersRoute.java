package io.github.maidsg.service.business.route;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.maidsg.model.dto.ws.OkxSubscriptionResp;
import io.github.maidsg.model.dto.ws.OkxTickersDataDTO;
import io.github.maidsg.model.entity.basic.OkxTickersEntity;
import io.github.maidsg.service.dao.OkxTickersRepository;
import io.github.maidsg.util.JsonParserProvider.RootFields;
import io.github.maidsg.websocket.bridge.MarketMessageBridge;
import io.github.maidsg.websocket.enums.OkxMessageTypeEnum;
import io.github.maidsg.websocket.handler.MarketMessageHandler;
import io.quarkus.logging.Log;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;

import java.io.IOException;
import java.math.BigDecimal;
import java.time.Instant;
import java.util.EnumSet;
import java.util.Objects;

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

    @Inject
    OkxTickersRepository tickersRepository;

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
//        MarketMessageBridge.dispatch(payload);
    }


    private void handleTickerData(String payload) {
        OkxTickersDataDTO dto = toTickerDto(payload);
        if (dto == null) {
            return;
        }
        persistTickers(dto);
        MarketMessageBridge.dispatch(payload);
    }

    @Transactional
    void persistTickers(OkxTickersDataDTO dto) {
        if (dto.getArg() == null || dto.getData() == null) {
            return;
        }
        dto.getData().stream()
                .filter(Objects::nonNull)
                .map(data -> toEntity(dto.getArg(), data))
                .forEach(tickersRepository::persist);
    }

    private OkxTickersEntity toEntity(OkxTickersDataDTO.Arg arg, OkxTickersDataDTO.TickerData data) {
        OkxTickersEntity entity = new OkxTickersEntity();
        entity.setChannel(arg.getChannel());
        entity.setInstrumentId(data.getInstId() != null ? data.getInstId() : arg.getInstId());
        entity.setInstrumentType(data.getInstType());
        entity.setLastPrice(parseDecimal(data.getLast()));
        entity.setLastSize(parseDecimal(data.getLastSz()));
        entity.setAskPrice(parseDecimal(data.getAskPx()));
        entity.setAskSize(parseDecimal(data.getAskSz()));
        entity.setBidPrice(parseDecimal(data.getBidPx()));
        entity.setBidSize(parseDecimal(data.getBidSz()));
        entity.setOpen24h(parseDecimal(data.getOpen24h()));
        entity.setHigh24h(parseDecimal(data.getHigh24h()));
        entity.setLow24h(parseDecimal(data.getLow24h()));
        entity.setVolumeCurrency24h(parseDecimal(data.getVolCcy24h()));
        entity.setVolume24h(parseDecimal(data.getVol24h()));
        entity.setSodUtc0(parseDecimal(data.getSodUtc0()));
        entity.setSodUtc8(parseDecimal(data.getSodUtc8()));
        entity.setTimestamp(parseInstant(data.getTs()));
        return entity;
    }

    private BigDecimal parseDecimal(String value) {
        return (value == null || value.isBlank()) ? null : new BigDecimal(value);
    }

    private Instant parseInstant(String value) {
        return (value == null || value.isBlank()) ? null : Instant.ofEpochMilli(Long.parseLong(value));
    }
}
