package io.github.maidsg.service.signal;

import io.github.maidsg.config.signal.VolumeProfileConfig;
import io.github.maidsg.model.dto.signal.VolumeProfileModels;
import io.github.maidsg.model.entity.basic.OkxCandleEntity;
import io.github.maidsg.service.dao.OkxCandleRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.List;

@ApplicationScoped
public class PriceDetachValidator {

    @Inject
    OkxCandleRepository candleRepository;

    @Inject
    VolumeProfileConfig config;

    public boolean hasDetached(String instId, VolumeProfileModels.Node node) {
        Instant start = node.getCalculatedFor();
        Instant end = start.plus(config.priceDetach().lookAhead());
        List<OkxCandleEntity> candles = candleRepository.list("instrumentId = ?1 and timestamp between ?2 and ?3",
                instId,
                start,
                end);
        if (candles.isEmpty()) {
            return false;
        }
        BigDecimal detachPct = config.priceDetach().pct();
        BigDecimal range = node.getBucketEnd().subtract(node.getBucketStart());
        BigDecimal threshold = range.multiply(detachPct);
        return candles.stream().anyMatch(c ->
                c.getHighPrice().subtract(node.getBucketEnd()).compareTo(threshold) >= 0
                        || node.getBucketStart().subtract(c.getLowPrice()).compareTo(threshold) >= 0);
    }
}

