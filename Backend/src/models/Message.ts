import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, Optional } from "sequelize";
import { db } from "../db";
import { Contact } from "./Contact";
import { User } from "./User";

export interface Message extends Model<InferAttributes<Message>, InferCreationAttributes<Message>> {
    id: CreationOptional<number>;
    msg: Text;
    date: Date;
    destinator: string;
    
}

export const Message = db.instance!.define('Message', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    msg: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull:true,
    },
    destinator: {
        type:DataTypes.STRING,
        allowNull:false,
    }
});

