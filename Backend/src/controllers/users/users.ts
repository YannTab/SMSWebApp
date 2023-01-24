import { Response,Request,NextFunction } from "express"
import { User } from "../../models/User";
import { saveUser,editUser,deleteUser } from "../../services/users/users";

export const saveUserController = function(req: Request, res: Response, next:NextFunction){
    saveUser(req.body);
    res.status(200).json({
        message : "user saved successfully",
        data : User.findByPk(req.body.id)
    })
    next()
}
export const editUserController = function(req: Request, res: Response,next:NextFunction){
    const {id} = req.params;
    const user = editUser(id);
    res.json(user)
    next()
}
export const deleteUserController = function(req: Request, res: Response,next:NextFunction){
    const {id} = req.params;
    const bool = deleteUser(id);
    res.json({success:bool})
    next()
}

