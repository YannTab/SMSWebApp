import { NextFunction, Request, Response } from "express"
import { getMessagebyContactId } from "../../services/messages/get-messages";

export const getMessagebyContactIdController = async (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params
    const contactMessages = await getMessagebyContactId(Number(id));
    res.json(contactMessages)
    next()
};