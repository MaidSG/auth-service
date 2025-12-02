package io.github.maidsg.model.dto.engine;

import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;

/*******************************************************************
 *
 * @author wy
 */
@Data
@Builder
public class OkxDeltaDTO {

    // total_volume: 总成交量 (quantity 的总和)
    //
    private BigDecimal totalVolume;


    //buy_volume: 主动买入总量 (所有 delta > 0 的 quantity 之和)
    //
    private BigDecimal buyVolume;

    //sell_volume: 主动卖出总量 (所有 delta < 0 的 quantity 之和)
    //
    private BigDecimal sellVolume;

    //net_delta: 净Delta (delta 列的总和)
    //
    private BigDecimal netDelta;

    //large_buy_volume: 大单主动买入量
    //
    private BigDecimal largeBuyVolume;

    //large_sell_volume: 大单主动卖出量
    //
    private BigDecimal largeSellVolume;

    //large_net_delta: 大单净Delta
    //
    private BigDecimal largeNetDelta;

    //trade_count: 总成交笔数
    //
    private Long tradeCount;

    //large_trade_count: 大单成交笔数
    private Long largeTradeCount;






}
