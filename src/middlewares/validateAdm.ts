import { NextFunction, Request, Response } from "express";
import AppError from "../appError";

export const validateAdm = async (req: Request, res: Response, next: NextFunction) => {
    console.log(res.locals.role);
    
    if( Number(res.locals.role) != 1)
        throw new AppError("You don't have permission for that", 403)

    console.log("User authorized");
    
    next()
}