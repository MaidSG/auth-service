-- 创建 users 表
DROP TABLE  IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (
                                     id INTEGER PRIMARY KEY AUTOINCREMENT,
                                     name TEXT NOT NULL,
                                     email TEXT NOT NULL
);

-- 初始化数据
INSERT INTO users (name, email) VALUES
                                    ('Alice', 'alice@example.com'),
                                    ('Bob', 'bob@example.com');
