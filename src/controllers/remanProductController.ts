import { Request, Response } from "express";
import { creationRemanProductsService, deleteRemanProductService, getAllRemanProductServices, getRemanProductByIdService, getRemanProductByNameService, patchRemanProductService } from "../services/remanproductService";

export const creationRemanProductController = async (req: Request, res: Response) => {
    const service = await creationRemanProductsService(req.body)
    res.status(201).json(service)
}

export const getRemanProductController = async (req: Request, res: Response) => {
    const query = req.query.remanproductName

    const service = query ?
    getRemanProductByNameService(query as string) :
    getAllRemanProductServices()

    res.status(200).json(service)

}

export const getRemanProductByIdController = async (req: Request, res: Response) => {
    const service = await getRemanProductByIdService(req.params.id)
    res.status(200).json(service)
}

export const deleteRemanProductController = async (req: Request, res: Response) => {
    const service = await deleteRemanProductService(req.params.id)
    res.status(204).json(service)
}

export const patchRemanProductController = async (req: Request, res: Response) => {
    const service = await patchRemanProductService(req.body, req.params.id)
    res.status(200).json(service)
}