package io.github.maidsg.service.signal;

import io.github.maidsg.config.signal.VolumeProfileConfig;
import io.github.maidsg.model.dto.signal.VolumeProfileModels;
import io.github.maidsg.model.entity.basic.OkxRawTradesEntity;
import io.github.maidsg.service.dao.OkxRawTradesRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

import java.math.BigDecimal;
import java.math.MathContext;
import java.math.RoundingMode;
import java.time.Duration;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

@ApplicationScoped
public class VolumeProfileCalculator {

    @Inject
    OkxRawTradesRepository tradesRepository;

    @Inject
    VolumeProfileConfig config;

    private static final MathContext MC = new MathContext(8, RoundingMode.HALF_UP);

    /**
     * 计算成交量分布
     * - 根据 instId 和 lookbackPeriod(从触发计算当前时间开始往前一天的数据)，从 okx_raw_trades 表查询原始成交数据。
     * - 确定分析的价格范围：[min(price), max(price)]。
     * - 将价格范围划分为多个宽度为 bucketWidth 的价格桶。
     * - 产出：一个有序的价格区间列表。
     * @param instId
     * @param lookback
     * @return
     */
    public CalculationResult calculate(String instId, Duration lookback) {
        Instant end = Instant.now();
        Instant start = end.minus(lookback != null ? lookback : config.defaultLookback());
        List<OkxRawTradesEntity> trades = tradesRepository.list("instId = ?1 and tradeTimestamp between ?2 and ?3",
                instId,
                start.toEpochMilli(),
                end.toEpochMilli());
        if (trades.isEmpty()) {
            return new CalculationResult(List.of(), 0);
        }
        BigDecimal minPrice = trades.stream().map(OkxRawTradesEntity::getPrice).min(Comparator.naturalOrder()).orElse(BigDecimal.ZERO);
        BigDecimal maxPrice = trades.stream().map(OkxRawTradesEntity::getPrice).max(Comparator.naturalOrder()).orElse(BigDecimal.ZERO);
        BigDecimal bucketWidth = config.bucketWidth();
        Map<BigDecimal, VolumeProfileModels.Bucket> buckets = new TreeMap<>();
        for (OkxRawTradesEntity trade : trades) {
            BigDecimal price = trade.getPrice();
            BigDecimal bucketStart = minPrice.add(price.subtract(minPrice)
                    .divide(bucketWidth, 0, RoundingMode.DOWN)
                    .multiply(bucketWidth));
            BigDecimal bucketEnd = bucketStart.add(bucketWidth);
            VolumeProfileModels.Bucket bucket = buckets.computeIfAbsent(bucketStart,
                    k -> VolumeProfileModels.Bucket.builder()
                            .start(bucketStart)
                            .end(bucketEnd)
                            .totalVolume(BigDecimal.ZERO)
                            .buyVolume(BigDecimal.ZERO)
                            .sellVolume(BigDecimal.ZERO)
                            .netDelta(BigDecimal.ZERO)
                            .build());
            BigDecimal size = trade.getSize();
            bucket.setTotalVolume(bucket.getTotalVolume().add(size));
            if ("buy".equalsIgnoreCase(trade.getSide())) {
                bucket.setBuyVolume(bucket.getBuyVolume().add(size));
                bucket.setNetDelta(bucket.getNetDelta().add(size));
            } else {
                bucket.setSellVolume(bucket.getSellVolume().add(size));
                bucket.setNetDelta(bucket.getNetDelta().subtract(size));
            }
        }
        BigDecimal avg = buckets.values().stream()
                .map(VolumeProfileModels.Bucket::getTotalVolume)
                .reduce(BigDecimal.ZERO, BigDecimal::add)
                .divide(BigDecimal.valueOf(buckets.size()), RoundingMode.HALF_UP);
        BigDecimal variance = buckets.values().stream()
                .map(b -> b.getTotalVolume().subtract(avg).pow(2, MC))
                .reduce(BigDecimal.ZERO, BigDecimal::add)
                .divide(BigDecimal.valueOf(buckets.size()), MC);
        BigDecimal std = new BigDecimal(Math.sqrt(variance.doubleValue()), MC);
        BigDecimal threshold = avg.add(std.multiply(config.highVolumeStdMultiplier(), MC));
        List<VolumeProfileModels.Node> nodes = new ArrayList<>();
        VolumeProfileModels.Bucket current = null;
        for (VolumeProfileModels.Bucket bucket : buckets.values()) {
            if (bucket.getTotalVolume().compareTo(threshold) >= 0) {
                if (current == null) {
                    current = bucket;
                } else if (bucket.getStart().subtract(current.getEnd()).abs().compareTo(config.bucketWidth().multiply(BigDecimal.valueOf(2))) <= 0) {
                    current = mergeBuckets(current, bucket);
                } else {
                    nodes.add(toNode(instId, current, end));
                    current = bucket;
                }
            } else if (current != null) {
                nodes.add(toNode(instId, current, end));
                current = null;
            }
        }
        if (current != null) {
            nodes.add(toNode(instId, current, end));
        }
        return new CalculationResult(nodes, trades.size());
    }

    private VolumeProfileModels.Node toNode(String instId, VolumeProfileModels.Bucket bucket, Instant calcTime) {
        return VolumeProfileModels.Node.builder()
                .instId(instId)
                .bucketStart(bucket.getStart())
                .bucketEnd(bucket.getEnd())
                .totalVolume(bucket.getTotalVolume())
                .buyVolume(bucket.getBuyVolume())
                .sellVolume(bucket.getSellVolume())
                .netDelta(bucket.getNetDelta())
                .calculatedFor(calcTime)
                .build();
    }

    private VolumeProfileModels.Bucket mergeBuckets(VolumeProfileModels.Bucket left, VolumeProfileModels.Bucket right) {
        return VolumeProfileModels.Bucket.builder()
                .start(left.getStart())
                .end(right.getEnd())
                .totalVolume(left.getTotalVolume().add(right.getTotalVolume()))
                .buyVolume(left.getBuyVolume().add(right.getBuyVolume()))
                .sellVolume(left.getSellVolume().add(right.getSellVolume()))
                .netDelta(left.getNetDelta().add(right.getNetDelta()))
                .build();
    }

    public record CalculationResult(List<VolumeProfileModels.Node> nodes, int tradeCount) {
    }
}
