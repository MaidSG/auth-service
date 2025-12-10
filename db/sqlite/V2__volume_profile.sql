CREATE TABLE IF NOT EXISTS volume_profile_nodes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    inst_id TEXT NOT NULL,
    bucket_start DECIMAL(18,8) NOT NULL,
    bucket_end DECIMAL(18,8) NOT NULL,
    total_volume DECIMAL(18,8) NOT NULL,
    buy_volume DECIMAL(18,8) NOT NULL,
    sell_volume DECIMAL(18,8) NOT NULL,
    net_delta DECIMAL(18,8) NOT NULL,
    calculated_for_time INTEGER NOT NULL,
    created_at INTEGER DEFAULT (strftime('%s','now'))
);

CREATE INDEX IF NOT EXISTS idx_vpn_inst_time ON volume_profile_nodes (inst_id, calculated_for_time);

CREATE TABLE IF NOT EXISTS order_blocks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    inst_id TEXT NOT NULL,
    block_type TEXT NOT NULL,
    price_high DECIMAL(18,8) NOT NULL,
    price_low DECIMAL(18,8) NOT NULL,
    total_volume DECIMAL(18,8) NOT NULL,
    net_delta DECIMAL(18,8) NOT NULL,
    formation_time INTEGER NOT NULL,
    is_active INTEGER DEFAULT 1,
    tested_count INTEGER DEFAULT 0,
    created_at INTEGER DEFAULT (strftime('%s','now'))
);

CREATE INDEX IF NOT EXISTS idx_ob_inst_active ON order_blocks (inst_id, is_active);

