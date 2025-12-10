package io.github.maidsg.service.dao;

import io.github.maidsg.model.entity.signal.OrderBlockEntity;
import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class OrderBlockRepository implements PanacheRepository<OrderBlockEntity> {
}

