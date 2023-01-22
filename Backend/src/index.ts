import express from "express";
import { config } from "./config/default";

import { initializeApp } from "./app";
import log from "./logger";

const port = config.get("port");

const app = express();

initializeApp(app);

// Server setup
app.listen(port, () => {
    log.info(`Express server started on http://localhost:${port}/`);
});