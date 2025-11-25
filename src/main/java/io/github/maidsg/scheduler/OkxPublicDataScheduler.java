package io.github.maidsg.scheduler;

import io.github.maidsg.websocket.manager.OkxInstrumentsManager;
import io.quarkus.scheduler.Scheduled;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

/*******************************************************************
 *
 * @author wy
 */
@ApplicationScoped
public class OkxPublicDataScheduler {

    @Inject
    OkxInstrumentsManager oIManger;

    /**
     * 刷新 OKX 交易对信息 (仅合约) 每天凌晨 2 点执行一次
     */
    @Scheduled(cron = "0 0 2 * * ?")
    public void refreshOkxInstruments() {
        oIManger.doRefreshInstruments();
    }




}
