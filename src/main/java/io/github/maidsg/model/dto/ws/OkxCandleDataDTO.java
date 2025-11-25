package io.github.maidsg.model.dto.ws;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.quarkus.runtime.annotations.RegisterForReflection;

import java.util.List;

/*******************************************************************
 *
 * 推送数据参数
 * 参数名	类型	描述
 * arg	Object	订阅成功的频道
 * > channel	String	频道名
 * > instId	String	产品ID
 * data	Array of Arrays	订阅的数据
 * > ts	String	开始时间，Unix时间戳的毫秒数格式，如 1597026383085
 * > o	String	开盘价格
 * > h	String	最高价格
 * > l	String	最低价格
 * > c	String	收盘价格
 * > vol	String	交易量，以张为单位
 * 如果是衍生品合约，数值为合约的张数。
 * 如果是币币/币币杠杆，数值为交易货币的数量。
 * > volCcy	String	交易量，以币为单位
 * 如果是衍生品合约，数值为交易货币的数量。
 * 如果是币币/币币杠杆，数值为计价货币的数量。
 * > volCcyQuote	String	交易量，以计价货币为单位
 * 如 BTC-USDT和BTC-USDT-SWAP单位均是USDT。
 * BTC-USD-SWAP单位是USD。
 * > confirm	String	K线状态
 * 0：K线未完结
 * 1：K线已完结
 *
 * 推送示例
 *
 * {
 *   "arg": {
 *     "channel": "candle1D",
 *     "instId": "BTC-USDT"
 *   },
 *   "data": [
 *     [
 *       "1629993600000",
 *       "42500",
 *       "48199.9",
 *       "41006.1",
 *       "41006.1",
 *       "3587.41204591",
 *       "166741046.22583129",
 *       "166741046.22583129",
 *       "0"
 *     ]
 *   ]
 * }
 *
 * @author wy
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class OkxCandleDataDTO {

    @JsonProperty("arg")
    private ChannelArg arg;

    @JsonProperty("data")
    private List<List<String>> data;

    public ChannelArg getArg() {
        return arg;
    }

    public void setArg(ChannelArg arg) {
        this.arg = arg;
    }

    public List<List<String>> getData() {
        return data;
    }

    public void setData(List<List<String>> data) {
        this.data = data;
    }

    @RegisterForReflection
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class ChannelArg {

        @JsonProperty("channel")
        private String channel;

        @JsonProperty("instId")
        private String instrumentId;

        @JsonProperty("instType")
        private String instrumentType;

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
    }


}
