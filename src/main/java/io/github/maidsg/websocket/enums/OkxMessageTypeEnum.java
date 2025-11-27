package io.github.maidsg.websocket.enums;

/*******************************************************************
 * OKX推送的消息类型枚举，枚举值作为路由分发键使用
 * ORDER_BOOK 深度数据
 * TICKER 行情快照
 * TRADE 成交明细
 * @author wy
 */
public enum OkxMessageTypeEnum {

    LOGIN,
    ERROR,

    ORDER_BOOK,
    ORDER_BOOK_DATA,

    ORDER_BOOK_TBT,
    ORDER_BOOK_TBT_DATA,

    ORDER_BOOK_5,
    ORDER_BOOK_5_DATA,



    TICKER,
    TICKER_DATA,

    TRADE,
    TRADE_DATA,

    CANDLE,
    CANDLE_DATA;


    public boolean isSubscriptionAck() {
        return this == ORDER_BOOK || this == TICKER || this == TRADE || this == CANDLE
                || this == ORDER_BOOK_TBT || this == ORDER_BOOK_5;
    }

    public boolean isDataPush() {
        return this == ORDER_BOOK_DATA || this == TICKER_DATA || this == TRADE_DATA || this == CANDLE_DATA
                || this == ORDER_BOOK_TBT_DATA || this == ORDER_BOOK_5_DATA;
    }

    public String channelKey() {
        return switch (this) {
            case  LOGIN -> "login";
            case ERROR -> "error";
            case ORDER_BOOK, ORDER_BOOK_DATA -> "books";
            case ORDER_BOOK_TBT, ORDER_BOOK_TBT_DATA -> "bbo-tbt";
            case ORDER_BOOK_5, ORDER_BOOK_5_DATA -> "books5";
            case TICKER, TICKER_DATA -> "tickers";
            case TRADE, TRADE_DATA -> "trades";
            case CANDLE, CANDLE_DATA -> "candle";
        };
    }

}
