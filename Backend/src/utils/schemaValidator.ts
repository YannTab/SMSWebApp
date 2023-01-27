import { appErrors, AppError } from "../apperrors";
import logger from "../logger";

export interface Schema {
    [key: string]: {
        type: string,
        required: boolean
    }
}

export const schemaValidator = {
    // Validate data against a schema
    validate<T extends {[key: string]: any}>(data: T, schema: Schema) {
        const returnValue: {data: T, errors: AppError[]} = {
            data: {} as T,
            errors: []
        };

        const returnData: any = {};
        for (let key in schema) {
            if (schema[key].required) {
                if (data[key] == null) {
                    returnValue.errors.push(appErrors.user.required.parse(key));
                    continue;
                }
            }

            if (typeof data[key] !== schema[key].type &&
                data[key] != null    
            ) {
                returnValue.errors.push(appErrors.user.type_error.parse(key, schema[key].type));
                continue;
            }
            returnData[key] = data[key];
        }

        returnValue.data = returnData;
        return returnValue;
    }
}