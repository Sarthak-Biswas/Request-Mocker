import { Model, DataTypes } from "sequelize";
import { sequelize } from "../adapter/adapter.js";

class Mocker extends Model {}

Mocker.init (
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            unique: true,
            field: 'id'
        },
        uri: { // primary key
            type: DataTypes.TEXT,
            primaryKey: true,
            field: 'uri'
        },
        method: { // primary key
            type: DataTypes.STRING(10),
            primaryKey: true,
            field: 'method'
        },
        mockerType: {
            type: DataTypes.STRING(10),
            allowNull: false,
            field: 'mocker_type'
        },
        mockerData: {
            type: DataTypes.JSONB,
            allowNull: false,
            field: 'mocker_data'
        }
    },
    {
        sequelize,
        tableName: 'request_mocker_store',
        timestamps: false
    }
)

export { Mocker }