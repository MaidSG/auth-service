// Java
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
import java.sql.SQLException;
import java.util.concurrent.TimeUnit;

@ApplicationScoped
public class SQLiteBackup {

    private static final int BUSY_TIMEOUT_MS = 5_000;
    private static final int MAX_RETRIES = 3;
    private static final long RETRY_SLEEP_MS = 1_000;

    @ConfigProperty(name = "quarkus.datasource.jdbc.url")
    String jdbcUrl;


    @Inject
    AgroalDataSource dataSource;

    @Scheduled(delay = 10, delayUnit = TimeUnit.SECONDS, every = "6s"
           , concurrentExecution = Scheduled.ConcurrentExecution.SKIP
    )
    void scheduled() {
        backup();

    }

    public void onShutdown(@Observes ShutdownEvent event) { backup(); }

    void backup() {
        String dbFile = jdbcUrl.substring("jdbc:sqlite:".length());
        Path originalDbFilePath = Paths.get(dbFile).toAbsolutePath();
        Path backupDbFilePath = originalDbFilePath.getParent()
                .resolve(originalDbFilePath.getFileName() + ".bak");

        try {
//            Files.deleteIfExists(originalDbFilePath);
            Files.deleteIfExists(backupDbFilePath);
        } catch (IOException e) {
            throw new RuntimeException("Failed to prepare backup destination", e);
        }

        String target = backupDbFilePath.toString().replace("'", "''");
        for (int attempt = 1; attempt <= MAX_RETRIES; attempt++) {
            try (var conn = dataSource.getConnection();
                 var stmt = conn.createStatement()) {
                stmt.execute("PRAGMA busy_timeout = " + BUSY_TIMEOUT_MS);
                stmt.execute("PRAGMA wal_checkpoint(TRUNCATE)");
                try {
                    Files.deleteIfExists(Paths.get(target));
                } catch (IOException e) {
                    throw new RuntimeException("Failed to prepare backup destination", e);
                }
                stmt.executeUpdate("VACUUM INTO '" + target + "'");

                return;
            } catch (SQLException e) {
                if (isBusy(e) && attempt < MAX_RETRIES) {
                    try {
                        Thread.sleep(RETRY_SLEEP_MS);
                    } catch (InterruptedException ignored) {
                        Thread.currentThread().interrupt();
                        break;
                    }
                    continue;
                }
                throw new RuntimeException("Failed to back up the database", e);
            }
        }
    }

    private boolean isBusy(SQLException e) {
        String message = e.getMessage();
        return message != null && (message.contains("database is locked")
                || message.contains("database is busy"));
    }
}
