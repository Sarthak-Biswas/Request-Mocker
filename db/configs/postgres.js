import { Sequelize } from '@sequelize/core';
import { PostgresDialect } from '@sequelize/postgres';

const sslSupport = false

const postgresSqlz = new Sequelize({
    dialect: PostgresDialect,
    schema: 'mocker',
    database: 'yugabyte',
    user: 'yugabyte',
    password: 'yugabyte',
    host: 'localhost',
    port: 5432,
    ssl: sslSupport ? {
        rejectUnauthorized: false
    } : false,
    clientMinMessages: 'notice'
})

export { postgresSqlz }