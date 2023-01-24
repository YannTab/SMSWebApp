import { NextFunction, Request, Response } from "express";
import { userInfo } from "os";
import { listUserMessagesController } from "../controllers/messages/list-user-messages";
import { deleteUserController, editUserController, getUserController, saveUserController } from "../controllers/users/users";
import { User } from "../models/User";
import { saveUser } from "../services/users/users";
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

/** record a new user in the database */

router.post('/save', saveUserController);

/*get informations of the user who wants to update his details */
router.get('/getUser/:id',getUserController);

router.get('/edit',editUserController);

/*delete the current user */
router.get('/delete/:id',deleteUserController);

/* GET user messages */
//router.get('/messages', listUserMessagesController);

module.exports = router;
