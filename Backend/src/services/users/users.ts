import { User } from "../../models/User"

export const saveUser = async (user: any) => {
  const createdUser = await User.create(user);
  console.log(createdUser.firstName + ' has been created')
  return createdUser;
}
export const getUser = async (id: number) => {
  const user = await User.findByPk(id);
  return user;
}

export const getAllUsers = async () => {
  const users = await User.findAll();
  console.log("user: " + users)
  return users;
}

export const findUser = async (searchParams: any) => {
  return await User.findOne({where: searchParams});
}

export const editUser = async (user: any, id: number) => {
  const updatedInfo = await User.update(user, {
    where: { id: id }
  });
  console.log('user has been updated');
  return updatedInfo;
}
/*export const updateUser =async (user:any,id:string) => {
    let change = User.findOne({where : {id :id}})
    
    await User.create(user).then(user=> console.log(user.firstName+'has been updated'))
    return user;    
  }
  */
export const deleteUser = async (id: number) => {
  return await User.destroy({ where: { id: id } });
}