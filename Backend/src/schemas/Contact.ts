import { Schema } from "../utils/schemaValidator";

export const ContactCreateSchema: Schema = {
    firstName: {
        type: "string",
        required: true,
    },
    lastName: {
        type: "string",
        required: false
    },
    tel: {
        type: "string",
        required: true,
    },
    email: {
        type: "string",
        required: false,
    },
    UserId: {
        type: "number",
        required: true
    }
};

export const ContactUpdateSchema: Schema = {
    firstName: {
        type: "string",
        required: false,
    },
    lastName: {
        type: "string",
        required: false
    },
    tel: {
        type: "string",
        required: false,
    },
    email: {
        type: "string",
        required: false,
    }
};