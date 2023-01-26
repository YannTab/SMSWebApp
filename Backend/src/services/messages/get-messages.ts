import { Contact } from "../../models/Contact"
import { Message } from "../../models/Message"

export const getMessagebyContactId = async(contactId:number) => {
    const contactMessages = await Message.findAll(
        {where:{ContactId:contactId}}
    )
    return contactMessages
}