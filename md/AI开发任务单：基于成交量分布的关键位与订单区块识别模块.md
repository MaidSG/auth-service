1. 任务背景
本模块是加密货币订单流分析系统的核心特征提取器。其目标是通过分析历史成交数据，识别出市场中因大量换手而形成的关键价格区域（高成交量节点），并进一步结合订单流Delta指标，筛选出高质量的订单区块。该模块的输出将直接服务于下游的策略信号生成器，是判断支撑阻力、理解市场微观结构的基础。

2. 现有环境与约束
项目技术栈: Java 17, Quarkus 3.29.3

主要依赖: Quarkus Hibernate ORM Panache, JDBC (SQLite), 可能使用 quarkus-scheduler。

数据源:

主数据源: okx_raw_trades 表，包含每一笔成交的明细。

辅助参考: okx_kline_data_3m 表，用于定义分析的时间范围或周期。

代码规范:

遵循团队现有的Java代码风格。

使用Panache实体或Repository模式进行数据访问。

Service层逻辑清晰，具备良好的日志记录（使用SLF4J）。

配置化：分析周期、阈值等参数应从 application.properties 读取。

性能约束:

需处理至少过去24小时（约28800条3分钟K线对应的原始成交）的数据。

计算效率需满足定时任务（如每小时运行一次）的要求，避免长时间阻塞。

3. 输入与输出
输入:

instId: 交易对标识，如 ETH-USDT。

lookbackPeriod: 回顾周期（例如 24h），用于定义分析的数据范围。

输出:

持久化到数据库表 volume_profile_nodes 和 order_blocks。

控制台或日志中输出本次分析的关键摘要（如识别出的节点数量、区块数量）。

4. 核心处理逻辑与步骤
模块需按以下步骤顺序执行：

步骤1：数据准备与价格区间离散化

根据 instId 和 lookbackPeriod，从 okx_raw_trades 表查询原始成交数据。

确定分析的价格范围：[min(price), max(price)]。

将此价格范围划分为若干个等宽的区间。区间宽度（bucketWidth）应可配置（例如，ETH当前价位在$3500左右，宽度可设为$5）。

产出：一个有序的价格区间列表。

步骤2：计算基础成交量剖面

遍历每一笔成交，根据其成交价 price 确定所属的价格区间。

为每个价格区间累加：

totalVolume：总成交量。

buyVolume：主动买入量（side = ‘buy’ AND is_buyer_maker = false）。

sellVolume：主动卖出量（side = ‘sell’ AND is_buyer_maker = true）。

计算每个区间的 netDelta = buyVolume - sellVolume。

产出：一个包含 priceBucket, totalVolume, buyVolume, sellVolume, netDelta 的成交量剖面列表。

步骤3：识别高成交量节点

计算所有区间 totalVolume 的平均值（avgVolume）和标准差（stdVolume）。

定义高成交量节点的阈值（例如：avgVolume + 1.5 * stdVolume）。该阈值应可配置。

筛选出 totalVolume 大于此阈值的区间，标记为 高成交量节点。

对节点进行合并：若相邻节点间的价格差距小于某个阈值（如 2 * bucketWidth），则将其合并为一个更宽的关键区域，其各项指标为子区间之和。

将合并后的高成交量节点信息（包括区域起止价、总量、净Delta等）存入 volume_profile_nodes 表。

步骤4：识别订单区块
这是本模块的升华步骤，旨在从高成交量节点中筛选出“聪明钱”足迹清晰的区域。

遍历步骤3得到的高成交量节点。

应用订单区块过滤规则，一个节点需同时满足以下所有条件才被认定为订单区块：

规则A（强度）：totalVolume 排名位于前 X%（例如前30%）。

规则B（单边性）：净Delta的绝对值占比显著，即 Math.abs(netDelta) / totalVolume > Y%（例如 > 60%）。这表示资金流向高度一致。

规则C（价格行为）：在成交量节点形成之后，价格已脱离该区域并产生一段可观的波动（需结合K线数据验证）。这是一个确认信号。

确定区块类型：若 netDelta > 0，则为 BULLISH 订单区块（潜在支撑）；若 netDelta < 0，则为 BEARISH 订单区块（潜在阻力）。

将符合条件的订单区块信息存入 order_blocks 表，字段需包含：instId, blockType, priceHigh, priceLow, totalVolume, netDelta, formationTime（可取自节点内最后一笔成交的时间）, isActive（布尔值，初始为true）。

