import { NextFunction, Request, Response } from "express";
import { userInfo } from "os";
import { Router } from "express";
import { deleteUserController, editUserController, getAllUsersController, getUserController, saveUserController } from "../controllers/users/users";
import { authMiddleware } from "../middleware/auth";

const router = Router();

/* GET users listing. */
// router.get('/', authMiddleware, getAllUsersController);

/** record a new user in the database */
router.post('/', saveUserController);

/*get informations of the user who wants to update his details */
router.get('/me', authMiddleware, getUserController);

router.put('/me', authMiddleware, editUserController);

/*delete the current user */
router.delete('/me', authMiddleware, deleteUserController);

export default router;