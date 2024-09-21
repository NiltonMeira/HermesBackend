import { Request, Response } from "express"
import { creationRPCService, deleteRPCService, getAllRPCService, getRPCByComponentIdService, getRPCByIdService, getRPCByRemanProductIdService, patchRPCService } from "../services/rpcService"

export const creationRPCController = async (req: Request, res: Response) => {
    const service = await creationRPCService(req.body)
    res.status(201).json(service)
}

export const getRPCByIdController = async (req: Request, res: Response) => {
    const service = await getRPCByIdService(req.params.id)
    res.status(200).json(service)
}

export const getRPCController = async (req: Request, res: Response) => {
    interface smartRequest {
        param: any
        service: Function
    }

    let queries: smartRequest[] = []

    queries.push({
        "param": await req.query.remanProductId,
        "service": getRPCByRemanProductIdService
    })

    queries.push({
        "param": await req.query.componentId,
        "service": getRPCByComponentIdService
    })

    console.log(queries);
    

    for (const element of queries) {
        console.log(element.param);
        
        if (element.param) {
            const service = await element.service(String(element.param))
            
            return res.status(200).json(service)  
        }
    }

    const service = await getAllRPCService()
    res.status(200).json(service)
}

export const deleteRPCController = async (req: Request, res: Response) => {
    const service = await deleteRPCService(req.params.id)
    res.status(204).json(service)
}

export const patchRPCController = async (req: Request, res: Response) => {
    const service = await patchRPCService(req.body, req.params.id)
    res.status(200).json(service)

}
