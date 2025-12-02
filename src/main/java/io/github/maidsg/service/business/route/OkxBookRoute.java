package io.github.maidsg.service.business.route;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.maidsg.model.dto.ws.OkxBooksDataDTO;
import io.github.maidsg.model.entity.basic.OkxOrderBookSnapshotsTbtEntity;
import io.github.maidsg.service.dao.OkxOrderBookSnapshotsTbtRepository;
import io.github.maidsg.util.JsonParserProvider;
import io.github.maidsg.websocket.enums.OkxMessageTypeEnum;
import io.github.maidsg.websocket.handler.MarketMessageHandler;
import io.quarkus.logging.Log;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;

import java.util.EnumSet;

/*******************************************************************
 *
 * @author wy
 */
@ApplicationScoped
public class OkxBookRoute implements MarketMessageHandler {

    private static final EnumSet<OkxMessageTypeEnum> SUPPORTED = EnumSet.of(
            OkxMessageTypeEnum.ORDER_BOOK_TBT,
            OkxMessageTypeEnum.ORDER_BOOK_TBT_DATA,
            OkxMessageTypeEnum.ORDER_BOOK_5,
            OkxMessageTypeEnum.ORDER_BOOK_5_DATA
    );


    @Inject
    ObjectMapper mapper;

    @Inject
    OkxOrderBookSnapshotsTbtRepository orderBookSnapshotsTbtRepository;


    @Override
    public EnumSet<OkxMessageTypeEnum> getSupportedTypes() {
        return SUPPORTED;
    }

    @Override
    public boolean validate(OkxMessageTypeEnum type, JsonParserProvider.RootFields rootFields, String message) {
        return true;
    }

    @Override
    public void handleMessage(OkxMessageTypeEnum type, JsonParserProvider.RootFields rootFields, String message) {
        switch (type) {
            case ORDER_BOOK_TBT, ORDER_BOOK_5 -> handleSubscriptionAck(message);
            case ORDER_BOOK_5_DATA -> handleBooks5Data(message);
            case ORDER_BOOK_TBT_DATA -> handleTbtData(message);
            default -> {
            }
        }
    }

    private void handleSubscriptionAck(String payload) {
        Log.info("Subscription acknowledged: %s".formatted(payload));
    }

    private void handleBooks5Data(String payload) {

    }

    @Transactional
    void handleTbtData(String payload) {
        try {
            OkxBooksDataDTO dto = mapper.readValue(payload, OkxBooksDataDTO.class);
            String action = dto.getAction();
            String instId = dto.getArg().getInstId();

            for (OkxBooksDataDTO.DataDTO dataItem : dto.getData()) {
                OkxOrderBookSnapshotsTbtEntity entity = OkxOrderBookSnapshotsTbtEntity.builder()
                        .instId(instId) // 使用 arg 中的 instId
                        .action(action)
                        .asks(mapper.writeValueAsString(dataItem.getAsks()))
                        .bids(mapper.writeValueAsString(dataItem.getBids()))
                        .ts(Long.parseLong(dataItem.getTs()))
                        .checksum(dataItem.getChecksum())
                        .prevSeqId(dataItem.getPrevSeqId())
                        .seqId(dataItem.getSeqId())
                        .build();
                orderBookSnapshotsTbtRepository.persist(entity);
            }
        } catch (JsonProcessingException e) {
            Log.error("Failed to parse TBT data payload: {}", payload, e);
        } catch (NumberFormatException e) {
            Log.error("Failed to parse timestamp from TBT data: {}", payload, e);
        }
    }


}
