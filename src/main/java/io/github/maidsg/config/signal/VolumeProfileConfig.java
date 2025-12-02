package io.github.maidsg.config.signal;

import io.smallrye.config.ConfigMapping;
import java.math.BigDecimal;
import java.time.Duration;

@ConfigMapping(prefix = "profile")
public interface VolumeProfileConfig {

    BigDecimal bucketWidth();
    BigDecimal highVolumeStdMultiplier();
    Duration defaultLookback();
    OrderBlock orderBlock();
    PriceDetach priceDetach();

    interface OrderBlock {
        BigDecimal topPercent();
        BigDecimal deltaThreshold();
    }

    interface PriceDetach {
        BigDecimal pct();
        Duration lookAhead();
    }
}
