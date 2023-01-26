import { NextFunction, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { appErrors } from "../apperrors";
import { Request } from "../custom-types";
import logger from "../logger";
import { checkUserToken } from "../services/auth/check-user-token";
import { verifyUserToken } from "../services/auth/verify-user-token";
import { getUser } from "../services/users/users";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.headers.authorization ||
            !req.headers.authorization.startsWith('Bearer ')
        ) {
            throw [appErrors.auth.unauthorized]
        }

        const authorization = req.headers.authorization;
        const token = authorization.replace(/^Bearer\s+/, '');
        
        const userToken = await checkUserToken(token);

        if (userToken == null) {
            throw [appErrors.auth.unauthorized]
        }

        let payload: any;
        try {
            payload = verifyUserToken(userToken.token);
        } catch(e) {
            throw [appErrors.auth.expired_token]
        }

        const user = await getUser(userToken.UserId!);
        
        if (user == null ||
            user.email !== payload.data.email ||
            user.phoneNumber !== payload.data.phoneNumber ||
            !user.isCorrectPassword!(payload.data.password)
        ) {
            throw [appErrors.auth.unauthorized]
        }

        req.customData = {
            userToken,
            user
        }

        next();
    } catch (e) {
        next(e);
    }
}