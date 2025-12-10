# auth-service

This project uses Quarkus, the Supersonic Subatomic Java Framework.

If you want to learn more about Quarkus, please visit its website: <https://quarkus.io/>.

## Running the application in dev mode

You can run your application in dev mode that enables live coding using:

```shell script
./mvnw quarkus:dev
```

> **_NOTE:_**  Quarkus now ships with a Dev UI, which is available in dev mode only at <http://localhost:8080/q/dev/>.

## Packaging and running the application

The application can be packaged using:

```shell script
./mvnw package
```

It produces the `quarkus-run.jar` file in the `target/quarkus-app/` directory.
Be aware that it’s not an _über-jar_ as the dependencies are copied into the `target/quarkus-app/lib/` directory.

The application is now runnable using `java -jar target/quarkus-app/quarkus-run.jar`.

If you want to build an _über-jar_, execute the following command:

```shell script
./mvnw package -Dquarkus.package.jar.type=uber-jar
```

The application, packaged as an _über-jar_, is now runnable using `java -jar target/*-runner.jar`.

## Creating a native executable

You can create a native executable using:

```shell script
./mvnw package -Dnative
```

Or, if you don't have GraalVM installed, you can run the native executable build in a container using:

```shell script
./mvnw package -Dnative -Dquarkus.native.container-build=true
```

You can then execute your native executable with: `./target/auth-service-1.0.0-SNAPSHOT-runner`

If you want to learn more about building native executables, please consult <https://quarkus.io/guides/maven-tooling>.

## Provided Code

### REST

Easily start your REST Web Services

[Related guide section...](https://quarkus.io/guides/getting-started-reactive#reactive-jax-rs-resources)

# 成交量分布 & 订单区块模块

定时任务与 REST 入口会基于 `profile.*` 配置运行 Volume Profile + Order Block 识别，并将结果写入 `volume_profile_nodes` / `order_blocks`。

## 快速触发

- 定时：`VolumeProfileScheduler` 默认每小时执行，实例列表来自 `profile.inst-ids`。
- REST：

```bash
curl -X POST http://localhost:8533/as-api/volume-profile \
  -H "Content-Type: application/json" \
  -d '{"instId":"BTC-USDT-SWAP","lookbackMinutes":60}'
```

省略 `instId` 时会 fallback 到配置列表。

## 配置说明

| key | 说明 | 默认 |
| --- | --- | --- |
| `profile.bucket-width` | 价格桶宽度（USD） | `5` |
| `profile.high-volume-std-multiplier` | 高成交量阈值 = 均值 + N * 标准差 | `1.5` |
| `profile.default-lookback` | 分析回溯周期，ISO-8601 Duration | `PT24H` |
| `profile.order-block.top-percent` | 规则 A：节点成交量排名前 X% | `0.3` |
| `profile.order-block.delta-threshold` | 规则 B：`|netDelta|/totalVolume` 最小占比 | `0.6` |
| `profile.price-detach.pct` | 价格脱离阈值占比 | `0.01` |
| `profile.price-detach.look-ahead` | 价格脱离验证窗口 | `PT1H` |
| `profile.inst-ids` | 参与计算的 instId 列表（逗号分隔） | `BTC-USDT-SWAP` |

> 更多细节参见 `src/main/resources/application.properties` 注释或 `md/AI开发任务单…`。
