import { Request, Response } from "express";
import { creationProductService, deleteProductService, getAllProductsService, getProductByIdService, getProductByName, patchProductService } from "../services/pruductService";

export const creationProductController = async (req: Request, res: Response) => {
    const service = await creationProductService(req.body)
    res.status(201).json(service)
}

export const getProductsByIdController = async (req: Request, res: Response) => {
    const service = await getProductByIdService(req.params.id)
    res.status(200).json(service)
}

export const getProductsController = async (req: Request, res: Response) => {
    const query = await req.query.productName

    const service = query ?
    await getProductByName(String(query)) :
    await getAllProductsService()

    res.status(200).json(service)
}

export const deleteProductsController = async (req: Request, res: Response) => {
    const service = await deleteProductService(req.params.id)
    res.status(204).json(service)

}

export const patchProductController = async (req: Request, res: Response) => {
    const service = await patchProductService(req.body, req.params.id)
    res.status(200).json(service)
}