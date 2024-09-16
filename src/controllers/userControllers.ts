import { Request, Response} from "express"
import { creationUserService, deleteUserService, getAllUsersService, getUserByIDService, getUserbyNameService, patchUserService } from "../services/userServices"

export const creationUserController = async (req: Request, res: Response) => {
    const service = await creationUserService(req.body)
    res.status(201).json(service)
}

export const getUserByIdController = async (req: Request, res: Response) => {
    
    const service = await getUserByIDService(req.params.id)
    res.status(200).json(service)
    
}

export const getUsersController = async (req: Request, res: Response) => {
    const query = req.query.userName

    const service = query ?
    await getUserbyNameService(String(query)) :
    await getAllUsersService()

    res.status(200).json(service)
}

export const deleteUserController = async (req: Request, res: Response) => {
    const service = await deleteUserService(req.params.id)
    res.status(204).json(service)
}

export const patchUserController = async (req: Request, res: Response) => {
    const service = await patchUserService(req.body, req.params.id)
    res.status(200).json(service)
}
