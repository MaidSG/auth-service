package io.github.maidsg.service.dao;

import io.github.maidsg.model.entity.signal.VolumeProfileNodeEntity;
import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class VolumeProfileNodeRepository implements PanacheRepository<VolumeProfileNodeEntity> {
}

