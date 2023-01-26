import { UserToken } from "../../models/UserToken"

export const deleteUserToken = async (id:number) => {
    return await UserToken.destroy({where : {id}});
}