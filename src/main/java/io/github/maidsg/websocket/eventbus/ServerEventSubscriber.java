package io.github.maidsg.websocket.eventbus;

/*******************************************************************
 *
 * @author wy
 */
@FunctionalInterface
public interface ServerEventSubscriber {
    void onEvent(ServerEvent event);
}
