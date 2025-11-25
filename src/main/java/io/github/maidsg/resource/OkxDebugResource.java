package io.github.maidsg.resource;

import io.github.maidsg.api.okx.model.client.OkxPublicInstrumentResp;
import io.github.maidsg.api.okx.model.client.OkxPublicResp;
import io.github.maidsg.api.okx.model.dto.common.Instrument;
import io.github.maidsg.service.business.OkxInstrumentsService;
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

/**
 * OKX 调试接口
 * @author wy
 */
@Path("/okx/debug")
@Tag(name = "OKX 调试接口", description = "OKX 调试接口")
public class OkxDebugResource {

    @Inject
    OkxInstrumentsService instrumentsService;

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



}
