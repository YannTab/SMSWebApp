
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, ModelStatic } from "sequelize";
import { db } from "../db";

export interface RawUserToken {
    id?: CreationOptional<number>;
    token: string;
    UserId?: number;
}

export interface UserToken extends RawUserToken, Model<InferAttributes<UserToken>, InferCreationAttributes<UserToken>> {
    
}

export const UserToken = db.instance!.define<UserToken>('UserToken', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});