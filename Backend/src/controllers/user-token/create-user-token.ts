import { Response, NextFunction } from "express";
import { appErrors } from "../../apperrors";
import { Request } from "../../custom-types";
import { User } from "../../models/User";
import { UserGetTokenSchema } from "../../schemas/User";
import { signCredentials } from "../../services/auth/sign-credentials";
import { createUserToken } from "../../services/user-token/create-user-token";
import { findUser } from "../../services/users/users";
import { schemaValidator } from "../../utils/schemaValidator";

export const createUserTokenController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { data, errors } = schemaValidator.validate(req.body as User, UserGetTokenSchema);
        if (errors.length > 0) {
            throw errors;
        }

        const password = data.password;

        const dataWithoutPassword: Omit<User, 'password'> & { password?: string } = data;
        delete dataWithoutPassword.password;

        const user = await findUser(dataWithoutPassword);

        if (user == null) {
            throw [appErrors.user.invalid_credentials];
        }

        if (!user.isCorrectPassword!(password)) {
            throw [appErrors.user.invalid_credentials];
        }

        const token = signCredentials({
            email: user.email,
            phoneNumber: user.phoneNumber,
            password: password
        });

        await createUserToken({
            UserId: user.id,
            token
        });

        res.status(201).json({
            success: true,
            message: "Token Created Successfully",
            data: {
                token
            }
        });
    } catch (e) {
        next(e);
    }
}