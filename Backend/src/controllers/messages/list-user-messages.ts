import { NextFunction, Response } from "express"
import { Request } from "../../custom-types";
import { getMessagebyContactId } from "../../services/messages/get-messages";
import { getMessages } from "../../services/messages/get-messages";

export const getMessagebyContactIdController = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const contactMessages = await getMessagebyContactId(Number(id));
    res.json(contactMessages)
}

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