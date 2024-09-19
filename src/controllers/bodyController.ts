import { Request, Response } from "express"
import { creationBodyService, deleteBodyService, getAllBodiesService, getBodyByIdService, getBodyByNameService, getBodyByPartNumberService, patchBodyService } from "../services/bodyService"

export const crationBodycontroller = async (req: Request, res: Response) => {
    const service =  await creationBodyService(req.body)
    res.status(201).json(service)
}

export const getBodyByIdController = async (req: Request, res: Response) => {
    const service = await getBodyByIdService(req.params.id)
    res.status(200).json(service)
}

export const getBodiesController = async (req: Request, res: Response) => {
    const query = req.query.id

    const service = query ?
    getBodyByNameService(query as string) :
    getAllBodiesService()

    res.status(200).json(service)
}

export const getBodiesByPartNumberController = async (req: Request, res: Response) => {
    const service = getBodyByPartNumberService(req.query.partNumber as string)
    res.status(200).json(service)
}

export const deleteBodyController = async (req: Request, res: Response) => {
    const service = deleteBodyService(req.params.id)
    res.status(204).json(service)
}

export const patchBodyController = async (req: Request, res: Response) => {
    const service = patchBodyService(req.body, req.params.id)
    res.status(200).json(service)
}