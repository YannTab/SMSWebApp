import { User } from "../../models/User"

export const saveUser = async(user : any)=>{
    await User.create(user).then(user=> console.log(user.firstName+' has been created'))

}
export const getUser =async (id:number) => {
  const user = await User.findByPk(id);
  return user;    
}

export const getAllUsers = async ()=>{
  const users = User.findAll();
  console.log("user: " + users)
  return users;
}

export const editUser =async (user:any, id:number) => {
    await User.update({
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
      email: user.email,
      address: user.address,
    },{
      where:{id : id}
    }).then(user => console.log( 'user has been updated'))
        
  }
/*export const updateUser =async (user:any,id:string) => {
    var change = User.findOne({where : {id :id}})
    
    await User.create(user).then(user=> console.log(user.firstName+'has been updated'))
    return user;    
  }
  */
export const deleteUser = async (id:number) => {
    await User.destroy({where : {id :id}}).then( ()=> {return true}).catch(()=>{return false})
}