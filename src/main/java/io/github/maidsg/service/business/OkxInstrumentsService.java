package io.github.maidsg.service.business;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.maidsg.api.okx.OkxPublicClient;
import io.github.maidsg.api.okx.model.client.OkxPublicResp;
import io.github.maidsg.api.okx.model.dto.common.Instrument;
import io.github.maidsg.model.entity.OkxInstrumentEntity;
import io.github.maidsg.service.dao.OkxInstrumentRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import org.eclipse.microprofile.rest.client.inject.RestClient;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

/*******************************************************************
 *
 * @author wy
 */
@ApplicationScoped
public class OkxInstrumentsService {

    @RestClient
    OkxPublicClient okxPublicClient;

    @Inject
    OkxInstrumentRepository repository;

    @Inject
    ObjectMapper objectMapper;

    public OkxPublicResp<Instrument> getSpotInstruments(String instType) {
        return okxPublicClient.getInstruments(instType.isEmpty() ? "SWAP" : instType);
    }

    @Transactional
    public void saveOrUpdate(Object dto, String instId) {
        if (dto == null || instId == null) return;
        String json;
        try {
            json = objectMapper.writeValueAsString(dto);
        } catch (JsonProcessingException e) {
            throw new RuntimeException("Failed to serialize instrument", e);
        }
        OkxInstrumentEntity entity = new OkxInstrumentEntity(instId, json, Instant.now());
        repository.upsert(entity);
    }

    @Transactional
    public void saveOrUpdateAll(List<?> list, java.util.function.Function<Object, String> idExtractor) {
        if (list == null || list.isEmpty()) return;
        List<OkxInstrumentEntity> entities = list.stream()
                .map(dto -> {
                    String id = idExtractor.apply(dto);
                    if (id == null) return null;
                    try {
                        String json = objectMapper.writeValueAsString(dto);
                        return new OkxInstrumentEntity(id, json, Instant.now());
                    } catch (JsonProcessingException e) {
                        throw new RuntimeException(e);
                    }
                })
                .filter(e -> e != null)
                .collect(Collectors.toList());
        repository.upsertAll(entities);
    }

}
