import { Request, Response } from "express"
import { creationQueueService, deleteQueueService, getAllQueuesService, getQueueByBussinesModel, getQueueByIdService, getQueueByNameService, getQueueByPartNumberService, patchQueueService } from "../services/queueService"

export const creationQueueController = async (req: Request, res: Response) => {
    const service = await creationQueueService(req.body)
    res.status(201).json(service)
}

export const getQueueByIdController = async (req: Request, res: Response) => {
    const service = await getQueueByIdService(req.params.id)
    res.status(200).json(service)
}

export const getQueueController = async (req: Request, res: Response) => {
    interface smartRequest {
        param: any
        service: Function
    }

    let queries: smartRequest[] = []

    queries.push({
        "param": await req.query.partNumber,
        "service": getQueueByPartNumberService
    })

    queries.push({
        "param": await req.query.queueName,
        "service": getQueueByNameService
    })

    queries.push({
        "param": await req.query.bussinesModelId,
        "service": getQueueByBussinesModel
    })

    console.log(queries);
    

    for (const element of queries) {
        console.log(element.param);
        
        if (element.param) {
            const service = await element.service(String(element.param))
            
            return res.status(200).json(service)  
        }
    }

    const service = await getAllQueuesService()
    res.status(200).json(service)
}

export const deleteQueueController = async (req: Request, res: Response) => {
    const service = await deleteQueueService(req.params.id)
    res.status(204).json(service)
}

export const patchQueueController = async (req: Request, res: Response) => {
    const service = await patchQueueService(req.body, req.params.id)
    res.status(200).json(service)

}