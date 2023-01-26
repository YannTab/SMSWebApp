import { Router } from "express";

import { sendMessageController } from "../controllers/messages/send-message";

const router = Router();

router.post('/send', sendMessageController);

export default router;