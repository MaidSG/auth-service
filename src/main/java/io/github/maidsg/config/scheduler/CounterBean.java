package io.github.maidsg.config.scheduler;

import io.quarkus.scheduler.Scheduled;
import io.quarkus.scheduler.ScheduledExecution;
import jakarta.enterprise.context.ApplicationScoped;

import java.util.concurrent.atomic.AtomicInteger;

/*******************************************************************
 *
 * @author wy
 */
@ApplicationScoped
public class CounterBean {




//    private AtomicInteger counter = new AtomicInteger();
//
//    public int get() {
//        return counter.get();
//    }
//
//    @Scheduled(every="10s")
//    void increment() {
//        counter.incrementAndGet();
//        System.out.println("Incremented counter to " + counter.get());
//
//    }

//    @Scheduled(cron="0 15 10 * * ?")
//    void cronJob(ScheduledExecution execution) {
//        counter.incrementAndGet();
//        System.out.println(execution.getScheduledFireTime());
//    }

//    @Scheduled(cron = "{cron.expr}")
//    void cronJobWithExpressionInConfig() {
//        counter.incrementAndGet();
//        System.out.println("Cron expression configured in application.properties");
//    }



}
