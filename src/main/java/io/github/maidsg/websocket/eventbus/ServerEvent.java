package io.github.maidsg.websocket.eventbus;

/*******************************************************************
 *
 * @author wy
 */
public interface ServerEvent {

    String getType();
    long getTimestamp();

}
