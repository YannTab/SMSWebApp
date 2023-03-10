import { Response, NextFunction } from "express";
import { appErrors } from "../../apperrors";
import { User } from "../../models/User";
import { UserCreateSchema, UserGetTokenSchema, UserUpdateSchema } from "../../schemas/User";
import { createUserToken } from "../../services/user-token/create-user-token";
import { saveUser, editUser, deleteUser, getUser, getAllUsers, findUser } from "../../services/users/users";
import { schemaValidator } from "../../utils/schemaValidator";
import { signCredentials } from "../../services/auth/sign-credentials";
import { deleteUserToken } from "../../services/user-token/delete-user-token";
import { Op } from "sequelize";

import { Request } from "../../custom-types";

export const saveUserController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { data, errors } = schemaValidator.validate(req.body as User, UserCreateSchema);
        if (errors.length > 0) {
            throw errors;
        }

        if (data.email || data.phoneNumber) {
            const existsUser = await findUser({ [Op.or]: [
                ...data.email && [{email: data.email}],
                ...data.phoneNumber && [{phonenumber: data.phoneNumber}]
            ]})

            if (existsUser != null) {
                throw [appErrors.user.exists]
            }
        }
        const user = await saveUser(data);

        // Create auth token for user
        const token = signCredentials({
            email: user.email,
            phoneNumber: user.phoneNumber,
            password: data.password
        });

        await createUserToken({
            UserId: user.id,
            token
        });

        res.status(201).json({
            success: true,
            message: "user saved successfully",
            data: {
                user,
                token
            }
        });
    } catch (e) {
        next(e);
    }
}

export const getUserController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // const { id } = req.params;
        // const user = await getUser(Number(id));
        res.json({
            success: true,
            message: "User fetched successfully",
            data: {
                user: req.customData!.user
            }
        })
    } catch (error) {
        next(error);
    }
}

export const getAllUsersController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await getAllUsers();
        res.json({
            success: true,
            message: "Users fetched successfully",
            data: {
                users
            }
        })
        console.log("res: " + res)
    } catch (error) {
        next(error);
    }
}

export const editUserController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // const { id } = req.params;
        const { data, errors } = schemaValidator.validate(req.body, UserUpdateSchema);
        if (errors.length > 0) {
            throw errors;
        }
        const updatedCount = await editUser(data, req.customData!.user.id!);

        res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: {
                updated_count: updatedCount?.[0] || 0,
                user: await User.findByPk(req.customData!.user.id!)
            }
        });
    } catch (e) {
        next(e);
    }
}

export const deleteUserController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // const { id } = req.params;
        const deletedCount = await deleteUser(Number(req.customData!.user.id!));
        res.json({
            success: true,
            message: "Account successfully closed",
            data: {
                deleted_count: deletedCount
            }
        })
    } catch (error) {
        next(error);
    }
}

