package io.github.maidsg.model.entity.signal;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table(name = "order_blocks", indexes = {
        @Index(name = "idx_ob_inst_active", columnList = "inst_id, is_active")
})
public class OrderBlockEntity extends PanacheEntityBase {

    public enum BlockType {
        BULLISH,
        BEARISH
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "inst_id", nullable = false, length = 64)
    private String instId;

    @Enumerated(EnumType.STRING)
    @Column(name = "block_type", nullable = false, length = 10)
    private BlockType blockType;

    @Column(name = "price_high", precision = 18, scale = 8, nullable = false)
    private BigDecimal priceHigh;

    @Column(name = "price_low", precision = 18, scale = 8, nullable = false)
    private BigDecimal priceLow;

    @Column(name = "total_volume", precision = 18, scale = 8, nullable = false)
    private BigDecimal totalVolume;

    @Column(name = "net_delta", precision = 18, scale = 8, nullable = false)
    private BigDecimal netDelta;

    @Column(name = "formation_time", nullable = false)
    private Long formationTime;

    @Column(name = "is_active", nullable = false)
    private Boolean active = Boolean.TRUE;

    @Column(name = "tested_count", nullable = false)
    private Integer testedCount = 0;

    @Column(name = "created_at")
    private Long createdAt;

    @PrePersist
    void onCreate() {
        if (createdAt == null) {
            createdAt = System.currentTimeMillis();
        }
    }

    // getters and setters
    public Integer getId() {
        return id;
    }

    public String getInstId() {
        return instId;
    }

    public void setInstId(String instId) {
        this.instId = instId;
    }

    public BlockType getBlockType() {
        return blockType;
    }

    public void setBlockType(BlockType blockType) {
        this.blockType = blockType;
    }

    public BigDecimal getPriceHigh() {
        return priceHigh;
    }

    public void setPriceHigh(BigDecimal priceHigh) {
        this.priceHigh = priceHigh;
    }

    public BigDecimal getPriceLow() {
        return priceLow;
    }

    public void setPriceLow(BigDecimal priceLow) {
        this.priceLow = priceLow;
    }

    public BigDecimal getTotalVolume() {
        return totalVolume;
    }

    public void setTotalVolume(BigDecimal totalVolume) {
        this.totalVolume = totalVolume;
    }

    public BigDecimal getNetDelta() {
        return netDelta;
    }

    public void setNetDelta(BigDecimal netDelta) {
        this.netDelta = netDelta;
    }

    public Long getFormationTime() {
        return formationTime;
    }

    public void setFormationTime(Long formationTime) {
        this.formationTime = formationTime;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public Integer getTestedCount() {
        return testedCount;
    }

    public void setTestedCount(Integer testedCount) {
        this.testedCount = testedCount;
    }

    public Long getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Long createdAt) {
        this.createdAt = createdAt;
    }
}
