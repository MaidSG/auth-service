package io.github.maidsg.api.okx.model.dto.common;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

/*******************************************************************
 *
 * @author wy
 */
@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class OkxServerTime {

    private String ts;

}
