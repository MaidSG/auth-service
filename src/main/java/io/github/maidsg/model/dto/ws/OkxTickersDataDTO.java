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
 * > instType	String	产品类型
 * > instId	String	产品ID
 * > last	String	最新成交价
 * > lastSz	String	最新成交的数量，0 代表没有成交量
 * > askPx	String	卖一价
 * > askSz	String	卖一价对应的量
 * > bidPx	String	买一价
 * > bidSz	String	买一价对应的数量
 * > open24h	String	24小时开盘价
 * > high24h	String	24小时最高价
 * > low24h	String	24小时最低价
 * > volCcy24h	String	24小时成交量，以币为单位
 * 如果是衍生品合约，数值为交易货币的数量。
 * 如果是币币/币币杠杆，数值为计价货币的数量。
 * > vol24h	String	24小时成交量，以张为单位
 * 如果是衍生品合约，数值为合约的张数。
 * 如果是币币/币币杠杆，数值为交易货币的数量。
 * > sodUtc0	String	UTC+0 时开盘价
 * > sodUtc8	String	UTC+8 时开盘价
 * > ts	String	数据产生时间，Unix时间戳的毫秒数格式，如 1597026383085
 *
 * 推送示例
 * {
 *     "arg": {
 *         "channel": "tickers",
 *         "instId": "BTC-USDT"
 *     },
 *     "data": [{
 *         "instType": "SPOT",
 *         "instId": "BTC-USDT",
 *         "last": "9999.99",
 *         "lastSz": "0.1",
 *         "askPx": "9999.99",
 *         "askSz": "11",
 *         "bidPx": "8888.88",
 *         "bidSz": "5",
 *         "open24h": "9000",
 *         "high24h": "10000",
 *         "low24h": "8888.88",
 *         "volCcy24h": "2222",
 *         "vol24h": "2222",
 *         "sodUtc0": "2222",
 *         "sodUtc8": "2222",
 *         "ts": "1597026383085"
 *     }]
 * }
 *
 * @author wy
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class OkxTickersDataDTO {

    private Arg arg;
    private List<TickerData> data;

    public Arg getArg() {
        return arg;
    }

    public void setArg(Arg arg) {
        this.arg = arg;
    }

    public List<TickerData> getData() {
        return data;
    }

    public void setData(List<TickerData> data) {
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
    public static class TickerData {

        private String instType;
        private String instId;
        private String last;
        private String lastSz;
        private String askPx;
        private String askSz;
        private String bidPx;
        private String bidSz;
        private String open24h;
        private String high24h;
        private String low24h;
        private String volCcy24h;
        private String vol24h;
        private String sodUtc0;
        private String sodUtc8;
        private String ts;

        public String getInstType() {
            return instType;
        }

        public void setInstType(String instType) {
            this.instType = instType;
        }

        public String getInstId() {
            return instId;
        }

        public void setInstId(String instId) {
            this.instId = instId;
        }

        public String getLast() {
            return last;
        }

        public void setLast(String last) {
            this.last = last;
        }

        public String getLastSz() {
            return lastSz;
        }

        public void setLastSz(String lastSz) {
            this.lastSz = lastSz;
        }

        public String getAskPx() {
            return askPx;
        }

        public void setAskPx(String askPx) {
            this.askPx = askPx;
        }

        public String getAskSz() {
            return askSz;
        }

        public void setAskSz(String askSz) {
            this.askSz = askSz;
        }

        public String getBidPx() {
            return bidPx;
        }

        public void setBidPx(String bidPx) {
            this.bidPx = bidPx;
        }

        public String getBidSz() {
            return bidSz;
        }

        public void setBidSz(String bidSz) {
            this.bidSz = bidSz;
        }

        public String getOpen24h() {
            return open24h;
        }

        public void setOpen24h(String open24h) {
            this.open24h = open24h;
        }

        public String getHigh24h() {
            return high24h;
        }

        public void setHigh24h(String high24h) {
            this.high24h = high24h;
        }

        public String getLow24h() {
            return low24h;
        }

        public void setLow24h(String low24h) {
            this.low24h = low24h;
        }

        public String getVolCcy24h() {
            return volCcy24h;
        }

        public void setVolCcy24h(String volCcy24h) {
            this.volCcy24h = volCcy24h;
        }

        public String getVol24h() {
            return vol24h;
        }

        public void setVol24h(String vol24h) {
            this.vol24h = vol24h;
        }

        public String getSodUtc0() {
            return sodUtc0;
        }

        public void setSodUtc0(String sodUtc0) {
            this.sodUtc0 = sodUtc0;
        }

        public String getSodUtc8() {
            return sodUtc8;
        }

        public void setSodUtc8(String sodUtc8) {
            this.sodUtc8 = sodUtc8;
        }

        public String getTs() {
            return ts;
        }

        public void setTs(String ts) {
            this.ts = ts;
        }
    }


}
