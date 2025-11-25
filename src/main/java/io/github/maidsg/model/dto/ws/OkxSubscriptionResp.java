package io.github.maidsg.model.dto.ws;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/*******************************************************************
 *
 * 成功返回示例
 *
 * {
 *     "id": "1512",
 *     "event": "subscribe",
 *     "arg": {
 *         "channel": "tickers",
 *         "instId": "BTC-USDT"
 *     },
 *     "connId": "a4d3ae55"
 * }
 *
 * 失败返回示例
 *
 * {
 *     "id": "1512",
 *     "event": "error",
 *     "code": "60012",
 *     "msg": "Invalid request: {\"op\": \"subscribe\", \"argss\":[{ \"channel\" : \"tickers\", \"instId\" : \"LTC-USD-200327\"}]}",
 *     "connId": "a4d3ae55"
 * }
 *
 *
 *
 * @author wy
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class OkxSubscriptionResp {


    private String id;
    private String event;
    private Arg arg;
    private String connId;
    private String code;
    private String msg;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEvent() {
        return event;
    }

    public void setEvent(String event) {
        this.event = event;
    }

    public Arg getArg() {
        return arg;
    }

    public void setArg(Arg arg) {
        this.arg = arg;
    }

    public String getConnId() {
        return connId;
    }

    public void setConnId(String connId) {
        this.connId = connId;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
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





}
