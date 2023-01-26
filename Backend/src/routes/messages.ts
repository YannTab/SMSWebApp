import { sendMessageController } from "../controllers/messages/send-message";

var express = require('express');
var router = express.Router();

router.post('/send', sendMessageController);