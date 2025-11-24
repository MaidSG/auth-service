package io.github.maidsg.websocket.manager;

import io.github.maidsg.websocket.client.OkxPublicWebSocketConnector;
import io.quarkus.websockets.next.WebSocketClientConnection;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

/*******************************************************************
 *
 * @author wy
 */
@ApplicationScoped
public class OkxConnectionManager {

    @Inject
    OkxPublicWebSocketConnector connector;

    private volatile WebSocketClientConnection connection;

    public synchronized WebSocketClientConnection getConnection() {
        return connection;
    }

    public synchronized void setConnection(WebSocketClientConnection conn) {
        this.connection = conn;
    }

    /** 仅用于重连，不用于业务发送 */
    public synchronized WebSocketClientConnection reconnect() {
        connection = connector.connect();
        return connection;
    }

    public boolean isConnected() {
        return connection != null && connection.isOpen();
    }

    public void send(String message) {
        if (!isConnected()) {
            throw new IllegalStateException("WebSocket 未连接，无法发送消息");
        }
        connection.sendTextAndAwait(message);
    }

}
