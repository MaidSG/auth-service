package io.github.maidsg.model.dto.ws;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/*******************************************************************
 *
 * 推送数据参数
 * 参数名	类型	描述
 * arg	Object	订阅成功的频道
 * > channel	String	频道名
 * > instId	String	产品ID
 * action	String	推送数据动作，增量推送数据还是全量推送数据
 * snapshot：全量
 * update：增量
 * data	Array of objects	订阅的数据
 * > asks	Array of Arrays	卖方深度
 * > bids	Array of Arrays	买方深度
 * > ts	String	数据更新时间戳，Unix时间戳的毫秒数格式，如 1597026383085
 * > checksum	Integer	检验和 （下方注解）
 * > prevSeqId	Integer	上一个推送的序列号。仅适用 books，books-l2-tbt，books50-l2-tbt
 * > seqId	Integer	推送的序列号 （下方注解）
 * asks和bids值数组举例说明： ["411.8", "10", "0", "4"]
 * - 411.8为深度价格
 * - 10为此价格的数量 （合约交易为张数，现货/币币杠杆为交易币的数量
 * - 0该字段已弃用(始终为0)
 * - 4为此价格的订单数量\
 *
 *  asks和bids值数组举例说明： ["411.8", "10", "0", "4"]
 * - 411.8为深度价格
 * - 10为此价格的数量 （合约交易为张数，现货/币币杠杆为交易币的数量
 * - 0该字段已弃用(始终为0)
 * - 4为此价格的订单数量
 *
 * 序列号
 * seqId是交易所行情的一个序号。如果用户通过多个websocket连接同一频道，收到的序列号会是相同的。每个instId对应一套。用户可以使用在增量推送频道的prevSeqId和seqId来构建消息序列。这将允许用户检测数据包丢失和消息的排序。正常场景下seqId的值大于prevSeqId。新消息中的prevSeqId与上一条消息的seqId匹配。最小序列号值为0，除了快照消息的prevSeqId为-1。
 *
 * 异常情况：
 * 1. 如果一段时间内（约 60 秒）没有深度更新，对于定量推送频道，OKX 会推送最近的一条更新，对于增量推送频道，OKX将发一条消息'asks': [], 'bids': []以通知用户连接是正常的。推送的seqId跟上一条信息的一样，prevSeqId等于seqId。 2. 序列号可能由于维护而重置，在这种情况下，用户将收到一条seqId小于prevSeqId的增量消息。随后的消息将遵循常规的排序规则。
 *
 *
 *
 * 示例
 * 快照推送：prevSeqId = -1，seqId = 10
 * 增量推送1（正常更新）：prevSeqId = 10，seqId = 15
 * 增量推送2（无更新）：prevSeqId = 15，seqId = 15
 * 增量推送3（序列重置）：prevSeqId = 15，seqId = 3
 * 增量推送4（正常更新）：prevSeqId = 3，seqId = 5
 * Checksum机制
 * 此机制可以帮助用户校验深度数据的准确性。
 *
 * 深度合并
 * 用户订阅增量推送（如：books400档）深度频道成功后，首先获取初始全量深度数据，当获取到增量推送数据后，更新本地全量深度数据。
 *
 * 如果有相同价格，则比较数量；数量为0删除此深度，数量有变化则替换此数据。
 * 如果没有相同价格，则按照价格优劣排序（bid为价格降序，ask为价格升序），将深度信息插入到全量数据中
 *
 * 计算校验和
 * 先用深度合并后前25档bids和asks组成一个字符串（其中ask和bid中的价格和数量以冒号连接），再计算其crc32值（32位有符号整型）。
 *当bid和ask深度数据超过25档时，截取各自25档数据，要校验的字符串按照bid、ask深度数据交替方式连接。
 * 如：bid[价格:数量]:ask[价格:数量]:bid[价格:数量]:ask[价格:数量]...
 * bid或ask深度数据不足25档时，直接忽略缺失的深度。
 * 如：bid[价格:数量]:ask[价格:数量]:asks[价格:数量]:asks[价格:数量]...
 *
 * 推送示例：增量
 *
 * {
 *     "arg": {
 *         "channel": "books",
 *         "instId": "BTC-USDT"
 *     },
 *     "action": "update",
 *     "data": [{
 *         "asks": [
 *             ["8476.98", "415", "0", "13"],
 *             ["8477", "7", "0", "2"],
 *             ["8477.34", "85", "0", "1"],
 *             ["8477.56", "1", "0", "1"],
 *             ["8505.84", "8", "0", "1"],
 *             ["8506.37", "85", "0", "1"],
 *             ["8506.49", "2", "0", "1"],
 *             ["8506.96", "100", "0", "2"]
 *         ],
 *         "bids": [
 *             ["8476.97", "256", "0", "12"],
 *             ["8475.55", "101", "0", "1"],
 *             ["8475.54", "100", "0", "1"],
 *             ["8475.3", "1", "0", "1"],
 *             ["8447.32", "6", "0", "1"],
 *             ["8447.02", "246", "0", "1"],
 *             ["8446.83", "24", "0", "1"],
 *             ["8446", "95", "0", "3"]
 *         ],
 *         "ts": "1597026383085",
 *         "checksum": -855196043,
 *         "prevSeqId": 123456,
 *         "seqId": 123457
 *     }]
 * }
 *
 * 计算校验和
 *
 * 1.bid和ask超过25档
 * 合并后全量深度数据（在此仅展示2档数据，实际应截取25档数据）：
 * {
 *     "bids": [
 *         ["3366.1", "7", "0", "3"],
 *         ["3366", "6", "3", "4"]
 *     ],
 *     "asks": [
 *         ["3366.8", "9", "10", "3"],
 *         ["3368", "8", "3", "4"]
 *     ]
 * }
 * 校验字符串：
 * "3366.1:7:3366.8:9:3366:6:3368:8"
 *
 * 2.bid或ask不足25档
 * 合并后全量深度数据：
 * {
 *     "bids": [
 *         ["3366.1", "7", "0", "3"]
 *     ],
 *     "asks": [
 *         ["3366.8", "9", "10", "3"],
 *         ["3368", "8", "3", "4"],
 *         ["3372", "8", "3", "4"]
 *     ]
 * }
 * 校验字符串：
 * "3366.1:7:3366.8:9:3368:8:3372:8"
 *
 * bbo-tbt 频道推送示例
 *
 * {
 *   "arg": {
 *     "channel": "bbo-tbt",
 *     "instId": "BCH-USDT-SWAP"
 *   },
 *   "data": [
 *     {
 *       "asks": [
 *         [
 *           "111.06","55154","0","2"
 *         ]
 *       ],
 *       "bids": [
 *         [
 *           "111.05","57745","0","2"
 *         ]
 *       ],
 *       "ts": "1670324386802",
 *       "seqId": 363996337
 *     }
 *   ]
 * }
 * books5 频道推送示例
 *
 * {
 *   "arg": {
 *     "channel": "books5",
 *     "instId": "BCH-USDT-SWAP"
 *   },
 *   "data": [
 *     {
 *       "asks": [
 *         ["111.06","55154","0","2"],
 *         ["111.07","53276","0","2"],
 *         ["111.08","72435","0","2"],
 *         ["111.09","70312","0","2"],
 *         ["111.1","67272","0","2"]],
 *       "bids": [
 *         ["111.05","57745","0","2"],
 *         ["111.04","57109","0","2"],
 *         ["111.03","69563","0","2"],
 *         ["111.02","71248","0","2"],
 *         ["111.01","65090","0","2"]],
 *       "instId": "BCH-USDT-SWAP",
 *       "ts": "1670324386802",
 *       "seqId": 363996337
 *     }
 *   ]
 * }
 *
 *
 * @author wy
 */
@Data
@Builder
public class OkxBooksDataDTO {


    @JsonProperty("arg")
    private ArgDTO arg;
    @JsonProperty("action")
    private String action;
    @JsonProperty("data")
    private List<DataDTO> data;

    @NoArgsConstructor
    @Data
    public static class ArgDTO {
        @JsonProperty("channel")
        private String channel;
        @JsonProperty("instId")
        private String instId;
    }

    @NoArgsConstructor
    @Data
    public static class DataDTO {
        @JsonProperty("asks")
        private List<List<String>> asks;
        @JsonProperty("bids")
        private List<List<String>> bids;
        @JsonProperty("ts")
        private String ts;
        @JsonProperty("checksum")
        private Integer checksum;
        @JsonProperty("prevSeqId")
        private Long prevSeqId;
        @JsonProperty("seqId")
        private Long seqId;
        @JsonProperty("instId")
        private String instId;
    }

}
