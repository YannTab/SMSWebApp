import { NextFunction, Request, Response } from "express";
import { userInfo } from "os";
import { deleteUserController, editUserController, getAllUsersController, getUserController, saveUserController } from "../controllers/users/users";
import { getAllUsers } from "../services/users/users";
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', getAllUsersController);

/** record a new user in the database */

router.post('/save', saveUserController);

/*get informations of the user who wants to update his details */
router.get('/getUser/:id',getUserController);

router.get('/edit/:id',editUserController);

/*delete the current user */
router.get('/delete/:id',deleteUserController);

module.exports = router;
