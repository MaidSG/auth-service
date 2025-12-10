package io.github.maidsg.model.dto.signal;

import lombok.*;

import java.math.BigDecimal;
import java.time.Instant;

public final class VolumeProfileModels {

    private VolumeProfileModels() {}

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Bucket {
        BigDecimal start;
        BigDecimal end;
        BigDecimal totalVolume;
        BigDecimal buyVolume;
        BigDecimal sellVolume;
        BigDecimal netDelta;
    }

    @Value
    @Builder
    public static class Node {
        String instId;
        BigDecimal bucketStart;
        BigDecimal bucketEnd;
        BigDecimal totalVolume;
        BigDecimal buyVolume;
        BigDecimal sellVolume;
        BigDecimal netDelta;
        Instant calculatedFor;
    }

    public enum OrderBlockType {
        BULLISH,
        BEARISH
    }

    @Value
    @Builder
    public static class OrderBlockCandidate {
        OrderBlockType type;
        BigDecimal priceLow;
        BigDecimal priceHigh;
        BigDecimal totalVolume;
        BigDecimal netDelta;
        Instant formationTime;
    }
}
