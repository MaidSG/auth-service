package io.github.maidsg.model.entity.basic;

import io.github.maidsg.util.OffsetDateTimeTextConverter;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.OffsetDateTime;

/*******************************************************************
 *
 * @author wy
 */
@Entity
@Table(name = "okx_raw_trades", indexes = {
        @Index(name = "idx_okx_raw_trades_inst_id", columnList = "inst_id"),
        @Index(name = "uk_okx_raw_trades_trade_id", columnList = "trade_id", unique = true)
})
public class OkxRawTradesEntity extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "inst_id", nullable = false, length = 64)
    private String instId;

    @Column(name = "trade_id", nullable = false, length = 64, unique = true)
    private String tradeId;

    @Column(name = "price", precision = 19, scale = 8)
    private BigDecimal price;

    @Column(name = "size", precision = 19, scale = 8)
    private BigDecimal size;

    @Column(name = "side", length = 8)
    private String side;

    @Column(name = "trade_ts", nullable = false)
    private Long tradeTimestamp;

    @Column(name = "match_count")
    private Integer matchCount;

    @Column(name = "source", length = 8)
    private String source;

    @Column(name = "seq_id")
    private Long seqId;

    @Column(name = "raw_payload", columnDefinition = "TEXT")
    private String rawPayload;

    @Column(name = "created_at", columnDefinition = "TEXT", nullable = false)
    @Convert(converter = OffsetDateTimeTextConverter.class)
    private OffsetDateTime createdAt;


    @PrePersist
    void prePersist() {
        if (createdAt == null) {
            createdAt = OffsetDateTime.now();
        }
    }

    public Integer getId() {
        return id;
    }

    public String getInstId() {
        return instId;
    }

    public void setInstId(String instId) {
        this.instId = instId;
    }

    public String getTradeId() {
        return tradeId;
    }

    public void setTradeId(String tradeId) {
        this.tradeId = tradeId;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public BigDecimal getSize() {
        return size;
    }

    public void setSize(BigDecimal size) {
        this.size = size;
    }

    public String getSide() {
        return side;
    }

    public void setSide(String side) {
        this.side = side;
    }

    public Long getTradeTimestamp() {
        return tradeTimestamp;
    }

    public void setTradeTimestamp(Long tradeTimestamp) {
        this.tradeTimestamp = tradeTimestamp;
    }

    public Integer getMatchCount() {
        return matchCount;
    }

    public void setMatchCount(Integer matchCount) {
        this.matchCount = matchCount;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public Long getSeqId() {
        return seqId;
    }

    public void setSeqId(Long seqId) {
        this.seqId = seqId;
    }

    public String getRawPayload() {
        return rawPayload;
    }

    public void setRawPayload(String rawPayload) {
        this.rawPayload = rawPayload;
    }

    public OffsetDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
