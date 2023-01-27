import { NextFunction, Request, Response, Express } from "express";

import usersRouter from './users';
import contactsRouter from './contacts';
import messagesRouter from './messages';
import authRouter from './auth';
import { authMiddleware } from "../middleware/auth";

export const includeRoutes = (app: Express) => {
  /* GET home page. */
  app.get('/', function (req: Request, res: Response, next: NextFunction) {
    res.status(200).send("SMS WEB API v1.0");
  });

  app.use('/users', usersRouter);
  app.use('/contacts', authMiddleware, contactsRouter);
  app.use('/messages', authMiddleware, messagesRouter);
  app.use('/auth', authRouter);
}