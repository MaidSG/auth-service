package io.github.maidsg.model.entity.signal;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table(name = "volume_profile_nodes", indexes = {
        @Index(name = "idx_vpn_inst_time", columnList = "inst_id, calculated_for_time")
})
public class VolumeProfileNodeEntity extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "inst_id", nullable = false, length = 64)
    private String instId;

    @Column(name = "bucket_start", precision = 18, scale = 8, nullable = false)
    private BigDecimal bucketStart;

    @Column(name = "bucket_end", precision = 18, scale = 8, nullable = false)
    private BigDecimal bucketEnd;

    @Column(name = "total_volume", precision = 18, scale = 8, nullable = false)
    private BigDecimal totalVolume;

    @Column(name = "buy_volume", precision = 18, scale = 8, nullable = false)
    private BigDecimal buyVolume;

    @Column(name = "sell_volume", precision = 18, scale = 8, nullable = false)
    private BigDecimal sellVolume;

    @Column(name = "net_delta", precision = 18, scale = 8, nullable = false)
    private BigDecimal netDelta;

    @Column(name = "calculated_for_time", nullable = false)
    private Long calculatedForTime;

    @Column(name = "created_at")
    private Long createdAt;

    @PrePersist
    void onCreate() {
        if (createdAt == null) {
            createdAt = System.currentTimeMillis();
        }
    }

    // getters and setters
    public Integer getId() { return id; }
    public String getInstId() { return instId; }
    public void setInstId(String instId) { this.instId = instId; }
    public BigDecimal getBucketStart() { return bucketStart; }
    public void setBucketStart(BigDecimal bucketStart) { this.bucketStart = bucketStart; }
    public BigDecimal getBucketEnd() { return bucketEnd; }
    public void setBucketEnd(BigDecimal bucketEnd) { this.bucketEnd = bucketEnd; }
    public BigDecimal getTotalVolume() { return totalVolume; }
    public void setTotalVolume(BigDecimal totalVolume) { this.totalVolume = totalVolume; }
    public BigDecimal getBuyVolume() { return buyVolume; }
    public void setBuyVolume(BigDecimal buyVolume) { this.buyVolume = buyVolume; }
    public BigDecimal getSellVolume() { return sellVolume; }
    public void setSellVolume(BigDecimal sellVolume) { this.sellVolume = sellVolume; }
    public BigDecimal getNetDelta() { return netDelta; }
    public void setNetDelta(BigDecimal netDelta) { this.netDelta = netDelta; }
    public Long getCalculatedForTime() { return calculatedForTime; }
    public void setCalculatedForTime(Long calculatedForTime) { this.calculatedForTime = calculatedForTime; }
    public Long getCreatedAt() { return createdAt; }
    public void setCreatedAt(Long createdAt) { this.createdAt = createdAt; }
}

