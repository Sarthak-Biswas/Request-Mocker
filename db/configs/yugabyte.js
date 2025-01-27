import { Sequelize } from 'sequelize';

const sslSupport = false

const yugabyteSqlz = new Sequelize({
    dialect: 'postgres',
    schema: 'mock',
    database: 'yugabyte',
    username: 'yugabyte',
    password: 'yugabyte',
    host: 'localhost',
    port: 5433,
    // this is a node.tls api option, i.e, if the ssl certs provided by the client
    // which is request mocker, is not valid against server certs, then server should not
    // reject the connection
    ssl: sslSupport ? {
        rejectUnauthorized: false
    } : false,
    // This is db realated option, i.e at what level messages will be sent to user
    // this is at par with client_min_message option with postgres
    dialectOptions: {
        clientMinMessages: 'notice'
    }
})

export { yugabyteSqlz }