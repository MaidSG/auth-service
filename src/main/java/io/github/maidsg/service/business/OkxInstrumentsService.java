package io.github.maidsg.service.business;

import io.github.maidsg.api.okx.OkxPublicClient;
import io.github.maidsg.api.okx.model.client.OkxPublicResp;
import io.github.maidsg.api.okx.model.dto.common.Instrument;
import jakarta.enterprise.context.ApplicationScoped;
import org.eclipse.microprofile.rest.client.inject.RestClient;

/*******************************************************************
 *
 * @author wy
 */
@ApplicationScoped
public class OkxInstrumentsService {

    @RestClient
    OkxPublicClient okxPublicClient;

    public OkxPublicResp<Instrument> getSpotInstruments(String instType) {
        return okxPublicClient.getInstruments(instType.isEmpty() ? "SWAP" : instType);
    }

}
