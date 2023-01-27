import { Schema } from "../utils/schemaValidator";

export const UserCreateSchema: Schema = {
    firstName: {
        type: "string",
        required: true,
    },
    lastName: {
        type: "string",
        required: true
    },
    password: {
        type: "string",
        required: true,
    },
    phoneNumber: {
        type: "string",
        required: true,
    },
    email: {
        type: "string",
        required: true,
    },
    address: {
        type: "string",
        required: false,
    }
};

export const UserUpdateSchema: Schema = {
    firstName: {
        type: "string",
        required: false,
    },
    lastName: {
        type: "string",
        required: false
    },
    address: {
        type: "string",
        required: false,
    }
};

export const UserGetTokenSchema: Schema = {
    password: {
        type: "string",
        required: true
    },
    phoneNumber: {
        type: "string",
        required: true
    }
}