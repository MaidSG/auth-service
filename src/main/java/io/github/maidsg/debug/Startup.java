package io.github.maidsg.debug;

import io.github.maidsg.engine.OkxDeltaEngine;
import io.github.maidsg.model.dto.engine.OkxBatchingDeltaReq;
import io.github.maidsg.websocket.client.OkxPublicWebSocketConnector;
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
    OkxPublicWebSocketConnector connector;


    void onStart(@Observes StartupEvent ev) {





    }

}
