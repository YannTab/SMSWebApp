import { Response,Request,NextFunction } from "express";
import { appErrors } from "../apperrors";
import { config } from "../config/default";
import logger from "../logger";

export const mainErorHandler = async (errs: any, req: Request, res: Response, next:NextFunction) => {
    if (Array.isArray(errs)) {
        res.status(400).json({
            success: false,
            errors: errs
        })
    } else {
        if (config.get("envMode") !== 'production') {
            logger.error(errs);
        }
        res.status(500).json({
            success: false,
            errors: [appErrors.general.unknown_error]
        });
    }
}