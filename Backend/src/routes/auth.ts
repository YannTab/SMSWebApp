import { Router } from "express";
import { createUserTokenController } from "../controllers/user-token/create-user-token";
import { deleteUserTokenController } from "../controllers/user-token/delete-user-token";
import { authMiddleware } from "../middleware/auth";

const router = Router();

/* Get new token for User */
router.post('/login', createUserTokenController);
router.post('/logout', authMiddleware, deleteUserTokenController);

export default router;