package io.github.maidsg.websocket.manager;

import io.github.maidsg.api.okx.model.client.OkxPublicResp;
import io.github.maidsg.api.okx.model.dto.common.Instrument;
import io.github.maidsg.service.business.OkxInstrumentsService;
import io.quarkus.logging.Log;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

import java.util.function.Function;

/*******************************************************************
 *
 * @author wy
 */
@ApplicationScoped
public class OkxInstrumentsManager {

    @Inject
    OkxInstrumentsService okxInstrumentService;

    /**
     * 刷新 OKX 交易对信息 (仅合约)
     */
    public void doRefreshInstruments() {
        try {
            OkxPublicResp<Instrument> resp = okxInstrumentService.getSpotInstruments(""); // 传空以使用服务端默认类型
            if (resp != null && resp.getData() != null && !resp.getData().isEmpty()) {

                Log.infof("Fetched %d OKX instruments, persisting...", resp.getData().size());
                // 使用 id 提取器把 DTO 列表批量 upsert 到库
                Function<Object, String> idExtractor = obj -> ((Instrument) obj).getInstId();
                okxInstrumentService.saveOrUpdateAll(resp.getData(), idExtractor);
                Log.info("===== OKX 交易对信息初始化完成 =====");
            } else {
                Log.info("===== OKX 交易对信息完成 : 无数据同步 =====");
            }
        } catch (Exception e) {
            Log.error("===== OKX 交易对信息完成 : 更新异常 =====",e);
        }
    }


}
