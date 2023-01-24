import { createDbConnection } from "./connect";
import { Model, Sequelize } from "sequelize";

// Singleton Implementation
export const db: {
    instance?: Sequelize,
} = {};