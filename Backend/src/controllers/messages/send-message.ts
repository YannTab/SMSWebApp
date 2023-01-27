import { Response, Request, NextFunction } from "express"
import { Message } from "../../models/Message";
import { sendMessage } from "../../services/messages/send-message";

export const sendMessageController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // TODO validate body
        await sendMessage(req.body);
        res.status(200).json({
            success: true,
            message: "Message sent successfully",
            data: await Message.findByPk(req.body.id)
        })
    } catch (error) {
        next(error);
    }
}