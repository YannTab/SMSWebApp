import { Request as ExpressRequest } from "express"
import { User } from "./models/User"
import { UserToken } from "./models/UserToken"

export interface Request extends ExpressRequest {
    customData?: {
        userToken: UserToken,
        user: User
    }
}