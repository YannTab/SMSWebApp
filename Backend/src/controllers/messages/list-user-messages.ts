import { NextFunction, Request, Response } from "express"
import { getMessages } from "../../services/messages/get-messages";

export const listUserMessagesController = function(req: Request, res: Response, next: NextFunction) {
    getMessages();
    res.status(200).json({
        data: {
            text: "This is the message pages",
            success: true
        }
    })
};