import { createDbConnection } from "./connect";
import { Model, Sequelize } from "sequelize";
import { User } from "../models/User";

// Singleton Implementation
export const db: {
    instance?: Sequelize,
} = {};