import { Request, Response} from "express"
import { creationUserService } from "../services/userServices"
import { json } from "body-parser"

export const creationUserController = async (req: Request, res: Response) => {
    const service = await creationUserService(req.body)
    res.status(201).json(service)
}