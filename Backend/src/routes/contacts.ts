import { NextFunction, Request, Response } from "express";
import { userInfo } from "os";
import { deleteContactController, editContactController, getAllContactsController, getContactbyUserIdController, getContactController, saveContactController } from "../controllers/contacts/contacts";
var express = require('express');
var router = express.Router();

/* GET contacts listing. */
router.get('/', getAllContactsController);

router.get('/getContactByUserId/:id', getContactbyUserIdController);

/** record a new contact in the database *

router.post('/save', saveContactController);

/*get informations of the contact who wants to update his details */
router.get('/getContact/:id',getContactController);

router.get('/edit/:id',editContactController);

/*delete the current contact */
router.get('/delete/:id',deleteContactController);


module.exports = router;
