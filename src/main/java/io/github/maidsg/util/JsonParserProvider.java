package io.github.maidsg.util;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonLocation;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonToken;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectReader;
import io.quarkus.runtime.StartupEvent;
import jakarta.enterprise.event.Observes;
import jakarta.inject.Inject;
import jakarta.inject.Singleton;

import java.io.IOException;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;

/*******************************************************************
 *
 * @author wy
 */
@Singleton
public class JsonParserProvider {

    private static final int DEFAULT_READER_POOL_SIZE = 8;

    private final ObjectMapper objectMapper;
    private final JsonFactory jsonFactory;
    private final BlockingQueue<ObjectReader> readerPool;

    @Inject
    public JsonParserProvider(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
        this.jsonFactory = objectMapper.getFactory();
        this.readerPool = new ArrayBlockingQueue<>(DEFAULT_READER_POOL_SIZE);
    }


    void onStart(@Observes StartupEvent ev) {
        for (int i = 0; i < DEFAULT_READER_POOL_SIZE; i++) {
            readerPool.offer(objectMapper.reader());
        }
    }



    public ObjectReader borrowReader() {
        ObjectReader reader = readerPool.poll();
        return reader != null ? reader : objectMapper.reader();
    }

    public void releaseReader(ObjectReader reader) {
        if (reader != null && readerPool.size() < DEFAULT_READER_POOL_SIZE) {
            readerPool.offer(reader);
        }
    }

    public RootFields parseRoot(String payload) throws IOException {
        RootFields result = new RootFields();
        try (JsonParser parser = jsonFactory.createParser(payload)) {
            while (parser.nextToken() != null) {
                if (parser.currentToken() != JsonToken.FIELD_NAME) {
                    continue;
                }
                String fieldName = parser.getCurrentName();
                parser.nextToken();
                switch (fieldName) {
                    case "event" -> result.event = parser.getValueAsString();
                    case "op" -> result.op = parser.getValueAsString();
                    case "arg" -> parseArgObject(parser, result);
                    case "data" -> captureDataSlice(parser, payload, result);
                    default -> parser.skipChildren();
                }
            }
        }
        return result;
    }

    private void parseArgObject(JsonParser parser, RootFields result) throws IOException {
        if (parser.currentToken() != JsonToken.START_OBJECT) {
            parser.skipChildren();
            return;
        }
        while (parser.nextToken() != JsonToken.END_OBJECT) {
            String name = parser.getCurrentName();
            parser.nextToken();
            if ("channel".equals(name)) {
                result.channel = parser.getValueAsString();
            } else if ("instId".equals(name)) {
                result.instId = parser.getValueAsString();
            } else {
                parser.skipChildren();
            }
        }
    }

    private void captureDataSlice(JsonParser parser, String payload, RootFields result) throws IOException {
        JsonLocation start = parser.getTokenLocation();
        parser.skipChildren();
        JsonLocation end = parser.getCurrentLocation();
        int startIdx = safeIndex(start.getCharOffset(), payload.length());
        int endIdx = safeIndex(end.getCharOffset(), payload.length());
        if (startIdx >= 0 && endIdx > startIdx) {
            result.dataJson = payload.substring(startIdx, endIdx).trim();
            result.hasData = true;
        }
    }

    private int safeIndex(long offset, int limit) {
        if (offset < 0) {
            return -1;
        }
        return (int) Math.min(offset, limit);
    }

    public static final class RootFields {
        private String event;
        private String op;
        private String channel;
        private String instId;
        private boolean hasData;
        private String dataJson;

        public String getEvent() {
            return event;
        }

        public String getOp() {
            return op;
        }

        public String getChannel() {
            return channel;
        }

        public String getInstId() {
            return instId;
        }

        public boolean hasData() {
            return hasData;
        }

        public String getDataJson() {
            return dataJson;
        }
    }


}
