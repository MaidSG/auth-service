package io.github.maidsg.websocket.heartbeat;

import io.github.maidsg.websocket.scheduler.OkxHeartbeatJob;
import io.quarkus.logging.Log;
import io.quarkus.websockets.next.WebSocketClientConnection;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import org.quartz.*;

import java.util.Date;

/*******************************************************************
 * 收到 或者发送 ws 后隔20s 发送定时心跳
 * 如果有待执行的定时心跳任务,则不再发送新的心跳任务
 * @author wy
 */
@ApplicationScoped
public class OkxHeartbeatManager {


    @Inject
    Scheduler scheduler;


    public void triggerHeartbeat(WebSocketClientConnection conn) throws SchedulerException {

        JobKey jobKey = heartbeatJobKey();

        // 🔒 先检查是否已存在
        if (scheduler.checkExists(jobKey)) {
            Log.debug(">>> <UNK> OKX <UNK>");
            return;
        }

        // 创建 JobDetail
        JobDetail job = JobBuilder.newJob(OkxHeartbeatJob.class)
                .withIdentity(jobKey)
                .build();

        // 把连接对象放入 JobDataMap（在内存 job store 中允许这样做）
        job.getJobDataMap().put("conn", conn);

        // 一次性触发，延迟 20 秒
        Trigger trigger = TriggerBuilder.newTrigger()
                .withIdentity("trigger-heartbeat-task", "system-heartbeat")
                .startAt(new Date(System.currentTimeMillis() + 10_000))
                .build();

        scheduler.scheduleJob(job, trigger);
    }


    public JobKey heartbeatJobKey() {
        return new JobKey("heartbeat-task", "system-heartbeat");
    }



}
