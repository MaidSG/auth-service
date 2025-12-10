package io.github.maidsg.scheduler;

import io.github.maidsg.config.signal.VolumeProfileConfig;
import io.github.maidsg.service.signal.VolumeProfileService;
import io.quarkus.scheduler.Scheduled;
import io.quarkus.scheduler.ScheduledExecution;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import org.jboss.logging.Logger;

import java.time.Duration;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.List;

@ApplicationScoped
public class VolumeProfileScheduler {

    private static final Logger LOG = Logger.getLogger(VolumeProfileScheduler.class);

    @Inject
    VolumeProfileService volumeProfileService;

    @Inject
    VolumeProfileConfig config;

    @Scheduled(every = "1h", delayed = "10s")
    void run(ScheduledExecution execution) {
        Instant batchStart = Instant.now();
        List<String> instIds = config.instIds();
        if (instIds == null || instIds.isEmpty()) {
            LOG.warn("profile.inst-ids 未配置，跳过 VolumeProfileScheduler");
            return;
        }
        Duration lookback = config.defaultLookback();
        int success = 0;
        for (String instId : instIds) {
            Instant start = Instant.now();
            try {
                volumeProfileService.analyze(instId, lookback);
                success++;
                LOG.infof("Scheduler %s 完成，耗时 %dms", instId, ChronoUnit.MILLIS.between(start, Instant.now()));
            } catch (Exception e) {
                LOG.errorf(e, "%s：VolumeProfileScheduler 执行失败", instId);
            }
        }
        LOG.infof("VolumeProfileScheduler 完成 %d/%d 个 instId，批次耗时 %dms", success, instIds.size(), ChronoUnit.MILLIS.between(batchStart, Instant.now()));
    }


    public static void main(String[] args) {
        Duration lookback = Duration.parse("PT24H");
        System.out.println();
        Instant end = Instant.now();
        Instant start = end.minus(lookback);

        System.out.println("start: " + start);
        System.out.println("end: " + end);

    }


}
