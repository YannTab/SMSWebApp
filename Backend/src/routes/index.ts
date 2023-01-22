import { NextFunction, Request, Response } from "express";

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.status(200).json({
    data: {
      text: "This is the index page",
      success: true
    }
  })
});

module.exports = router;
