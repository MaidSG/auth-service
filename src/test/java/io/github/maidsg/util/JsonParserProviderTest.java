package io.github.maidsg.util;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.maidsg.util.JsonParserProvider.RootFields;
import io.quarkus.test.junit.QuarkusTest;
import jakarta.inject.Inject;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

@QuarkusTest
class JsonParserProviderTest {

    @Inject
    JsonParserProvider provider;

    @Inject
    ObjectMapper objectMapper;

    private static final String OKX_SUBSCRIPTION_JSON = """
            {
              "id": "1512",
              "event": "subscribe",
              "arg": {
                "channel": "tickers",
                "instId": "BTC-USDT"
              },
              "connId": "a4d3ae55"
            }
            """;

    private static final String OKX_TICKERS_JSON = """
            {
              "arg": {
                "channel": "tickers",
                "instId": "BTC-USDT"
              },
              "data": [
                {
                  "instType": "SPOT",
                  "instId": "BTC-USDT",
                  "last": "9999.99",
                  "lastSz": "0.1",
                  "askPx": "9999.99",
                  "askSz": "11",
                  "bidPx": "8888.88",
                  "bidSz": "5",
                  "open24h": "9000",
                  "high24h": "10000",
                  "low24h": "8888.88",
                  "volCcy24h": "2222",
                  "vol24h": "2222",
                  "sodUtc0": "2222",
                  "sodUtc8": "2222",
                  "ts": "1597026383085"
                }
              ]
            }
            """;

    @Test
    void parseRootExtractsSubscriptionMetadata() throws Exception {
        RootFields root = provider.parseRoot(OKX_SUBSCRIPTION_JSON);
        assertEquals("subscribe", root.getEvent());
        assertNull(root.getOp());
        assertEquals("tickers", root.getChannel());
        assertEquals("BTC-USDT", root.getInstId());
        assertFalse(root.hasData());
        assertNull(root.getDataJson());
    }

    @Test
    void parseRootCapturesDataSliceForTickersPayload() throws Exception {
        RootFields root = provider.parseRoot(OKX_TICKERS_JSON);
        assertNull(root.getEvent());
        assertNull(root.getOp());
        assertEquals("tickers", root.getChannel());
        assertEquals("BTC-USDT", root.getInstId());
        assertTrue(root.hasData());
        assertNotNull(root.getDataJson());

        JsonNode expectedData = objectMapper.readTree(OKX_TICKERS_JSON).get("data");
        JsonNode actualData = objectMapper.readTree(root.getDataJson());
        assertEquals(expectedData, actualData);
    }
}

