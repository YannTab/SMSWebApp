
import { CreationOptional, DataTypes, ForeignKeyConstraintError, InferAttributes, InferCreationAttributes, Model, Optional } from "sequelize";
import { db } from "../db";
import { Message } from "./Message";
import { User } from "./User";

export interface Contact extends Model<InferAttributes<Contact>, InferCreationAttributes<Contact>> {
    id: CreationOptional<number>;
    firstName: string;
    lastName?: string;
    email?: string;
    tel: string;
    UserId?: number;
}

export const Contact = db.instance!.define<Contact>('Contact', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: true
    }, 
    email: {
        type: DataTypes.STRING,
        allowNull:true,
    },
    tel: {
        type: DataTypes.STRING,
        allowNull:false,
    }
});


// Message to Contact Many to One
Contact.hasMany(Message, {foreignKey:'ContactId'})
Message.belongsTo(Contact)