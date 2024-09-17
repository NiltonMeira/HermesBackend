import { Request, Response } from "express";
import { creationCoreService, deleteCoreService, getAllCoreServices, getCoreByIdService, getCoreByNameService, patchCoreService } from "../services/coreService";

export const creationCoreController = async (req: Request, res: Response) => {
    const service = await creationCoreService(req.body)
    res.status(201).json(service)
}

export const getCoreByIdController = async (req: Request, res: Response) => {
    const service = await getCoreByIdService(req.params.id)
    res.status(200).json(service)
}

export const getCoresController = async (req: Request, res: Response) => {
    const query = await req.query.nameId

    const service = query ?
    getCoreByNameService(query as string):
    getAllCoreServices()

    res.status(200).json(service)
}

export const deleteCoreController = async (req: Request, res: Response) => {
    const service = await deleteCoreService(req.params.id)
    res.status(204).json(service)
}

export const patchCoreController = async (req: Request, res: Response) => {
    const service = await patchCoreService(req.body, req.params.id)
    res.status(200).json(service)

}