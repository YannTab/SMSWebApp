import { NextFunction, Response } from "express"
import { getMessages } from "../../services/messages/get-messages";

import { Request } from "../../custom-types";

export const listUserMessagesController = function (req: Request, res: Response, next: NextFunction) {
    try {
        const messages = getMessages({ UserId: req.customData!.user.id! });
        res.status(200).json({
            data: {
                success: true,
                message: "Messages were fetched successfully",
                data: {
                    messages
                }
            }
        })
    } catch (error) {
        next(error);
    }
};