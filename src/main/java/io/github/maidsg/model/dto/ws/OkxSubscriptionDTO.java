package io.github.maidsg.model.dto.ws;

import java.util.List;
import java.util.Objects;

/*******************************************************************
 *
 * @author wy
 */
public class OkxSubscriptionDTO {

    /**
     * 操作，必填，例如 "subscribe"
     */
    private String op;

    /**
     * 请求订阅的频道列表，必填
     */
    private List<Arg> args;

    public OkxSubscriptionDTO() {
    }

    public OkxSubscriptionDTO(String op, List<Arg> args) {
        this.op = op;
        this.args = args;
    }

    public String getOp() {
        return op;
    }

    public void setOp(String op) {
        this.op = op;
    }

    public List<Arg> getArgs() {
        return args;
    }

    public void setArgs(List<Arg> args) {
        this.args = args;
    }

    /**
     * 单个订阅项
     * channel: 必填，频道名
     * instType: 可选，产品类型：SPOT、MARGIN、SWAP、FUTURES、OPTION、ANY
     * instFamily: 可选，适用于交割/永续/期权（FUTURES/SWAP/OPTION）
     * instId: 可选，具体产品ID
     *
     * 使用方案示例：
     * 1) 使用字符串（兼容直接序列化/反序列化的 JSON）：
     *    { "channel":"ticker", "instType":"SPOT", "instId":"BTC-USDT" }
     * 2) 在代码中使用枚举便捷方法：
     *    Arg a = Arg.of("ticker", InstType.SPOT, InstFamily.SWAP, "BTC-USDT");
     *    String instTypeStr = a.getInstType(); // "SPOT"（用于序列化）
     *    InstType it = a.getInstTypeEnum(); // InstType.SPOT（便捷使用）
     */
    public static class Arg {
        private String channel;
        private String instType;
        private String instFamily;
        private String instId;

        public Arg() {
        }

        public Arg(String channel, String instType, String instFamily, String instId) {
            this.channel = channel;
            this.instType = instType;
            this.instFamily = instFamily;
            this.instId = instId;
        }

        // 便捷静态工厂，接受枚举
        public static Arg of(String channel, InstType instType, InstFamily instFamily, String instId) {
            return new Arg(channel,
                    instType == null ? null : instType.getValue(),
                    instFamily == null ? null : instFamily.getValue(),
                    instId);
        }

        public String getChannel() {
            return channel;
        }

        public void setChannel(String channel) {
            this.channel = channel;
        }

        public String getInstType() {
            return instType;
        }

        public void setInstType(String instType) {
            this.instType = instType;
        }

        public String getInstFamily() {
            return instFamily;
        }

        public void setInstFamily(String instFamily) {
            this.instFamily = instFamily;
        }

        public String getInstId() {
            return instId;
        }

        public void setInstId(String instId) {
            this.instId = instId;
        }

        // 额外的枚举友好方法（便于代码中使用枚举）
        public void setInstTypeEnum(InstType instType) {
            this.instType = instType == null ? null : instType.getValue();
        }

        public InstType getInstTypeEnum() {
            return InstType.from(this.instType);
        }

        public void setInstFamilyEnum(InstFamily instFamily) {
            this.instFamily = instFamily == null ? null : instFamily.getValue();
        }

        public InstFamily getInstFamilyEnum() {
            return InstFamily.from(this.instFamily);
        }

        @Override
        public String toString() {
            return "Arg{" +
                    "channel='" + channel + '\'' +
                    ", instType='" + instType + '\'' +
                    ", instFamily='" + instFamily + '\'' +
                    ", instId='" + instId + '\'' +
                    '}';
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (!(o instanceof Arg)) return false;
            Arg arg = (Arg) o;
            return Objects.equals(channel, arg.channel) &&
                    Objects.equals(instType, arg.instType) &&
                    Objects.equals(instFamily, arg.instFamily) &&
                    Objects.equals(instId, arg.instId);
        }

        @Override
        public int hashCode() {
            return Objects.hash(channel, instType, instFamily, instId);
        }
    }

    @Override
    public String toString() {
        return "OkxSubscriptionDTO{" +
                "op='" + op + '\'' +
                ", args=" + args +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof OkxSubscriptionDTO)) return false;
        OkxSubscriptionDTO that = (OkxSubscriptionDTO) o;
        return Objects.equals(op, that.op) &&
                Objects.equals(args, that.args);
    }

    @Override
    public int hashCode() {
        return Objects.hash(op, args);
    }

    /**
     * 产品类型枚举（对应 instType 字段）
     */
    public enum InstType {
        SPOT("SPOT"),
        MARGIN("MARGIN"),
        SWAP("SWAP"),
        FUTURES("FUTURES"),
        OPTION("OPTION"),
        ANY("ANY");

        private final String value;

        InstType(String value) { this.value = value; }

        public String getValue() { return value; }

        @Override
        public String toString() { return value; }

        public static InstType from(String v) {
            if (v == null) return null;
            String s = v.trim().toUpperCase();
            for (InstType it : InstType.values()) {
                if (it.value.equals(s)) return it;
            }
            return null;
        }
    }

    /**
     * 产品 family 枚举，适用于交割/永续/期权（对应 instFamily 字段）
     * 说明：这里使用与 instType 相近的命名（FUTURES / SWAP / OPTION），以便表达“适用于哪类合约”
     */
    public enum InstFamily {
        FUTURES("FUTURES"),
        SWAP("SWAP"),
        OPTION("OPTION");

        private final String value;

        InstFamily(String value) { this.value = value; }

        public String getValue() { return value; }

        @Override
        public String toString() { return value; }

        public static InstFamily from(String v) {
            if (v == null) return null;
            String s = v.trim().toUpperCase();
            for (InstFamily f : InstFamily.values()) {
                if (f.value.equals(s)) return f;
            }
            return null;
        }
    }
}
