import { NextFunction, Request, Response } from "express";
import AppError from "../appError";

export const validateOperator = async (req: Request, res: Response, next: NextFunction) => {
    if( Number(res.locals.role) > 3)
        throw new AppError("You don't have permission for that", 403)

    console.log("User authorized");
    
    next()
}