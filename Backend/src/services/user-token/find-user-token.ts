import { UserToken } from "../../models/UserToken";

export const findUserToken = async (searchParams: any) => {
  return await UserToken.findOne({ where: searchParams });
}