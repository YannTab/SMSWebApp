import { Response,Request,NextFunction } from "express"
import { Contact } from "../../models/Contact";
import { saveContact,editContact,deleteContact, getContact, getAllContacts, getContactByUserId } from "../../services/contacts/contacts";

export const saveContactController = async (req: Request, res: Response, next:NextFunction) => {
    await saveContact(req.body);
    res.status(200).json({
        message : "contact saved successfully",
        data : await Contact.findByPk(req.body.id)
    })
    next()
}

export const getContactController = async (req: Request, res: Response,next:NextFunction) => {
    const {id} = req.params;
    const contact = await getContact(Number(id));
    res.json(contact)
    next()
}

export const getContactbyUserIdController = async (req: Request, res: Response,next:NextFunction) => {
    const {id} = req.params;
    const contactsofuser = await getContactByUserId(Number(id));
    res.json(contactsofuser)
    next()
}

export const getAllContactsController = async (req:Request, res:Response, next: NextFunction)=>{
    const contacts = await getAllContacts();
    res.json(contacts);
    next();
}

export const editContactController = async (req: Request, res: Response,next:NextFunction)=>{
    const {id} = req.params;
    await editContact(req.body, Number(id));
    res.status(200).json({
        message : "contact updated successfully",
        data : await Contact.findByPk(req.body.id)
    })
    next()
}
export const deleteContactController = async (req: Request, res: Response,next:NextFunction)=>{
    const {id} = req.params;
    const bool = await deleteContact(Number(id));
    res.json({success:bool})
    next()
}

