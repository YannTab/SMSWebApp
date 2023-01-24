import { createDbConnection } from "./connect";
import { Model, Sequelize } from "sequelize";
import logger from "../logger";
import { config } from "../config/default";


// Singleton Implementation
const filepath = config.get("dbFilePath");

export const db: {
    instance: Sequelize
} = {
    instance: new Sequelize({
        dialect: 'sqlite',
        storage: filepath,
        logging: logger.debug
      })
};