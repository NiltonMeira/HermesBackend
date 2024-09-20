import { Request, Response } from "express";
import { creationFamilyService, deleteFamilyService, getAllFamilysService, getFamilyByIdService, getFamilyByProductIdService, getFamilytByNameService, patchFamilyService } from "../services/familyService";

export const creationFamilyController = async (req: Request, res: Response) => {
    const service = await creationFamilyService(req.body)
    res.status(201).json(service)
}

export const getFamilyByIdController = async (req: Request, res: Response) => {
    const service = await getFamilyByIdService(req.params.id)
    res.status(200).json(service)
}

export const getFamilyController = async (req: Request, res: Response) => {
    interface smartRequest {
        param: any
        service: Function
    }

    let queries: smartRequest[] = []

    queries.push({
        "param": await req.query.productId,
        "service": getFamilyByProductIdService
    })

    queries.push({
        "param": await req.query.familyName,
        "service": getFamilytByNameService
    })

    console.log(queries);
    

    for (const element of queries) {
        console.log(element.param);
        
        if (element.param) {
            const service = await element.service(String(element.param))
            
            return res.status(200).json(service)  
        }
    }

    const service = await getAllFamilysService()
    res.status(200).json(service)
}

export const deleteFamilyController = async (req: Request, res: Response) => {
    const service = await deleteFamilyService(req.params.id)
    res.status(204).json(service)
}   

export const  patchFamilyController = async (req: Request, res: Response) => {
    const service = await patchFamilyService(req.body, req.params.id)
    res.status(200).json(service)
}