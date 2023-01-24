import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, Optional } from "sequelize";
import { db } from "../db";
import { Contact } from "./Contact";
import { Message } from "./Message";

export interface User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    id: CreationOptional<number>;
    firstName: string;
    lastName: string;
    password:string;
    email: string;
    address: string;
    
}

export const User = db.instance!.define<User>('User', {
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
        allowNull: false
    }, 
    password: {
        type: DataTypes.STRING,
        allowNull: true
    }, 
    email: {
        type: DataTypes.STRING,
        allowNull:true,
    },
    address: {
        type: DataTypes.STRING,
        allowNull:true,
    }
});

//User to Messages One to Many
User.hasMany(Message, {foreignKey:'UserId'})
Message.belongsTo(User)

 //User to contacts Many to Many
User.hasMany(Contact, {foreignKey: 'UserId'})
Contact.belongsTo(User)
