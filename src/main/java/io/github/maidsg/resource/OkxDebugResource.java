package io.github.maidsg.resource;

import io.github.maidsg.api.okx.model.client.OkxPublicInstrumentResp;
import io.github.maidsg.api.okx.model.client.OkxPublicResp;
import io.github.maidsg.api.okx.model.dto.common.Instrument;
import io.github.maidsg.engine.OkxDeltaEngine;
import io.github.maidsg.model.dto.engine.OkxBatchingDeltaReq;
import io.github.maidsg.model.dto.engine.OkxDeltaDTO;
import io.github.maidsg.service.business.OkxInstrumentsService;
import io.quarkus.vertx.runtime.jackson.JsonUtil;
import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.media.Content;
import org.eclipse.microprofile.openapi.annotations.media.Schema;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;

import java.util.Collections;

/**
 * OKX 调试接口
 * @author wy
 */
@Path("/okx/debug")
@Tag(name = "OKX 调试接口", description = "OKX 调试接口")
public class OkxDebugResource {

    @Inject
    OkxInstrumentsService instrumentsService;

    @Inject
    OkxDeltaEngine deltaEngine;

    @GET
    @Path("/instruments")
    @Produces(MediaType.APPLICATION_JSON)
    @Operation(summary = "获取交易产品基础信息", description = "调用 OKX /api/v5/public/instruments 接口")
    @APIResponse(
            responseCode = "200",
            description = "成功返回产品信息",
            content = @Content(schema = @Schema(implementation = OkxPublicInstrumentResp.class))
    )
    public OkxPublicResp<Instrument> getInstruments(@QueryParam("instType") String instType) {
        return instrumentsService.getSpotInstruments(instType);
    }

    @GET
    @Path("/delta")
    @Produces(MediaType.APPLICATION_JSON)
    @Operation(summary = "测试 delta 计算引擎 批量方法", description = "测试 delta 计算引擎")
    @APIResponse(
            responseCode = "200",
            description = "成功返回 delta 计算结果",
            content = @Content(schema = @Schema(implementation = OkxDeltaDTO.class))
    )
    public OkxPublicResp<OkxDeltaDTO> testDeltaEngine(@QueryParam("symbol") String symbol,
                                                    @QueryParam("startTime") Long startTime,
                                                    @QueryParam("endTime") Long endTime) {
        OkxDeltaDTO deltaDTO = deltaEngine.getBatchDelta(OkxBatchingDeltaReq.builder()
                .symbol(symbol)
                .startTime(startTime)
                .endTime(endTime)
                .build()
        );
        OkxPublicResp<OkxDeltaDTO> resp = new OkxPublicResp<>();
        resp.setCode("0");
        resp.setMsg("success");
        resp.setData(Collections.singletonList(deltaDTO));
        return resp;
    }






}
