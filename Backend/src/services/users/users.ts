import { User } from "../../models/User"

export const saveUser = async(user : any)=>{
    await User.create(user).then(user=> console.log(user.firstName+' has been created'))

}