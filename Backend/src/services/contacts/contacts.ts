import { Contact } from "../../models/Contact"

export const saveContact = async (contact: any) => {
  const savedContact = await Contact.create(contact);
  console.log(contact.firstName + ' has been created');
  return saveContact;
}
export const getContact = async (searchParam: any) => {
  const contact = await Contact.findOne({ where: searchParam });
  return contact;
}

export const getAllContacts = async (searchParams: any) => {
  const contacts = Contact.findAll({where: searchParams});
  return contacts;
}

export const editContact = async (contact: Contact, searchParam: any) => {
  const updateInfo = await Contact.update(contact, {
    where: searchParam
  })
  console.log('contact has been updated');
  return updateInfo;
}
/*export const updateContact =async (contact:any,id:string) => {
    let change = Contact.findOne({where : {id :id}})
    
    await Contact.create(contact).then(contact=> console.log(contact.firstName+'has been updated'))
    return contact;    
  }
  */
export const deleteContact = async (searchParam: any) => {
  return await Contact.destroy({ where: searchParam });
}