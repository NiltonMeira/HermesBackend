import { Request, Response } from "express";
import { creationCoreService, deleteCoreService, getAllCoreServices, getCoreByFamilyIdService, getCoreByIdService, getCoreByNameService, patchCoreService } from "../services/coreService";

export const creationCoreController = async (req: Request, res: Response) => {
    const service = await creationCoreService(req.body)
    res.status(201).json(service)
}

export const getCoreByIdController = async (req: Request, res: Response) => {
    const service = await getCoreByIdService(req.params.id)
    res.status(200).json(service)
}

export const getCoresController = async (req: Request, res: Response) => {
    interface smartRequest {
        param: any
        service: Function
    }

    let queries: smartRequest[] = []

    queries.push({
        "param": await req.query.familyIdId,
        "service": getCoreByFamilyIdService
    })

    queries.push({
        "param": await req.query.coreName,
        "service": getCoreByNameService
    })

    console.log(queries);
    

    for (const element of queries) {
        console.log(element.param);
        
        if (element.param) {
            const service = await element.service(String(element.param))
            
            return res.status(200).json(service)  
        }
    }

    const service = await getAllCoreServices()
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