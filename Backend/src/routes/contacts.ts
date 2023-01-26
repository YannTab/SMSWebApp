import { NextFunction, Request, Response, Router } from "express";
import { userInfo } from "os";
import { deleteContactController, editContactController, getAllContactsController, getContactController, saveContactController } from "../controllers/contacts/contacts";

const router = Router();

/* GET contacts listing. */
router.get('/', getAllContactsController);

/** record a new contact in the database */

router.post('/', saveContactController);

/*get informations of the contact who wants to update his details */
router.get('/:id', getContactController);

router.put('/:id', editContactController);

/*delete the current contact */
router.delete('/:id', deleteContactController);


export default router;
