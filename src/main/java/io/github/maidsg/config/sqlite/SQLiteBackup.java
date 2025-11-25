package io.github.maidsg.config.sqlite;

import io.agroal.api.AgroalDataSource;
import io.quarkus.runtime.ShutdownEvent;
import io.quarkus.scheduler.Scheduled;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.event.Observes;
import jakarta.inject.Inject;
import org.eclipse.microprofile.config.inject.ConfigProperty;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.sql.SQLException;
import java.util.concurrent.TimeUnit;

/*******************************************************************
 *
 * @author wy
 */
@ApplicationScoped
public class SQLiteBackup {

    @ConfigProperty(name = "quarkus.datasource.jdbc.url")
    String jdbcUrl;

    @Inject
    AgroalDataSource dataSource;

    // Execute a backup every 600 seconds
    @Scheduled(delay=10, delayUnit= TimeUnit.SECONDS, every="5s")
    void scheduled() { backup(); }

    // Execute a backup during shutdown
    public void onShutdown(@Observes ShutdownEvent event) { backup(); }

    void backup() {
        String dbFile = jdbcUrl.substring("jdbc:sqlite:".length());

        Path originalDbFilePath = Paths.get(dbFile).toAbsolutePath();
        Path backupDbFilePath = originalDbFilePath
                .getParent()
                .resolve(originalDbFilePath.getFileName() + ".bak");

        try {
            Files.deleteIfExists(backupDbFilePath);
        } catch (IOException e) {
            throw new RuntimeException("Failed to prepare backup destination", e);
        }

        try (var conn = dataSource.getConnection();
             var stmt = conn.createStatement()) {
            String target = backupDbFilePath.toString().replace("'", "''");
            stmt.executeUpdate("VACUUM INTO '" + target + "'");
        } catch (SQLException e) {
            throw new RuntimeException("Failed to back up the database", e);
        }
    }


}
