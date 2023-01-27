import express, { NextFunction, Request, Response, Express } from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";
import logger from "morgan";
import { createDbConnection } from "./db/connect";
import { db } from "./db";
import { synchronizeDB } from "./db/sync";
import { includeRoutes } from "./routes";
import { mainErorHandler } from "./middleware/error-handling";

export const initializeApp = (app: Express) => {
  // view engine setup
  // app.set('views', path.join(__dirname, 'views'));
  // app.set('view engine', 'jade');

  //Cors here

  app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    
    next();
  });

  
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  // app.use(express.static(path.join(__dirname, 'public')));


   // Corse Policies
   var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // For legacy browser support
  }

  app.use(cors(corsOptions));

  // Include Routers
  includeRoutes(app);

  // Attach API Documentation
  // Swagger documentation route
  if (process.env.SERVER_ENV !== 'NETLIFY') {
    app.use(
      "/api-docs",
      swaggerUi.serve,
      swaggerUi.setup(YAML.load("./swagger.yaml"))
    );
  }

  // catch 404 and forward to error handler
  // app.use(function (req, res, next) {
  //   next(createError(404));
  // });

  // Attach Error Handlers
  app.use(mainErorHandler)
}