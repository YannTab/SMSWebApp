import { getMessagebyContactIdController } from "../controllers/messages/list-user-messages";
import { Router } from "express";

import { sendMessageController } from "../controllers/messages/send-message";

const router = Router();

router.post('/send', sendMessageController);

router.get('/getMessage/:id', getMessagebyContactIdController);

export default router;
