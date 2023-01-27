import { Contact } from "../../models/Contact"
import { Message } from "../../models/Message"

export const getMessagebyContactId = async (id: number) => {
    const contactMessages = await Message.findAll(
        { where: { ContactId: id } }
    )
    return contactMessages
}

export const getMessages = (searchParams: any) => {
    // return Messages.find({where: searchParams});
}