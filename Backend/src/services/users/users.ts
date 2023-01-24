import { User } from "../../models/User"

export const saveUser = async(user : any)=>{
    await User.create(user).then(user=> console.log(user.firstName+' has been created'))

}
export const getUser =async (id:string) => {
  const user = await User.findOne({where : {id :id}});
  return user;    
}
export const editUser =async (user:any) => {
    await User.create(user).then(user=> console.log(user.firstName+'has been updated'))
        
  }
/*export const updateUser =async (user:any,id:string) => {
    var change = User.findOne({where : {id :id}})
    
    await User.create(user).then(user=> console.log(user.firstName+'has been updated'))
    return user;    
  }
  */
export const deleteUser = async (id:string) => {
    await User.destroy({where : {id :id}}).then( ()=> {return true}).catch(()=>{return false})
}