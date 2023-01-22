import { NextFunction, Request, Response } from "express";
import { listUserMessagesController } from "../controllers/messages/list-user-messages";

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.status(200).json({
    data: {
      text: "This is the users page",
      success: true
    }
  })
});

/* GET user messages */
router.get('/messages', listUserMessagesController);

module.exports = router;
