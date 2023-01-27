import jwt from "jsonwebtoken";
import { config } from "../../config/default";

export const verifyUserToken = (token: string) => {
    return jwt.verify(token, config.get('jwtPrivateKey'), {
        algorithms: ['HS256', 'HS384', 'HS512']
    });
}