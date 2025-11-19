package io.github.maidsg.debug;

import io.github.maidsg.OkxPublicWebSocketConnector;
import io.quarkus.runtime.StartupEvent;
import jakarta.enterprise.event.Observes;
import jakarta.inject.Inject;
import jakarta.inject.Singleton;

/*******************************************************************
 *
 * @author wy
 */
@Singleton
public class Startup {

    @Inject
    OkxPublicWebSocketConnector runner;
    @Inject
    UserPrinter printer;

    void onStart(@Observes StartupEvent ev) {
        runner.connect();
    }

}
