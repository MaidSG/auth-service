package io.github.maidsg.perheat;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.maidsg.api.okx.OkxAccountClient;
import io.github.maidsg.api.okx.OkxPublicClient;
import io.github.maidsg.api.okx.model.client.OkxPublicResp;
import io.github.maidsg.api.okx.model.dto.common.Instrument;
import io.github.maidsg.api.okx.model.dto.common.OkxServerTime;
import io.github.maidsg.engine.OkxDeltaEngine;
import io.github.maidsg.model.dto.engine.OkxBatchingDeltaReq;
import io.github.maidsg.service.business.OkxInstrumentsService;
import io.github.maidsg.websocket.client.OkxPublicWebSocketConnector;
import io.github.maidsg.websocket.manager.OkxInstrumentsManager;
import io.quarkus.logging.Log;
import io.quarkus.runtime.StartupEvent;
import jakarta.enterprise.event.Observes;
import jakarta.inject.Inject;
import jakarta.inject.Singleton;
import jakarta.json.Json;
import org.eclipse.microprofile.config.inject.ConfigProperty;
import org.eclipse.microprofile.rest.client.inject.RestClient;

import java.util.List;
import java.util.function.Function;

/*******************************************************************
 *
 * @author wy
 */
@Singleton
public class PerHeatStartUp {


    @Inject
    OkxInstrumentsManager oIManger;
    @RestClient
    OkxPublicClient okxPublicClient;

    @RestClient
    OkxAccountClient okxAccountClient;

    @ConfigProperty(name = "okx.api.key")
    String okxApiKey;

    @ConfigProperty(name = "okx.api.secret")
    String okxApiSecret;

    @ConfigProperty(name = "okx.api.passphrase")
    String okxApiPassphrase;

    @Inject
    ObjectMapper objectMapper;



    @Inject
    OkxDeltaEngine okxDeltaEngine;

    @Inject
    OkxPublicWebSocketConnector connector;



    void onStart(@Observes StartupEvent ev) {

        Log.info("===== 系统初始化开始 =====");
        connector.connectPC();
        connector.connectBusiness();


        okxDeltaEngine.getBatchDelta(
                OkxBatchingDeltaReq.builder()
                        .symbol("BTC-USD-SWAP")
                        .startTime(1764563134233L)
                        .endTime(1764563134371L)

                        .build()
        );

        // 调用接口更新交易所基础数据

        // okx 基础信息
//        oIManger.doRefreshInstruments();

        // 登录
//        OkxPublicResp<OkxServerTime> serverTime = okxPublicClient.getServerTime();
//        Log.info("获取OKX服务器时间: " + serverTime.getFirst().getTs());
//        String accountJson = okxAccountClient.getAccountBalance("USDT");
//        Log.info("获取OKX账户余额: " + accountJson);


    }


}
