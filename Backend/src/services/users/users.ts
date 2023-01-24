import { User } from "../../models/User"

export const saveUser = async(user : User)=>{
    await User.create(user).then(user=> console.log(user.firstName+'has been created'))

}
export const editUser =async (id:string) => {
  const user = await User.findOne({where : {id :id}});
  return user;    
}
export const updateUser =async (user:User,id:string) => {
    var change = User.findOne({where : {id :id}})
    
    await User.create(user).then(user=> console.log(user.firstName+'has been updated'))
    return user;    
  }
  
export const deleteUser = async (id:string) => {
    await User.destroy({where : {id :id}}).then( ()=> {return true}).catch(()=>{return false})
}