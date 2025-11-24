package io.github.maidsg.websocket.scheduler;

import io.github.maidsg.websocket.client.OkxPublicWebSocketConnector;
import io.quarkus.logging.Log;
import io.quarkus.websockets.next.WebSocketClientConnection;
import jakarta.inject.Inject;
import org.quartz.DisallowConcurrentExecution;
import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;

/*******************************************************************
 *
 * @author wy
 */
@DisallowConcurrentExecution
public class OkxHeartbeatJob implements Job {

    @Inject
    OkxPublicWebSocketConnector runner;

    @Override
    public void execute(JobExecutionContext context) throws JobExecutionException {
        Log.debug(">>> 触发 OKX 心跳任务");
        WebSocketClientConnection conn = (WebSocketClientConnection) context.getJobDetail().getJobDataMap().get("conn");
        conn.sendTextAndAwait("ping");
    }
}

