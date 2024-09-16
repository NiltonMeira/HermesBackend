import { NextFunction, Request, Response } from "express";
import AppError from "../appError";
import { verify } from "jsonwebtoken";

export const validateToken = async (req: Request, res: Response, next: NextFunction) => {
    const auth = req.headers.authorization

    if(!auth) throw new AppError("Missing bearer token", 401)

    const [_, token] = auth.split(" ")

    verify(token, "wN51=4vrO4j;1wjl6pQSXh=I&9k&6Zz4YtqG9,1M=03TI,dD", (error: any, decoded: any) => {
        if(error) throw new AppError(error.message, 401)

        res.locals.userId = decoded.sub //send this value in the middleware
        res.locals.email = decoded.email
        res.locals.role = decoded.role
    }) 

    next()
}