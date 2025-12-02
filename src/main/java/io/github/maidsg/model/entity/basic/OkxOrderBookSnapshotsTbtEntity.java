package io.github.maidsg.model.entity.basic;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/*******************************************************************
 *
 * @author wy
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "okx_orderbook_snapshots_tbt")
public class OkxOrderBookSnapshotsTbtEntity extends PanacheEntityBase {


    /**
     * 主键ID
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    /**
     * 产品ID
     */
    @Column(name = "inst_id")
    private String instId;

    /**
     * 推送数据动作，snapshot：全量，update：增量
     */
    @Column(name = "action")
    private String action;

    /**
     * 卖方深度，以JSON字符串形式存储
     */
    @Column(name = "asks", columnDefinition = "TEXT")
    private String asks;

    /**
     * 买方深度，以JSON字符串形式存储
     */
    @Column(name = "bids", columnDefinition = "TEXT")
    private String bids;

    /**
     * 数据更新时间戳
     */
    @Column(name = "ts")
    private Long ts;

    /**
     * 检验和
     */
    @Column(name = "checksum")
    private Integer checksum;

    /**
     * 上一个推送的序列号
     */
    @Column(name = "prev_seq_id")
    private Long prevSeqId;

    /**
     * 推送的序列号
     */
    @Column(name = "seq_id")
    private Long seqId;

}