5. 数据库表结构设计
sql
-- 成交量节点表
CREATE TABLE volume_profile_nodes (
    id INTEGER PRIMARY KEY,
    inst_id VARCHAR(20),
    bucket_start DECIMAL(18, 8),
    bucket_end DECIMAL(18, 8),
    total_volume DECIMAL(18, 8),
    buy_volume DECIMAL(18, 8),
    sell_volume DECIMAL(18, 8),
    net_delta DECIMAL(18, 8),
    calculated_for_time TIMESTAMP, -- 本次分析对应的时点
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_vpn_inst_time ON volume_profile_nodes (inst_id, calculated_for_time);

-- 订单区块表
CREATE TABLE order_blocks (
    id INTEGER PRIMARY KEY,
    inst_id VARCHAR(20),
    block_type VARCHAR(10), -- 'BULLISH' / 'BEARISH'
    price_high DECIMAL(18, 8),
    price_low DECIMAL(18, 8),
    total_volume DECIMAL(18, 8),
    net_delta DECIMAL(18, 8),
    formation_time TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE,
    tested_count INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_ob_inst_active ON order_blocks (inst_id, is_active);
6. 验收标准
模块能够成功连接数据库并查询出指定范围的原始成交数据。

成交量剖面计算准确，价格区间划分正确，无数据遗漏或重复计算。

高成交量节点识别逻辑正确，合并相邻节点的功能正常工作。

订单区块的过滤规则被严格执行，特别是“价格脱离”的条件得到合理验证。

结果正确持久化到 volume_profile_nodes 和 order_blocks 表，且 order_blocks 表中的数据可直接被策略信号生成器查询使用。

模块运行时有清晰的INFO级别日志，记录如“开始分析ETH-USDT，共处理N笔成交...”、“识别出M个高成交量节点，其中K个被判定为订单区块”等信息。

提供基本的异常处理（如无数据、数据库连接失败等）。

7. 测试建议
单元测试：针对VolumeProfileService.calculateProfile等方法，使用一个小的、预设的成交数据集，验证其计算的剖面数据与手动计算结果一致。

集成测试：运行一次完整的模块任务，针对某个交易对（如ETH-USDT）分析过去几小时的数据。手动检查数据库中的结果：

查询 volume_profile_nodes，确认价格区间与成交量是否符合市场概况。

查询 order_blocks，挑选一个区块，回溯原始成交和K线图，人工验证其是否符合订单区块的定义。


模块总体设计
配置与常量
新增 VolumeProfileConfig（@ConfigProperties）读取 application.properties 中的 profile.bucket-width, profile.high-volume-std-multiplier, profile.order-block.top-percent, profile.order-block.delta-threshold, profile.price-detach.pct, profile.lookback.default.
统一由 VolumeProfileService 注入使用，允许调度任务传入覆写参数。
数据访问层
OkxRawTradesRepository：提供基于 instId、timestamp 范围的批量查询（考虑分页或流式，避免一次加载全部）。
OkxKlineData3mRepository：用于验证价格脱离条件。
新增 VolumeProfileNodeRepository、OrderBlockRepository 对应表 volume_profile_nodes 与 order_blocks，均继承 PanacheRepositoryBase.
建议在实体 VolumeProfileNodeEntity、OrderBlockEntity 中定义必要字段与索引映射。
核心服务分层
VolumeProfileService
负责总体流程调度（步骤1-4），对外暴露 analyze(String instId, Duration lookback)。
注入 VolumeProfileConfig、各 Repository、PriceDetachValidator、VolumeProfileCalculator。
记录 INFO 日志：开始/结束、处理成交笔数、节点/区块数量。
VolumeProfileCalculator
步骤1-3：离散化区间、累积成交量、计算均值方差、识别并合并节点。
输入：交易列表 + 配置；输出：List<VolumeProfileNode>（领域模型）。
OrderBlockDetector
步骤4：根据节点应用规则 A/B/C。
依赖 PriceDetachValidator 检查价格脱离；产出 List<OrderBlock>。
PriceDetachValidator
使用 OkxKlineData3mRepository 查询节点形成后的 K 线，判断价格是否离开区间（可用最高/最低价偏离区间边界一定百分比 priceDetachPct）。
VolumeProfilePersistenceService
负责批量 persist 节点与订单区块，保证事务隔离，必要时先 delete 指定 instId + calculatedForTime 的旧数据再插入。
定时与触发
新增 VolumeProfileScheduler（可选 quarkus-scheduler）：每小时读取配置的 instId 列表并调用 VolumeProfileService.analyze.
提供 VolumeProfileResource REST 端点以手动触发（便于调试/集成测试）。
DTO / 领域模型
VolumeProfileBucket：价格区间及累积指标（非实体）。
VolumeProfileNode：合并后的节点描述，含 bucketStart, bucketEnd, totalVolume, netDelta, formationTime.
OrderBlock：包含 blockType、价格区间、指标、isActive 等。
日志与异常
VolumeProfileService：LOG.infof("开始分析%s，lookback=%s，命中成交数=%d", ...).
捕获空数据、数据库故障等，LOG.warn 或 LOG.error.
关键步骤使用 StopWatch/Duration 统计耗时。
测试策略
单元测试：对 VolumeProfileCalculator、OrderBlockDetector 使用内存数据验证。
集成测试：@QuarkusTest + 测试数据库，执行 VolumeProfileService.analyze 并断言表记录。
此设计在 Service 层划分清晰、配置灵活，满足定时计算与高并发读/写的需求，同时遵循 Quarkus+Panache 规范，可直接落地实现。