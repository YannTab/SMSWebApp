import { config } from "../../config/default";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import logger from "../../logger";

export const signCredentials = (data: {
    email: string,
    phoneNumber: string,
    password: string
}) => {
    const token = jwt.sign({
        data
    }, config.get('jwtPrivateKey'), {
        expiresIn: '1h',
        algorithm: 'HS512'
    });

    return token;
}