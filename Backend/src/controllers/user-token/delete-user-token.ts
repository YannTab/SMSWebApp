import { Response, NextFunction } from "express";

import { Request } from "../../custom-types";
import { deleteUserToken } from "../../services/user-token/delete-user-token";

export const deleteUserTokenController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await deleteUserToken(req.customData!.userToken.id!);
        res.status(201).json({
            success: true,
            message: "Logged Out Successfully",
            data: {}
        });
    } catch (e) {
        next(e);
    }
}