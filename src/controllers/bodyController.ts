import { Request, Response } from "express"
import { creationBodyService, deleteBodyService, getAllBodiesService, getBodyByIdService, getBodyByNameService, getBodyByPartNumberService, getBodyByRPIdService, patchBodyService } from "../services/bodyService"

export const creationBodycontroller = async (req: Request, res: Response) => {
    const service =  await creationBodyService(req.body)
    res.status(201).json(service)
}

export const getBodyByIdController = async (req: Request, res: Response) => {
    const service = await getBodyByIdService(req.params.id)
    res.status(200).json(service)
}

export const getBodiesController = async (req: Request, res: Response) => {
    interface smartRequest {
        param: any
        service: Function
    }

    let queries: smartRequest[] = []

    queries.push({
        "param": await req.query.remanProductId,
        "service": getBodyByRPIdService
    })

    queries.push({
        "param": await req.query.bodyName,
        "service": getBodyByNameService
    })

    queries.push({
        "param": await req.query.partNumber,
        "service": getBodyByPartNumberService
    })

    console.log(queries);
    

    for (const element of queries) {
        console.log(element.param);
        
        if (element.param) {
            const service = await element.service(String(element.param))
            
            return res.status(200).json(service)  
        }
    }
}

export const deleteBodyController = async (req: Request, res: Response) => {
    const service = deleteBodyService(req.params.id)
    res.status(204).json(service)
}

export const patchBodyController = async (req: Request, res: Response) => {
    const service = patchBodyService(req.body, req.params.id)
    res.status(200).json(service)
}