import { NextFunction, Request, Response } from "express";
import AppError from "../appError";

export const handleError = async (error: Error, req: Request, res: Response, next: NextFunction) => {
    if(error instanceof AppError){
    return res.status(error.statusCode).json({message: error.message})
        
    }
    console.log(error);
    
    return res.status(500).json({message: "Internal server error"})
    
}