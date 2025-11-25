package io.github.maidsg.model.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.Instant;

/*******************************************************************
 *
 * @author wy
 */
@Entity
@Table(name = "okx_kline_data_3m")
public class OkxCandleEntity extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "channel", length = 32, nullable = false)
    private String channel;

    @Column(name = "inst_id", length = 64, nullable = false)
    private String instrumentId;

    @Column(name = "inst_type", length = 32)
    private String instrumentType;

    @Column(name = "ts", nullable = false)
    private Instant timestamp;

    @Column(name = "open_price", precision = 38, scale = 18, nullable = false)
    private BigDecimal openPrice;

    @Column(name = "high_price", precision = 38, scale = 18, nullable = false)
    private BigDecimal highPrice;

    @Column(name = "low_price", precision = 38, scale = 18, nullable = false)
    private BigDecimal lowPrice;

    @Column(name = "close_price", precision = 38, scale = 18, nullable = false)
    private BigDecimal closePrice;

    @Column(name = "vol_contracts", precision = 38, scale = 18, nullable = false)
    private BigDecimal volumeContracts;

    @Column(name = "vol_ccy", precision = 38, scale = 18)
    private BigDecimal volumeCurrency;

    @Column(name = "vol_ccy_quote", precision = 38, scale = 18)
    private BigDecimal volumeQuoteCurrency;

    @Column(name = "confirm_status", length = 1, nullable = false)
    private String confirmStatus;

    public Integer getId() {
        return id;
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

    public Instant getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Instant timestamp) {
        this.timestamp = timestamp;
    }

    public BigDecimal getOpenPrice() {
        return openPrice;
    }

    public void setOpenPrice(BigDecimal openPrice) {
        this.openPrice = openPrice;
    }

    public BigDecimal getHighPrice() {
        return highPrice;
    }

    public void setHighPrice(BigDecimal highPrice) {
        this.highPrice = highPrice;
    }

    public BigDecimal getLowPrice() {
        return lowPrice;
    }

    public void setLowPrice(BigDecimal lowPrice) {
        this.lowPrice = lowPrice;
    }

    public BigDecimal getClosePrice() {
        return closePrice;
    }

    public void setClosePrice(BigDecimal closePrice) {
        this.closePrice = closePrice;
    }

    public BigDecimal getVolumeContracts() {
        return volumeContracts;
    }

    public void setVolumeContracts(BigDecimal volumeContracts) {
        this.volumeContracts = volumeContracts;
    }

    public BigDecimal getVolumeCurrency() {
        return volumeCurrency;
    }

    public void setVolumeCurrency(BigDecimal volumeCurrency) {
        this.volumeCurrency = volumeCurrency;
    }

    public BigDecimal getVolumeQuoteCurrency() {
        return volumeQuoteCurrency;
    }

    public void setVolumeQuoteCurrency(BigDecimal volumeQuoteCurrency) {
        this.volumeQuoteCurrency = volumeQuoteCurrency;
    }

    public String getConfirmStatus() {
        return confirmStatus;
    }

    public void setConfirmStatus(String confirmStatus) {
        this.confirmStatus = confirmStatus;
    }


}
