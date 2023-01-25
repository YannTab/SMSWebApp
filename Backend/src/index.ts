import express from "express";
import { config } from "./config/default";
import { db } from "./db";

import { initializeApp } from "./app";
import log from "./logger";
import { createDbConnection } from "./db/connect";
import { synchronizeDB } from "./db/sync";
import logger from "./logger";


const port = config.get("port");

const app = express();

initializeApp(app);

// Server setup
app.listen(port, () => {
    log.info(`Express server started on http://localhost:${port}/`);
});

// Connect to Database and sync models
db.instance = createDbConnection();
import("./models").then(models => {
    synchronizeDB(models.default);
});