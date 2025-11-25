package io.github.maidsg.websocket.manager;

import io.github.maidsg.websocket.client.OkxPublicWebSocketConnector;
import io.quarkus.websockets.next.WebSocketClientConnection;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

/*******************************************************************
 *
 * @author wy
 */
@ApplicationScoped
public class OkxConnectionManager {


    private final ConcurrentMap<String, WebSocketClientConnection> connections = new ConcurrentHashMap<>();


    public synchronized WebSocketClientConnection getConnection(String clientId) {
        return connections.get(clientId);
    }

    public synchronized void setConnection(String clientId,WebSocketClientConnection conn) {
        connections.put(clientId, conn);
    }



    public boolean isConnected(String clientId) {
        WebSocketClientConnection connection = connections.get(clientId);
        return connection != null && connection.isOpen();
    }

    public void send(String clientId, String message) {
        if (!isConnected(clientId)) {
            throw new IllegalStateException("WebSocket 未连接，无法发送消息");
        }
        WebSocketClientConnection connection = connections.get(clientId);
        connection.sendTextAndAwait(message);
    }

}
