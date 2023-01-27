import path from "path";
import logger from "../logger";

const dbFilePath = path.join(
  __dirname,
  "../../" + process.env.DB_FILE_PATH
);

export const config = new Map<string, any>([
  ['envMode', process.env.NODE_ENV],
  ['port', process.env.PORT || 8081],
  ['dbFilePath', dbFilePath],
  ['jwtPrivateKey', process.env.JWT_PRIVATE_KEY]
]);
