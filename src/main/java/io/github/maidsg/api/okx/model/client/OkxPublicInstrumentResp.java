package io.github.maidsg.api.okx.model.client;


import io.github.maidsg.api.okx.model.dto.common.Instrument;
import lombok.Getter;
import org.eclipse.microprofile.openapi.annotations.media.Schema;
import java.util.List;

@Getter
@Schema(name = "OkxPublicInstrumentResp", description = "OKX 公共接口返回 - instruments 具体化响应")
public class OkxPublicInstrumentResp {

    @Schema(description = "返回码")
    private String code;

    @Schema(description = "错误信息")
    private String msg;

    @Schema(description = "返回的数据列表")
    private List<Instrument> data;

    @Schema(description = "时间戳（可选）")
    private Long ts;

    public OkxPublicInstrumentResp() {}

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public void setData(List<Instrument> data) {
        this.data = data;
    }

    public void setTs(Long ts) {
        this.ts = ts;
    }
}
