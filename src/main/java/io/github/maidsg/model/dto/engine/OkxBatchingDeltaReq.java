package io.github.maidsg.model.dto.engine;

import lombok.Builder;
import lombok.Data;

/*******************************************************************
 *
 * @author wy
 */
@Data
@Builder
public class OkxBatchingDeltaReq {

    private String symbol;

    private Long startTime;

    private Long endTime;


}
