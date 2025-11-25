package io.github.maidsg.model.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.time.Instant;

/*******************************************************************
 *
 * @author wy
 */
@Entity
@Table(name = "okx_ticker_data")
public class OkxTickersEntity  extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "channel", length = 32, nullable = false)
    private String channel;

    @Column(name = "inst_id", length = 64, nullable = false)
    private String instrumentId;

    @Column(name = "inst_type", length = 32, nullable = false)
    private String instrumentType;

    @Column(name = "last_price", precision = 38, scale = 18, nullable = false)
    private BigDecimal lastPrice;

    @Column(name = "last_size", precision = 38, scale = 18, nullable = false)
    private BigDecimal lastSize;

    @Column(name = "ask_price", precision = 38, scale = 18, nullable = false)
    private BigDecimal askPrice;

    @Column(name = "ask_size", precision = 38, scale = 18, nullable = false)
    private BigDecimal askSize;

    @Column(name = "bid_price", precision = 38, scale = 18, nullable = false)
    private BigDecimal bidPrice;

    @Column(name = "bid_size", precision = 38, scale = 18, nullable = false)
    private BigDecimal bidSize;

    @Column(name = "open_24h", precision = 38, scale = 18, nullable = false)
    private BigDecimal open24h;

    @Column(name = "high_24h", precision = 38, scale = 18, nullable = false)
    private BigDecimal high24h;

    @Column(name = "low_24h", precision = 38, scale = 18, nullable = false)
    private BigDecimal low24h;

    @Column(name = "vol_ccy_24h", precision = 38, scale = 18, nullable = false)
    private BigDecimal volumeCurrency24h;

    @Column(name = "vol_24h", precision = 38, scale = 18, nullable = false)
    private BigDecimal volume24h;

    @Column(name = "sod_utc0", precision = 38, scale = 18, nullable = false)
    private BigDecimal sodUtc0;

    @Column(name = "sod_utc8", precision = 38, scale = 18, nullable = false)
    private BigDecimal sodUtc8;

    @Column(name = "ts", nullable = false)
    private Instant timestamp;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getChannel() {
        return channel;
    }

    public void setChannel(String channel) {
        this.channel = channel;
    }

    public String getInstrumentId() {
        return instrumentId;
    }

    public void setInstrumentId(String instrumentId) {
        this.instrumentId = instrumentId;
    }

    public String getInstrumentType() {
        return instrumentType;
    }

    public void setInstrumentType(String instrumentType) {
        this.instrumentType = instrumentType;
    }

    public BigDecimal getLastPrice() {
        return lastPrice;
    }

    public void setLastPrice(BigDecimal lastPrice) {
        this.lastPrice = lastPrice;
    }

    public BigDecimal getLastSize() {
        return lastSize;
    }

    public void setLastSize(BigDecimal lastSize) {
        this.lastSize = lastSize;
    }

    public BigDecimal getAskPrice() {
        return askPrice;
    }

    public void setAskPrice(BigDecimal askPrice) {
        this.askPrice = askPrice;
    }

    public BigDecimal getAskSize() {
        return askSize;
    }

    public void setAskSize(BigDecimal askSize) {
        this.askSize = askSize;
    }

    public BigDecimal getBidPrice() {
        return bidPrice;
    }

    public void setBidPrice(BigDecimal bidPrice) {
        this.bidPrice = bidPrice;
    }

    public BigDecimal getBidSize() {
        return bidSize;
    }

    public void setBidSize(BigDecimal bidSize) {
        this.bidSize = bidSize;
    }

    public BigDecimal getOpen24h() {
        return open24h;
    }

    public void setOpen24h(BigDecimal open24h) {
        this.open24h = open24h;
    }

    public BigDecimal getHigh24h() {
        return high24h;
    }

    public void setHigh24h(BigDecimal high24h) {
        this.high24h = high24h;
    }

    public BigDecimal getLow24h() {
        return low24h;
    }

    public void setLow24h(BigDecimal low24h) {
        this.low24h = low24h;
    }

    public BigDecimal getVolumeCurrency24h() {
        return volumeCurrency24h;
    }

    public void setVolumeCurrency24h(BigDecimal volumeCurrency24h) {
        this.volumeCurrency24h = volumeCurrency24h;
    }

    public BigDecimal getVolume24h() {
        return volume24h;
    }

    public void setVolume24h(BigDecimal volume24h) {
        this.volume24h = volume24h;
    }

    public BigDecimal getSodUtc0() {
        return sodUtc0;
    }

    public void setSodUtc0(BigDecimal sodUtc0) {
        this.sodUtc0 = sodUtc0;
    }

    public BigDecimal getSodUtc8() {
        return sodUtc8;
    }

    public void setSodUtc8(BigDecimal sodUtc8) {
        this.sodUtc8 = sodUtc8;
    }

    public Instant getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Instant timestamp) {
        this.timestamp = timestamp;
    }
}
