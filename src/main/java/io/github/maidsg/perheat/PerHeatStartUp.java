package io.github.maidsg.perheat;

import io.github.maidsg.api.okx.model.client.OkxPublicResp;
import io.github.maidsg.api.okx.model.dto.common.Instrument;
import io.github.maidsg.service.business.OkxInstrumentsService;
import io.github.maidsg.websocket.manager.OkxInstrumentsManager;
import io.quarkus.logging.Log;
import io.quarkus.runtime.StartupEvent;
import jakarta.enterprise.event.Observes;
import jakarta.inject.Inject;
import jakarta.inject.Singleton;

import java.util.function.Function;

/*******************************************************************
 *
 * @author wy
 */
@Singleton
public class PerHeatStartUp {


    @Inject
    OkxInstrumentsManager oIManger;


    void onStart(@Observes StartupEvent ev) {

        Log.info("===== 基础数据初始化开始 =====");
        // 调用接口更新交易所基础数据

        // okx 基础信息
//        oIManger.doRefreshInstruments();





    }






}
