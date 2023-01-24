import { Model } from "sequelize";
import { User } from "./User";
import { Contact } from "./Contact"
import { Message } from "./Message"

export default [
    User as typeof Model,
    Contact as typeof Model,
    Message as typeof Model,
];