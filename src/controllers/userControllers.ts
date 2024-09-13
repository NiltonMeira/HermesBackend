import { Request, Response} from "express"
import { creationUserService, getAllUsersService } from "../services/userServices"
import { json } from "body-parser"

export const creationUserController = async (req: Request, res: Response) => {
    const service = await creationUserService(req.body)
    res.status(201).json(service)
}

export const getAllUsersController = async(req: Request, res: Response) => {
    const service = await getAllUsersService()
    res.status(200).json(service)
}