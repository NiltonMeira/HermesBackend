import { NextFunction, Request, Response } from "express";
import AppError from "../appError";

export const validateOwnUser = async (req: Request, res: Response, next: NextFunction) => {
    if(res.locals.userId != req.params.userId && Number(res.locals.role) != 1)
        throw new AppError("You don't have permission for that", 403)
    next()
}