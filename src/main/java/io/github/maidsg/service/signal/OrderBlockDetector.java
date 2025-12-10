package io.github.maidsg.service.signal;

import io.github.maidsg.config.signal.VolumeProfileConfig;
import io.github.maidsg.model.dto.signal.VolumeProfileModels;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

import java.math.BigDecimal;
import java.math.MathContext;
import java.math.RoundingMode;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@ApplicationScoped
public class OrderBlockDetector {

    @Inject
    VolumeProfileConfig config;

    private static final MathContext MC = new MathContext(6, RoundingMode.HALF_UP);

    public List<VolumeProfileModels.OrderBlockCandidate> detect(List<VolumeProfileModels.Node> nodes) {
        if (nodes == null || nodes.isEmpty()) {
            return List.of();
        }
        int topCount = (int) Math.ceil(nodes.size() * config.orderBlock().topPercent().doubleValue());
        List<VolumeProfileModels.Node> topNodes = nodes.stream()
                .sorted(Comparator.comparing(VolumeProfileModels.Node::getTotalVolume).reversed())
                .limit(Math.max(topCount, 1))
                .collect(Collectors.toList());
        BigDecimal deltaThreshold = config.orderBlock().deltaThreshold();
        return topNodes.stream()
                .filter(node -> node.getTotalVolume().compareTo(BigDecimal.ZERO) > 0)
                .filter(node -> node.getNetDelta().abs().divide(node.getTotalVolume(), MC)
                        .compareTo(deltaThreshold) >= 0)
                .map(node -> VolumeProfileModels.OrderBlockCandidate.builder()
                        .type(node.getNetDelta().signum() >= 0 ? VolumeProfileModels.OrderBlockType.BULLISH : VolumeProfileModels.OrderBlockType.BEARISH)
                        .priceLow(node.getBucketStart())
                        .priceHigh(node.getBucketEnd())
                        .totalVolume(node.getTotalVolume())
                        .netDelta(node.getNetDelta())
                        .formationTime(node.getCalculatedFor())
                        .build())
                .collect(Collectors.toList());
    }
}
