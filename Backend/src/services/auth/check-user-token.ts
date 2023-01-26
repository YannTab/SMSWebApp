import { findUserToken } from "../user-token/find-user-token"

export const checkUserToken = async (token: string) => {
    return await findUserToken({token})
}