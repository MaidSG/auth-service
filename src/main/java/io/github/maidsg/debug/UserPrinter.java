package io.github.maidsg.debug;

import io.agroal.api.AgroalDataSource;
import io.github.maidsg.model.entity.User;
import io.quarkus.logging.Log;
import io.quarkus.runtime.StartupEvent;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.event.Observes;
import jakarta.inject.Inject;

import java.util.List;

@ApplicationScoped
public class UserPrinter {

    @Inject
    AgroalDataSource dataSource;



    void onStart(@Observes StartupEvent ev) {
        Log.info("=== Panache Users 表内容 ===");

        List<User> users = User.listAll();

        for (User u : users) {
            Log.infof("ID=%d, Name=%s, Email=%s", u.id, u.name, u.email);
        }
    }
}
