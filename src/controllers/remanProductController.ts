import { Request, Response } from "express";
import { creationRemanProductsService, deleteRemanProductService, getAllRemanProductServices, getRemanProductByCoreIdService, getRemanProductByIdService, getRemanProductByNameService, patchRemanProductService } from "../services/remanproductService";

export const creationRemanProductController = async (req: Request, res: Response) => {
    const service = await creationRemanProductsService(req.body)
    res.status(201).json(service)
}

export const getRemanProductController = async (req: Request, res: Response) => {
    interface smartRequest {
        param: any
        service: Function
    }

    let queries: smartRequest[] = []

    queries.push({
        "param": await req.query.coreId,
        "service": getRemanProductByCoreIdService
    })

    queries.push({
        "param": await req.query.remanName,
        "service": getRemanProductByNameService
    })

    console.log(queries);
    

    for (const element of queries) {
        console.log(element.param);
        
        if (element.param) {
            const service = await element.service(String(element.param))
            
            return res.status(200).json(service)  
        }
    }

    const service = await getAllRemanProductServices()
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