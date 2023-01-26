import { getMessagebyContactIdController } from "../controllers/messages/list-user-messages";
import { sendMessageController } from "../controllers/messages/send-message";

var express = require('express');
var router = express.Router();

router.post('/send', sendMessageController);

router.get('/getMessage/:ContactId', getMessagebyContactIdController);

module.exports = router;