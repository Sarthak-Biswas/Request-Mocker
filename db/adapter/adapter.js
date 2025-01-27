import { yugabyteSqlz } from "../configs/yugabyte.js";

const DB_NAME = 'yugabyte'

let sequelize = null

if (DB_NAME === 'yugabyte') {
    sequelize = yugabyteSqlz;
}

export { sequelize }