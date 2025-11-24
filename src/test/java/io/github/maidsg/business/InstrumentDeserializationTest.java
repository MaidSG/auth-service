package io.github.maidsg.business;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.maidsg.api.okx.model.dto.common.Instrument;
import org.junit.jupiter.api.Test;

import java.math.BigDecimal;

import static org.junit.jupiter.api.Assertions.*;

public class InstrumentDeserializationTest {

    @Test
    public void deserializeSampleJson() throws Exception {
        String json = "{             \"alias\": \"\",             \"auctionEndTime\": \"\",             \"baseCcy\": \"BTC\",             \"category\": \"1\",             \"ctMult\": \"\",             \"ctType\": \"\",             \"ctVal\": \"\",             \"ctValCcy\": \"\",             \"contTdSwTime\": \"1704876947000\",             \"expTime\": \"\",             \"futureSettlement\": false,             \"instFamily\": \"\",             \"instId\": \"BTC-USDT\",             \"instType\": \"SPOT\",             \"lever\": \"10\",             \"listTime\": \"1606468572000\",             \"lotSz\": \"0.00000001\",             \"maxIcebergSz\": \"9999999999.0000000000000000\",             \"maxLmtAmt\": \"1000000\",             \"maxLmtSz\": \"9999999999\",             \"maxMktAmt\": \"1000000\",             \"maxMktSz\": \"\",             \"maxStopSz\": \"\",             \"maxTriggerSz\": \"9999999999.0000000000000000\",             \"maxTwapSz\": \"9999999999.0000000000000000\",             \"minSz\": \"0.00001\",             \"optType\": \"\",             \"openType\": \"call_auction\",             \"preMktSwTime\": \"\",             \"quoteCcy\": \"USDT\",             \"tradeQuoteCcyList\": [                 \"USDT\"             ],             \"settleCcy\": \"\",             \"state\": \"live\",             \"ruleType\": \"normal\",             \"stk\": \"\",             \"tickSz\": \"0.1\",             \"uly\": \"\",             \"instIdCode\": 1000000000         }";

        ObjectMapper mapper = new ObjectMapper();
        Instrument inst = mapper.readValue(json, Instrument.class);

        assertNotNull(inst);
        assertEquals("BTC", inst.getBaseCcy());
        assertEquals("BTC-USDT", inst.getInstId());
        assertEquals("SPOT", inst.getInstType());
        assertEquals(Integer.valueOf(10), inst.getLever());
        assertEquals(Long.valueOf(1606468572000L), inst.getListTime());
        assertEquals(Long.valueOf(1704876947000L), inst.getContTdSwTime());
        assertEquals(new BigDecimal("0.00000001"), inst.getLotSz());
        assertEquals(new BigDecimal("0.1"), inst.getTickSz());
        assertEquals(Long.valueOf(1000000000L), inst.getInstIdCode());
        assertEquals("live", inst.getState());
    }
}

