package io.github.maidsg.service.dao;

import io.github.maidsg.model.entity.OkxInstrumentEntity;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;

import java.util.List;

/*******************************************************************
 *
 * @author wy
 */
@ApplicationScoped
public class OkxInstrumentRepository {

    @Inject
    EntityManager em;

    public OkxInstrumentEntity findById(String id) {
        return em.find(OkxInstrumentEntity.class, id);
    }

    @Transactional
    public OkxInstrumentEntity upsert(OkxInstrumentEntity entity) {
        return em.merge(entity);
    }

    @Transactional
    public void upsertAll(List<OkxInstrumentEntity> list) {
        if (list == null || list.isEmpty()) return;
        int i = 0;
        for (OkxInstrumentEntity e : list) {
            em.merge(e);
            // 批处理时定期 flush/clear 避免内存增长
            if (++i % 50 == 0) {
                em.flush();
                em.clear();
            }
        }
    }

}
