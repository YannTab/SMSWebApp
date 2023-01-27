import { Response, NextFunction } from "express"
import { Contact } from "../../models/Contact";
import { saveContact, editContact, deleteContact, getContact, getAllContacts } from "../../services/contacts/contacts";
import { ContactCreateSchema, ContactUpdateSchema } from "../../schemas/Contact";
import { schemaValidator } from "../../utils/schemaValidator";

import { Request } from "../../custom-types";
import { appErrors } from "../../apperrors";

export const saveContactController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { data, errors } = schemaValidator.validate({
            ...req.body,
            UserId: req.customData!.user.id!
        } as Contact, ContactCreateSchema);

        if (errors.length > 0) {
            throw errors;
        }

        const savedContact = await saveContact(data);
        res.status(201).json({
            success: true,
            message: "Contact saved successfully",
            data: {
                contact: savedContact
            }
        });
    } catch (error) {
        next(error);
    }
}

export const getContactController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const contact = await getContact({ id: Number(id), UserId: req.customData!.user.id! });

        if (contact == null) {
            throw [appErrors.contact.not_found]
        }
        res.status(200).json({
            success: true,
            message: "Contact fetched successfully",
            data: {
                contact
            }
        });
    } catch (error) {
        next(error);
    }
}

// export const getContactbyUserIdController = async (req: Request, res: Response, next: NextFunction) => {
//     const { id } = req.params;
//     const contactsofuser = await getContact({id: Number(id));
//     res.json(contactsofuser)
//     next()
// }

export const getAllContactsController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const contacts = await getAllContacts({ UserId: req.customData!.user.id! });

        res.status(200).json({
            success: true,
            message: "Contacts fetched successfully",
            data: {
                contacts
            }
        });
    } catch (error) {
        next(error);
    }
}

export const editContactController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { data, errors } = schemaValidator.validate(req.body, ContactUpdateSchema);
        if (errors.length > 0) {
            throw errors;
        }

        const updated_count = await editContact(data, { id: Number(id), UserId: req.customData!.user.id! });
        if (!updated_count?.[0]) {
            throw [appErrors.contact.not_found]
        }
        res.status(200).json({
            success: true,
            message: "Contact(s) updated successfully",
            data: {
                updated_count: updated_count?.[0] || 0,
                contact: await getContact({ id: Number(id), UserId: req.customData!.user.id! })
            }
        });
    } catch (error) {
        next(error);
    }
}

export const deleteContactController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const deleted_count = await deleteContact({ id: Number(id), UserId: req.customData!.user.id! });

        if (!deleted_count) {
            throw [appErrors.contact.not_found]
        }

        res.status(200).json({
            success: true,
            message: "Contact(s) deleted successfully",
            data: {
                deleted_count
            }
        });
    } catch (error) {
        next(error);
    }
}

