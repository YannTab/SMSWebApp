export class AppError {
    statusCode?: number;
    code: number;
    message: string;
    constructor({code, message, statusCode}: {code: number, message: string, statusCode?: number}) {
        this.code = code;
        this.message = message;
        this.statusCode = statusCode;
    }
    parse(...args: string[]) {
        let newMessage = this.message;
        for (const arg of args) {
            newMessage = newMessage.replace(/\{\{\S+?\}\}/, arg);
        }
        return new AppError({
            statusCode: this.statusCode,
            code: this.code,
            message: newMessage
        });
    }
}

export const appErrors = {
    general: {
        unknown_error: new AppError({
            code: 1100,
            message: "There was an error processing your request. Please refresh and try again"
        })
    },
    user: {
        required: new AppError({
            code: 1200,
            message: "The field {{field}} is required"
        }),
        type_error: new AppError({
            code: 1201,
            message: "The field {{field}} must be of type {{type}}"
        }),
        invalid_credentials: new AppError({
            code: 1202,
            message: "Your credentials are incorrect"
        })
    },
    auth: {
        unauthorized: new AppError({
            code: 1300,
            statusCode: 401,
            message: "You are not authorized to access this resource"
        }),
        expired_token: new AppError({
            code: 1301,
            statusCode: 401,
            message: "Your token is expired. Please login"
        })
    },
    contact: {
        not_found: new AppError({
            code: 1400,
            statusCode: 404,
            message: "Contact not found"
        })
    }
};