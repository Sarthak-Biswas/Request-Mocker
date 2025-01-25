import { Sequelize } from '@sequelize/core';
import { PostgresDialect } from '@sequelize/postgres';

const sslSupport = false

const yugabyteSqlz = new Sequelize({
    dialect: PostgresDialect,
    schema: 'mocker',
    database: 'yugabyte',
    user: 'yugabyte',
    password: 'yugabyte',
    host: 'localhost',
    port: 5433,
    ssl: sslSupport ? {
        rejectUnauthorized: false
    } : false,
    clientMinMessages: 'notice'
})

export { yugabyteSqlz }