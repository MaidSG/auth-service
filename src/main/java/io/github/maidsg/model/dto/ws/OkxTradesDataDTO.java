package io.github.maidsg.model.dto.ws;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

/*******************************************************************
 *
 * 推送数据参数
 * 参数名	类型	描述
 * arg	Object	订阅成功的频道
 * > channel	String	频道名
 * > instId	String	产品ID
 * data	Array of objects	订阅的数据
 * > instId	String	产品ID，如 BTC-USDT
 * > tradeId	String	聚合的多笔交易中最新一笔交易的成交ID
 * > px	String	成交价格
 * > sz	String	成交数量
 * 对于币币交易，成交数量的单位为交易货币
 * 对于交割、永续以及期权，单位为张。
 * > side	String	吃单方向
 * buy
 * sell
 * > ts	String	成交时间，Unix时间戳的毫秒数格式，如 1597026383085
 * > count	String	聚合的订单匹配数量
 * > source	String	订单来源
 * 0：普通订单
 * > seqId	Integer	推送的序列号
 *
 *
 * 推送示例
 *
 * {
 *   "arg": {
 *     "channel": "trades",
 *     "instId": "BTC-USDT"
 *   },
 *   "data": [
 *     {
 *       "instId": "BTC-USDT",
 *       "tradeId": "130639474",
 *       "px": "42219.9",
 *       "sz": "0.12060306",
 *       "side": "buy",
 *       "ts": "1630048897897",
 *       "count": "3",
 *       "source": "0",
 *       "seqId": 1234
 *     }
 *   ]
 * }
 *
 * @author wy
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class OkxTradesDataDTO {

    private Arg arg;
    private List<TradeData> data;

    public Arg getArg() {
        return arg;
    }

    public void setArg(Arg arg) {
        this.arg = arg;
    }

    public List<TradeData> getData() {
        return data;
    }

    public void setData(List<TradeData> data) {
        this.data = data;
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Arg {
        private String channel;
        private String instId;

        public String getChannel() {
            return channel;
        }

        public void setChannel(String channel) {
            this.channel = channel;
        }

        public String getInstId() {
            return instId;
        }

        public void setInstId(String instId) {
            this.instId = instId;
        }
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class TradeData {
        private String instId;
        private String tradeId;
        private String px;
        private String sz;
        private String side;
        private String ts;
        private String count;
        private String source;
        private Long seqId;

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

        public String getPx() {
            return px;
        }

        public void setPx(String px) {
            this.px = px;
        }

        public String getSz() {
            return sz;
        }

        public void setSz(String sz) {
            this.sz = sz;
        }

        public String getSide() {
            return side;
        }

        public void setSide(String side) {
            this.side = side;
        }

        public String getTs() {
            return ts;
        }

        public void setTs(String ts) {
            this.ts = ts;
        }

        public String getCount() {
            return count;
        }

        public void setCount(String count) {
            this.count = count;
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
    }
}
