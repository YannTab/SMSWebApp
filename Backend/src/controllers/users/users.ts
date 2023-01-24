import { Response,Request,NextFunction } from "express"
import { User } from "../../models/User";
import { saveUser } from "../../services/users/users";

export const saveUserController = function(req: Request, res: Response,next:NextFunction){
    saveUser(req.body);
    res.status(200).json({
        message : "user saved successfully",
        data : User.findOne(req.body.id)
    })
    next()
}