import crypto from "crypto";
import { Schema } from "../utils/schemaValidator";

import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, Optional } from "sequelize";
import { db } from "../db";
import { Contact } from "./Contact";
import { Message } from "./Message";
import { UserToken } from "./UserToken";
import logger from "../logger";

export interface User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    id?: CreationOptional<number>;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    phoneNumber: string;
    address: string;
    salt: string;
    isCorrectPassword?: (password: string) => boolean
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
        allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    salt: {
        type: DataTypes.STRING
    }
});

// Hash Password before Saving to DB
User.beforeCreate((user, options) => {
    // Creating a unique salt for a particular user 
    user.salt = crypto.randomBytes(16).toString('hex');

    // Hashing user's salt and password with 1000 iterations, 
    user.password = crypto.pbkdf2Sync(user.password, user.salt,
        1000, 64, `sha512`).toString(`hex`);
});

// Add method to check password against hash
User.prototype.isCorrectPassword = function (password: string) {
    let hash = crypto.pbkdf2Sync(password,
        this.salt, 1000, 64, `sha512`).toString(`hex`);
    return this.password === hash;
};

// Add instance method to hide password and salt before returning to frontend
User.prototype.toJSON = function () {
    let pojo = {...this.get()};


    delete pojo.password;
    delete pojo.salt;
    return pojo;
}

//User to Messages One to Many
User.hasMany(Message, { foreignKey: 'UserId' })
Message.belongsTo(User)

//User to contacts Many to Many
User.hasMany(Contact, { foreignKey: 'UserId' })
Contact.belongsTo(User);

// User has many tokens
User.hasMany(UserToken, { foreignKey: 'UserId' });
UserToken.belongsTo(User);
