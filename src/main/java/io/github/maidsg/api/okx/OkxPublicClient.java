package io.github.maidsg.api.okx;

import io.github.maidsg.api.okx.model.client.OkxPublicResp;
import io.github.maidsg.api.okx.model.dto.common.Instrument;
import io.github.maidsg.api.okx.model.dto.common.OkxServerTime;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;

import java.util.List;

/*******************************************************************
 * okx 公共 REST API 客户端
 * @author wy
 */
@RegisterRestClient(configKey = "okx-api")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public interface OkxPublicClient {


    /**
     * 获取交易产品基础信息
     * @param instType 例如 SPOT / FUTURES / SWAP / OPTION
     */
    @GET
    @Path("/api/v5/public/instruments")
    OkxPublicResp<Instrument> getInstruments(
            @QueryParam("instType") String instType
    );


    /**
     * 获取服务器时间
     */
    @GET
    @Path("/api/v5/public/time")
    OkxPublicResp<OkxServerTime> getServerTime();



}
