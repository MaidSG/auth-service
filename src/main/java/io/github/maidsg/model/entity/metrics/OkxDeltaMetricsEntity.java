package io.github.maidsg.model.entity.metrics;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.*;
import lombok.Data;

/*******************************************************************
 *
 * @author wy
 */
@Entity
@Table(name = "okx_delta_metrics")
@Data
public class OkxDeltaMetricsEntity extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;


    @Column(name = "inst_id", nullable = false, length = 64)
    private String instId;

    // time_window        # 时间窗口: '1m', '3m', '5m'
    @Column(name = "time_window", nullable = false, length = 8)
    private String timeWindow;

    // start_time        # 窗口开始时间
    @Column(name = "start_time", nullable = false)
    private Long startTime;

    // end_time          # 窗口结束时间
    @Column(name = "end_time", nullable = false)
    private Long endTime;

    // buy_volume        # 主动买入量
    @Column(name = "buy_volume", precision = 19, scale = 8)
    private String buyVolume;

    // sell_volume       # 主动卖出量
    @Column(name = "sell_volume", precision = 19, scale = 8)
    private String sellVolume;

    // net_delta         # 净Delta = buy_volume - sell_volume
    @Column(name = "net_delta", precision = 19, scale = 8)
    private String netDelta;

    // cumulative_delta  # 累计Delta
    @Column(name = "cumulative_delta", precision = 19, scale = 8)
    private String cumulativeDelta;

    // large_trades      # 大单数量
    @Column(name = "large_trades")
    private Integer largeTrades;

    // large_buy_volume  # 大单买入量
    @Column(name = "large_buy_volume", precision = 19, scale = 8)
    private String largeBuyVolume;

    // large_sell_volume # 大单卖出量
    @Column(name = "large_sell_volume", precision = 19, scale = 8)
    private String largeSellVolume;



}
