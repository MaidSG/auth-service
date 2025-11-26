package io.github.maidsg.util;

import java.time.Instant;
import java.time.format.DateTimeFormatter;

/*******************************************************************
 *
 * @author wy
 */
public class IsoDateUtil {

    // 定义毫秒精度的格式化器
    private static final DateTimeFormatter MILLIS_FORMATTER =
            DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
                    .withZone(java.time.ZoneOffset.UTC);

    public static String getIsoWithMillisPrecision() {
        Instant now = Instant.now();
        // 截断到毫秒
        Instant truncated = now.truncatedTo(java.time.temporal.ChronoUnit.MILLIS);
        return MILLIS_FORMATTER.format(truncated);
    }

}
