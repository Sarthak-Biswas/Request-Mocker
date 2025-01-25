import { yugabyteSqlz } from "./configs/yugabyte.js"

const sequelize = yugabyteSqlz

const connect = async () => {
    try {
        await sequelize.authenticate()
        console.log('[SUCCESS] connected to database :D')
    } catch (error) {
        console.log('[ERROR] can not connect to databse: ', error)
        console.log('EXITING APP :( ...')
        process.exit(1)
    }
}

export { connect }