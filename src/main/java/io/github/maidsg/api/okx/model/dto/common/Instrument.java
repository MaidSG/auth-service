package io.github.maidsg.api.okx.model.dto.common;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.Data;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.List;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;

/*******************************************************************
 * Instrument DTO adapted for Quarkus rest-client-jackson mapping.
 * Accepts numeric fields provided as either JSON numbers or numeric strings.
 * @author wy
 */
@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class Instrument {

    private String alias;
    private String auctionEndTime;
    private String baseCcy;
    private String category;
    private String ctMult;
    private String ctType;
    private String ctVal;
    private String ctValCcy;

    @JsonDeserialize(using = StringOrNumberToLongDeserializer.class)
    private Long contTdSwTime;

    private String expTime;
    private Boolean futureSettlement;
    private String instFamily;
    private String instId;
    private String instType;

    @JsonDeserialize(using = StringOrNumberToIntegerDeserializer.class)
    private Integer lever;

    @JsonDeserialize(using = StringOrNumberToLongDeserializer.class)
    private Long listTime;

    @JsonDeserialize(using = StringOrNumberToBigDecimalDeserializer.class)
    private BigDecimal lotSz;

    @JsonDeserialize(using = StringOrNumberToBigDecimalDeserializer.class)
    private BigDecimal maxIcebergSz;

    @JsonDeserialize(using = StringOrNumberToBigDecimalDeserializer.class)
    private BigDecimal maxLmtAmt;

    @JsonDeserialize(using = StringOrNumberToBigDecimalDeserializer.class)
    private BigDecimal maxLmtSz;

    @JsonDeserialize(using = StringOrNumberToBigDecimalDeserializer.class)
    private BigDecimal maxMktAmt;

    @JsonDeserialize(using = StringOrNumberToBigDecimalDeserializer.class)
    private BigDecimal maxMktSz;

    private String maxStopSz;

    @JsonDeserialize(using = StringOrNumberToBigDecimalDeserializer.class)
    private BigDecimal maxTriggerSz;

    @JsonDeserialize(using = StringOrNumberToBigDecimalDeserializer.class)
    private BigDecimal maxTwapSz;

    @JsonDeserialize(using = StringOrNumberToBigDecimalDeserializer.class)
    private BigDecimal minSz;

    private String optType;
    private String openType;
    private String preMktSwTime;
    private String quoteCcy;
    private List<String> tradeQuoteCcyList;
    private String settleCcy;
    private String state;
    private String ruleType;
    private String stk;

    @JsonDeserialize(using = StringOrNumberToBigDecimalDeserializer.class)
    private BigDecimal tickSz;

    private String uly;

    @JsonDeserialize(using = StringOrNumberToLongDeserializer.class)
    private Long instIdCode;

    // --- Deserializers to accept both JSON number and quoted number strings ---
    public static class StringOrNumberToBigDecimalDeserializer extends JsonDeserializer<BigDecimal> {
        @Override
        public BigDecimal deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
            switch (p.getCurrentToken()) {
                case VALUE_NUMBER_FLOAT:
                case VALUE_NUMBER_INT:
                    return p.getDecimalValue();
                case VALUE_STRING:
                    String txt = p.getText().trim();
                    if (txt.isEmpty()) return null;
                    try {
                        return new BigDecimal(txt);
                    } catch (NumberFormatException ex) {
                        return (BigDecimal) ctxt.handleWeirdStringValue(BigDecimal.class, txt, "Unable to parse to BigDecimal");
                    }
                case VALUE_NULL:
                    return null;
                default:
                    return (BigDecimal) ctxt.handleUnexpectedToken(BigDecimal.class, p);
            }
        }
    }

    public static class StringOrNumberToLongDeserializer extends JsonDeserializer<Long> {
        @Override
        public Long deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
            switch (p.getCurrentToken()) {
                case VALUE_NUMBER_INT:
                    return p.getLongValue();
                case VALUE_STRING:
                    String txt = p.getText().trim();
                    if (txt.isEmpty()) return null;
                    try {
                        return Long.valueOf(txt);
                    } catch (NumberFormatException ex) {
                        return (Long) ctxt.handleWeirdStringValue(Long.class, txt, "Unable to parse to Long");
                    }
                case VALUE_NULL:
                    return null;
                default:
                    return (Long) ctxt.handleUnexpectedToken(Long.class, p);
            }
        }
    }

    public static class StringOrNumberToIntegerDeserializer extends JsonDeserializer<Integer> {
        @Override
        public Integer deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
            switch (p.getCurrentToken()) {
                case VALUE_NUMBER_INT:
                    return p.getIntValue();
                case VALUE_STRING:
                    String txt = p.getText().trim();
                    if (txt.isEmpty()) return null;
                    try {
                        return Integer.valueOf(txt);
                    } catch (NumberFormatException ex) {
                        return (Integer) ctxt.handleWeirdStringValue(Integer.class, txt, "Unable to parse to Integer");
                    }
                case VALUE_NULL:
                    return null;
                default:
                    return (Integer) ctxt.handleUnexpectedToken(Integer.class, p);
            }
        }
    }
}
