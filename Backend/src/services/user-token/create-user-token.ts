import { RawUserToken, UserToken } from "../../models/UserToken";
import { ModelAttributes } from "sequelize";

export const createUserToken = async (data: RawUserToken) => {
    return await UserToken.create(data);
}
