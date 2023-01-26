import { Contact } from "../../models/Contact"

export const saveContact = async(contact : any)=>{
    await Contact.create(contact).then(contact=> console.log(contact +' has been created'))

}
export const getContact =async (id:number) => {
  const contact = await Contact.findOne({where : {id :id}});
  return contact;    
}

export const getContactByUserId =async (id:number) => {
  const contactsofuser = await Contact.findAll({where : {UserId :id}});
  return contactsofuser;    
}

export const getAllContacts = async ()=>{
  const contacts = Contact.findAll();
  return contacts;
}

export const editContact =async (contact:any, id:number) => {
    await Contact.update({
      firstName: contact.firstName,
      lastName: contact.lastName,
      email: contact.email,
      tel: contact.tel,
    },{
      where:{id : id}
    }).then(contact => console.log( 'contact has been updated'))
        
  }
/*export const updateContact =async (contact:any,id:string) => {
    var change = Contact.findOne({where : {id :id}})
    
    await Contact.create(contact).then(contact=> console.log(contact.firstName+'has been updated'))
    return contact;    
  }
  */
export const deleteContact = async (id:number) => {
    await Contact.destroy({where : {id :id}}).then( ()=> {return true}).catch(()=>{return false})
}