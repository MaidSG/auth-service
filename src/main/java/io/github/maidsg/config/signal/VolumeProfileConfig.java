package io.github.maidsg.config.signal;

import io.smallrye.config.ConfigMapping;

import java.math.BigDecimal;
import java.time.Duration;
import java.util.List;

@ConfigMapping(prefix = "profile")
public interface VolumeProfileConfig {

    BigDecimal bucketWidth();
    BigDecimal highVolumeStdMultiplier();
    Duration defaultLookback();
    OrderBlock orderBlock();
    PriceDetach priceDetach();
    List<String> instIds();

    interface OrderBlock {
        BigDecimal topPercent();
        BigDecimal deltaThreshold();
    }

    interface PriceDetach {
        BigDecimal pct();
        Duration lookAhead();
    }
}
