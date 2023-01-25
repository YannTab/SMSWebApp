import { config } from "../config/default";
import logger from "../logger";
import { Sequelize } from "sequelize";

const filepath = config.get("dbFilePath");

export const createDbConnection = () => {
  const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: filepath,
    logging: logger.debug
  });

  sequelize
    .authenticate()
    .then(() => {
      logger.info("Connection with SQLite has been established");
    })
    .catch((error) => {
      logger.error("Unable to Connect to the database");
      logger.error(error.message);
    })
  
  return sequelize;
}