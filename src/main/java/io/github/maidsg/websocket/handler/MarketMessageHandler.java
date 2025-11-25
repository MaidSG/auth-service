package io.github.maidsg.websocket.handler;

import io.github.maidsg.util.JsonParserProvider.RootFields;
import io.github.maidsg.websocket.enums.OkxMessageTypeEnum;

import java.util.EnumSet;

/*******************************************************************
 * 路由交易所推送的消息策略接口
 * 每个实现声明自身支持的消息类型以便枚举路由
 * @author wy
 */
public interface MarketMessageHandler {

    EnumSet<OkxMessageTypeEnum> getSupportedTypes();

    boolean validate(OkxMessageTypeEnum type, RootFields rootFields, String message);

    void handleMessage(OkxMessageTypeEnum type, RootFields rootFields, String message);

}
