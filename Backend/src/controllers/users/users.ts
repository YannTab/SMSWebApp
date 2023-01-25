import { Response,Request,NextFunction } from "express"
import { User } from "../../models/User";
import { saveUser,editUser,deleteUser, getUser, getAllUsers } from "../../services/users/users";

export const saveUserController = async (req: Request, res: Response, next:NextFunction) => {
    await saveUser(req.body);
    res.status(200).json({
        message : "user saved successfully",
        data : await User.findByPk(req.body.id)
    })
    next()
}

export const getUserController = async (req: Request, res: Response,next:NextFunction)=>{
    const {id} = req.params;
    const user = await getUser(Number(id));
    res.json(user)
    next()
}

export const getAllUsersController = async (req:Request, res:Response, next: NextFunction) => {
    const users = await getAllUsers();
    res.json(users);
    console.log("res: " + res)
    next();
}

export const editUserController = async (req: Request, res: Response,next:NextFunction) => {
    const {id} = req.params;
    await editUser(req.body, Number(id));
    res.status(200).json({
        message : "user updated successfully",
        data : await User.findByPk(Number(id))
    })
    next()
}

export const deleteUserController = async (req: Request, res: Response,next:NextFunction)=>{
    const {id} = req.params;
    const bool = await deleteUser(Number(id));
    res.json({success:bool})
    next()
}

