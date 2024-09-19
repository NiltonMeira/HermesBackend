import { Request, Response } from "express"
import { creationRemanProductBodyService, deleteRemanProductBodyService, getAllRemanProductBodyService, getRemanProductBodyByIdService, getRPBByBodyIdService, getRPBByRemanProductIdService, patchRemanProductBodyService } from "../services/remanProductBodyService"

export const creationRPBController = async (req: Request, res: Response) => {
    const service = await creationRemanProductBodyService(req.body)
    res.status(201).json(service)
}

export const getRPBByIdController = async (req: Request, res: Response) => {
    const service = await getRemanProductBodyByIdService(req.params.id)
    res.status(200).json(service)
}

export const getAllRPBController = async (req: Request, res: Response) => {
    const service = await getAllRemanProductBodyService()
    res.status(200).json(service)
}

export const getRPBByBodyIdController = async (req: Request, res: Response) => {
    const service = await getRPBByBodyIdService(req.params.id)
    res.status(200).json(service)
}

export const getRPBByRemanProductIdController = async (req: Request, res: Response) => {
    const service = await getRPBByRemanProductIdService(req.params.id)
    res.status(200).json(service)
}

export const deleteRPBComponent = async (req: Request, res: Response) => {
    const service = await deleteRemanProductBodyService(req.params.id)
    res.status(204).json(service)
}

export const patchRPBComponent = async (req: Request, res: Response) => {
    const service = await patchRemanProductBodyService(req.body, req.params.id)
    res.status(200).json(service)

}

