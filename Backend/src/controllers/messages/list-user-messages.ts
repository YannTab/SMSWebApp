import { NextFunction, Request, Response } from "express"
import { getMessagebyContactId } from "../../services/messages/get-messages";

export const getMessagebyContactIdController = async (req: Request, res: Response, next: NextFunction) => {
    const {contactId} = req.params
    const contactMessages = await getMessagebyContactId(Number(contactId));
    res.status(200).json(contactMessages)
    next()
};