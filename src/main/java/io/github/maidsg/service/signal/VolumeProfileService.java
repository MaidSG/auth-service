package io.github.maidsg.service.signal;

import io.github.maidsg.model.dto.signal.VolumeProfileModels;
import io.github.maidsg.model.entity.signal.OrderBlockEntity;
import io.github.maidsg.model.entity.signal.VolumeProfileNodeEntity;
import io.github.maidsg.service.dao.OrderBlockRepository;
import io.github.maidsg.service.dao.VolumeProfileNodeRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import org.jboss.logging.Logger;

import java.time.Duration;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Collections;
import java.util.List;

@ApplicationScoped
public class VolumeProfileService {

    private static final Logger LOG = Logger.getLogger(VolumeProfileService.class);

    @Inject
    VolumeProfileCalculator calculator;

    @Inject
    OrderBlockDetector detector;

    @Inject
    PriceDetachValidator priceDetachValidator;

    @Inject
    VolumeProfileNodeRepository nodeRepository;

    @Inject
    OrderBlockRepository orderBlockRepository;

    public VolumeProfileResult analyze(String instId, Duration lookback) {
        Instant startTs = Instant.now();
        LOG.infof("开始分析 %s，lookback=%s", instId, lookback);

        VolumeProfileCalculator.CalculationResult calculationResult = calculator.calculate(instId, lookback);
        List<VolumeProfileModels.Node> nodes = calculationResult.nodes();
        if (nodes.isEmpty()) {
            LOG.infof("%s：无成交数据，跳过持久化", instId);
            long durationMsEmpty = ChronoUnit.MILLIS.between(startTs, Instant.now());
            return new VolumeProfileResult(Collections.emptyList(), Collections.emptyList(), 0, durationMsEmpty);
        }

        List<VolumeProfileModels.OrderBlockCandidate> candidates = detector.detect(nodes).stream()
                .filter(candidate -> priceDetachValidator.hasDetached(instId,
                        VolumeProfileModels.Node.builder()
                                .instId(instId)
                                .bucketStart(candidate.getPriceLow())
                                .bucketEnd(candidate.getPriceHigh())
                                .totalVolume(candidate.getTotalVolume())
                                .buyVolume(candidate.getNetDelta().signum() >= 0 ? candidate.getTotalVolume() : candidate.getTotalVolume().subtract(candidate.getNetDelta().abs()))
                                .sellVolume(candidate.getNetDelta().signum() < 0 ? candidate.getTotalVolume() : candidate.getTotalVolume().subtract(candidate.getNetDelta().abs()))
                                .netDelta(candidate.getNetDelta())
                                .calculatedFor(candidate.getFormationTime())
                                .build()))
                .toList();

        Instant calcTime = nodes.get(0).getCalculatedFor();

        // 将删除和写入操作放到单独的事务方法中，避免整方法使用同一事务导致连接冲突
        PersistCounts counts = persistResultsInTransaction(instId, calcTime, nodes, candidates);

        long durationMs = ChronoUnit.MILLIS.between(startTs, Instant.now());
        LOG.infof("%s：写入 volume_profile_nodes=%d, order_blocks=%d, trades=%d, 耗时=%dms", instId,
                counts.nodes(), counts.candidates(), calculationResult.tradeCount(), durationMs);
        return new VolumeProfileResult(nodes, candidates, calculationResult.tradeCount(), durationMs);
    }

    @Transactional
    public PersistCounts persistResultsInTransaction(String instId, Instant calcTime,
                                                      List<VolumeProfileModels.Node> nodes,
                                                      List<VolumeProfileModels.OrderBlockCandidate> candidates) {
        purgeExisting(instId, calcTime.toEpochMilli());
        nodes.stream().map(this::toNodeEntity).forEach(nodeRepository::persist);
        candidates.stream().map(candidate -> toOrderBlockEntity(instId, candidate)).forEach(orderBlockRepository::persist);
        return new PersistCounts(nodes.size(), candidates.size());
    }

    private void purgeExisting(String instId, long calcTimestamp) {
        nodeRepository.delete("instId = ?1 and calculatedForTime = ?2", instId, calcTimestamp);
        orderBlockRepository.delete("instId = ?1 and formationTime = ?2", instId, calcTimestamp);
    }

    private VolumeProfileNodeEntity toNodeEntity(VolumeProfileModels.Node node) {
        VolumeProfileNodeEntity entity = new VolumeProfileNodeEntity();
        entity.setInstId(node.getInstId());
        entity.setBucketStart(node.getBucketStart());
        entity.setBucketEnd(node.getBucketEnd());
        entity.setTotalVolume(node.getTotalVolume());
        entity.setBuyVolume(node.getBuyVolume());
        entity.setSellVolume(node.getSellVolume());
        entity.setNetDelta(node.getNetDelta());
        entity.setCalculatedForTime(node.getCalculatedFor().toEpochMilli());
        return entity;
    }

    private OrderBlockEntity toOrderBlockEntity(String instId, VolumeProfileModels.OrderBlockCandidate candidate) {
        OrderBlockEntity entity = new OrderBlockEntity();
        entity.setInstId(instId);
        entity.setBlockType(candidate.getType() == VolumeProfileModels.OrderBlockType.BULLISH
                ? OrderBlockEntity.BlockType.BULLISH
                : OrderBlockEntity.BlockType.BEARISH);
        entity.setPriceLow(candidate.getPriceLow());
        entity.setPriceHigh(candidate.getPriceHigh());
        entity.setTotalVolume(candidate.getTotalVolume());
        entity.setNetDelta(candidate.getNetDelta());
        entity.setFormationTime(candidate.getFormationTime().toEpochMilli());
        entity.setActive(Boolean.TRUE);
        entity.setTestedCount(0);
        return entity;
    }

    private record PersistCounts(int nodes, int candidates) {
    }

    public record VolumeProfileResult(List<VolumeProfileModels.Node> nodes,
                                      List<VolumeProfileModels.OrderBlockCandidate> orderBlocks,
                                      int tradeCount,
                                      long durationMillis) {
    }
}
