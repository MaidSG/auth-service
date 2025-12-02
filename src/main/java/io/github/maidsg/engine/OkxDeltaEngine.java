package io.github.maidsg.engine;

import io.github.maidsg.model.dto.engine.OkxBatchingDeltaReq;
import io.github.maidsg.model.dto.engine.OkxDeltaDTO;
import io.github.maidsg.model.entity.basic.OkxRawTradesEntity;
import io.github.maidsg.model.entity.metrics.OkxDeltaMetricsEntity;
import io.github.maidsg.service.dao.OkxDeltaMetricsRepository;
import io.github.maidsg.service.dao.OkxRawTradesRepository;
import io.quarkus.panache.common.Sort;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

import java.math.BigDecimal;
import java.time.Duration;
import java.util.List;

/*******************************************************************
 *
 * @author wy
 */
@ApplicationScoped
public class OkxDeltaEngine {

    /**
     * 合约单位为张
     */
    public static final BigDecimal LARGE_TRADE_THRESHOLD = new BigDecimal("100");

    public static final String DELTA_BUY = "buy";
    public static final String DELTA_SELL = "sell";


    @Inject
    OkxRawTradesRepository tradesRepository;

    @Inject
    OkxDeltaMetricsRepository deltaMetricsRepository;


    // 批处理计算每3min的delta
    public OkxDeltaDTO getBatchDelta(OkxBatchingDeltaReq req) {

        if (req.getStartTime() == null || req.getEndTime() == null) {
            throw new IllegalArgumentException("Start time and end time must be provided");
        }

        if (req.getEndTime().compareTo(req.getStartTime()) < 0) {
            throw new IllegalArgumentException("End time must be after start time");
        }

        List<OkxRawTradesEntity> list =
                tradesRepository.list(
                        " tradeTimestamp >= ?1 and tradeTimestamp <= ?2",
                        Sort.ascending("tradeTimestamp"),
//                        req.getSymbol(),
                        req.getStartTime(),
                        req.getEndTime()
                );

        if (list.isEmpty()) {
            return null;
        }

        BigDecimal totalVolume = BigDecimal.ZERO;
        BigDecimal buyVolume = BigDecimal.ZERO;
        BigDecimal sellVolume = BigDecimal.ZERO;
        BigDecimal netDelta = BigDecimal.ZERO;
        BigDecimal largeBuyVolume = BigDecimal.ZERO;
        BigDecimal largeSellVolume = BigDecimal.ZERO;
        BigDecimal largeNetDelta = BigDecimal.ZERO;
        Long tradeCount = 0L;
        Long largeTradeCount = 0L;

        for (OkxRawTradesEntity trade : list) {
//            System.out.println(trade.getTradeId() + " | " + trade.getPrice() + " | " + trade.getSize() + " | " + trade.getSide() + " | " + trade.getTradeTimestamp());

            if (trade.getSide().equals(DELTA_BUY)) {
                // 主动买入
                buyVolume = buyVolume.add(trade.getSize());
                netDelta = netDelta.add(trade.getSize());
                totalVolume = totalVolume.add(trade.getSize());

                if (trade.getSize().compareTo(LARGE_TRADE_THRESHOLD) >= 0) {
                    // 大单买入
                    largeBuyVolume = largeBuyVolume.add(trade.getSize());
                    largeNetDelta = largeNetDelta.add(trade.getSize());
                    largeTradeCount += 1;
                }

            } else if (trade.getSide().equals(DELTA_SELL)) {
                // 主动卖出
                sellVolume = sellVolume.add(trade.getSize());
                netDelta = netDelta.subtract(trade.getSize());
                totalVolume = totalVolume.subtract(trade.getSize());

                if (trade.getSize().compareTo(LARGE_TRADE_THRESHOLD) >= 0) {
                    // 大单卖出
                    largeSellVolume = largeSellVolume.add(trade.getSize());
                    largeNetDelta = largeNetDelta.subtract(trade.getSize());
                    largeTradeCount += 1;
                }
            }

            tradeCount += 1;
        }

        return OkxDeltaDTO.builder()
                .totalVolume(totalVolume)
                .buyVolume(buyVolume)
                .sellVolume(sellVolume)
                .netDelta(netDelta)
                .largeBuyVolume(largeBuyVolume)
                .largeSellVolume(largeSellVolume)
                .largeNetDelta(largeNetDelta)
                .tradeCount(tradeCount)
                .largeTradeCount(largeTradeCount)
                .build();
    }


    // 事件响应调度执行保存逻辑
    public void doCalculateDeltaData(Long windowEnd) {

        // 从队列获取上一个3mink线窗口用于计算delta的数据
        long windowStart = windowEnd - Duration.ofMinutes(3).toMillis();
        OkxBatchingDeltaReq req = OkxBatchingDeltaReq.builder()
                .startTime(windowStart)
                .endTime(windowEnd)
                .build();
        OkxDeltaDTO delta = getBatchDelta(req);


        if (delta == null) {
            // 无数据不保存
            return;
        }

        OkxDeltaMetricsEntity deltaMetricsEntity = new OkxDeltaMetricsEntity();
        deltaMetricsEntity.setInstId("BTC-USDT-SWAP");
        deltaMetricsEntity.setTimeWindow("3m");
        deltaMetricsEntity.setStartTime(windowStart);
        deltaMetricsEntity.setEndTime(windowEnd);
        deltaMetricsEntity.setBuyVolume(delta.getBuyVolume().toPlainString());
        deltaMetricsEntity.setSellVolume(delta.getSellVolume().toPlainString());
        deltaMetricsEntity.setNetDelta(delta.getNetDelta().toPlainString());
        deltaMetricsEntity.setLargeTrades(delta.getLargeTradeCount().intValue());
        deltaMetricsEntity.setLargeBuyVolume(delta.getLargeBuyVolume().toPlainString());
        deltaMetricsEntity.setLargeSellVolume(delta.getLargeSellVolume().toPlainString());

        deltaMetricsRepository.persist(deltaMetricsEntity);

    }



    // 流处理计算


}
