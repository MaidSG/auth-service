package io.github.maidsg.service.dao;

import io.github.maidsg.model.entity.basic.OkxCandleEntity;
import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;

/*******************************************************************
 *
 * @author wy
 */
@ApplicationScoped
public class OkxCandleRepository implements PanacheRepository<OkxCandleEntity> {
}
