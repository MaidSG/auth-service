package io.github.maidsg.service.business.route;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.maidsg.model.dto.ws.OkxTradesDataDTO;
import io.github.maidsg.model.entity.basic.OkxRawTradesEntity;
import io.github.maidsg.service.dao.OkxRawTradesRepository;
import io.github.maidsg.util.JsonParserProvider;
import io.github.maidsg.websocket.bridge.MarketMessageBridge;
import io.github.maidsg.websocket.enums.OkxMessageTypeEnum;
import io.github.maidsg.websocket.handler.MarketMessageHandler;
import io.quarkus.logging.Log;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.EnumSet;
import java.util.List;

/*******************************************************************
 * 保存交易数据 ,用于（核心Delta计算）计算Delta指标，识别大单流向
 * @author wy
 */
@ApplicationScoped
public class OkxtradesRoute implements MarketMessageHandler {

    private static final EnumSet<OkxMessageTypeEnum> SUPPORTED = EnumSet.of(
            OkxMessageTypeEnum.TRADE,
            OkxMessageTypeEnum.TRADE_DATA
    );

    @Inject
    ObjectMapper mapper;

    @Inject
    OkxRawTradesRepository tradesRepository;


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
            case TRADE -> handleSubscriptionAck(message);
            case TRADE_DATA -> handleTradeData(message);
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

    private void handleTradeData(String payload) {
        persistTrades(payload);
        MarketMessageBridge.dispatch(payload);
    }

    @Transactional
    void persistTrades(String payload) {
        try {
            OkxTradesDataDTO dto = mapper.readValue(payload, OkxTradesDataDTO.class);
            List<OkxTradesDataDTO.TradeData> tradeData = dto.getData();
            if (tradeData == null || tradeData.isEmpty()) {
                return;
            }
            List<OkxRawTradesEntity> entities = new ArrayList<>(tradeData.size());
            for (OkxTradesDataDTO.TradeData trade : tradeData) {
                OkxRawTradesEntity entity = new OkxRawTradesEntity();
                entity.setInstId(trade.getInstId());
                entity.setTradeId(trade.getTradeId());
                entity.setPrice(toBigDecimal(trade.getPx()));
                entity.setSize(toBigDecimal(trade.getSz()));
                entity.setSide(trade.getSide());
                entity.setTradeTimestamp(toLong(trade.getTs()));
                entity.setMatchCount(toInteger(trade.getCount()));
                entity.setSource(trade.getSource());
                entity.setSeqId(trade.getSeqId());
                entity.setRawPayload(payload);
                entities.add(entity);
            }
            tradesRepository.persist(entities);
        } catch (Exception e) {
            Log.errorf(e, "Failed to persist OKX trades payload: %s", payload);
        }
    }

    private BigDecimal toBigDecimal(String value) {
        if (value == null || value.isBlank()) {
            return null;
        }
        try {
            return new BigDecimal(value);
        } catch (NumberFormatException ex) {
            Log.warnf("Invalid decimal value: %s", value);
            return null;
        }
    }

    private Long toLong(String value) {
        if (value == null || value.isBlank()) {
            return null;
        }
        try {
            return Long.parseLong(value);
        } catch (NumberFormatException ex) {
            Log.warnf("Invalid long value: %s", value);
            return null;
        }
    }

    private Integer toInteger(String value) {
        if (value == null || value.isBlank()) {
            return null;
        }
        try {
            return Integer.parseInt(value);
        } catch (NumberFormatException ex) {
            Log.warnf("Invalid integer value: %s", value);
            return null;
        }
    }

}
