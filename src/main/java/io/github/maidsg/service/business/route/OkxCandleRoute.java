package io.github.maidsg.service.business.route;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.maidsg.model.dto.ws.OkxCandleDataDTO;
import io.github.maidsg.model.dto.ws.OkxTradesDataDTO;
import io.github.maidsg.model.entity.OkxCandleEntity;
import io.github.maidsg.model.entity.OkxRawTradesEntity;
import io.github.maidsg.service.dao.OkxCandleRepository;
import io.github.maidsg.util.JsonParserProvider;
import io.github.maidsg.websocket.bridge.MarketMessageBridge;
import io.github.maidsg.websocket.enums.OkxMessageTypeEnum;
import io.github.maidsg.websocket.handler.MarketMessageHandler;
import io.quarkus.logging.Log;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.ArrayList;
import java.util.EnumSet;
import java.util.List;
import java.util.Objects;

/*******************************************************************
 * 复制处理推送的k线数据
 * @author wy
 */
@ApplicationScoped
public class OkxCandleRoute implements MarketMessageHandler {


    private static final EnumSet<OkxMessageTypeEnum> SUPPORTED = EnumSet.of(
            OkxMessageTypeEnum.CANDLE,
            OkxMessageTypeEnum.CANDLE_DATA
    );

    @Inject
    ObjectMapper mapper;

    @Inject
    OkxCandleRepository candleRepository;


    @Override
    public EnumSet<OkxMessageTypeEnum> getSupportedTypes() {
        return SUPPORTED;
    }

    @Override
    public boolean validate(OkxMessageTypeEnum type, JsonParserProvider.RootFields rootFields, String message) {
        return true;
    }

    @Override
    public void handleMessage(OkxMessageTypeEnum type, JsonParserProvider.RootFields rootFields, String message) {
        switch (type) {
            case CANDLE -> handleSubscriptionAck(message);
            case CANDLE_DATA -> handleCandleData(message);
            default -> {
            }
        }
    }


    private void handleSubscriptionAck(String payload) {
        // TODO handle subscription response
//        OkxSubscriptionResp resp = toSubscriptionResp(payload);
//        Log.infof("Received ticker subscription response: %s", resp);
//        MarketMessageBridge.dispatch(payload);
    }

    private void handleCandleData(String payload) {
        persistTrades(payload);
//        MarketMessageBridge.dispatch(payload);
    }


    @Transactional
    void persistTrades(String payload) {
        try {
            OkxCandleDataDTO dto = mapper.readValue(payload, OkxCandleDataDTO.class);
            if (dto == null || dto.getArg() == null || dto.getData() == null) {
                return;
            }

            dto.getData().stream()
                    .filter(Objects::nonNull)
                    .filter(row -> row.size() >= 9)
                    .map(row -> toEntity(dto.getArg(), row))
                    .forEach(candleRepository::persist);

        } catch (Exception e) {
            Log.errorf(e, "Failed to persist OKX trades payload: %s", payload);
        }

    }

    private OkxCandleEntity toEntity(OkxCandleDataDTO.ChannelArg arg, List<String> row) {
        OkxCandleEntity entity = new OkxCandleEntity();
        entity.setChannel(arg.getChannel());
        entity.setInstrumentId(arg.getInstrumentId());
        entity.setInstrumentType(arg.getInstrumentType());
        entity.setTimestamp(parseInstant(row.get(0)));
        entity.setOpenPrice(parseDecimal(row.get(1)));
        entity.setHighPrice(parseDecimal(row.get(2)));
        entity.setLowPrice(parseDecimal(row.get(3)));
        entity.setClosePrice(parseDecimal(row.get(4)));
        entity.setVolumeContracts(parseDecimal(row.get(5)));
        entity.setVolumeCurrency(parseDecimal(row.get(6)));
        entity.setVolumeQuoteCurrency(parseDecimal(row.get(7)));
        entity.setConfirmStatus(row.get(8));
        return entity;
    }

    private Instant parseInstant(String value) {
        return value == null || value.isBlank() ? null : Instant.ofEpochMilli(Long.parseLong(value));
    }

    private BigDecimal parseDecimal(String value) {
        return value == null || value.isBlank() ? null : new BigDecimal(value);
    }



}
