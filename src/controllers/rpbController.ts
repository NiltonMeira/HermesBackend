import { Request, Response } from "express"
import { deleteRemanProductBodyService, getAllRemanProductBodyService, getRemanProductBodyByIdService, getRPBByBodyIdService, getRPBByRemanProductIdService, patchRemanProductBodyService } from "../services/rpbService"

export const creationRPBController = async (req: Request, res: Response) => {
    const service = await (req.body)
    res.status(201).json(service)
}

export const getRPBByIdController = async (req: Request, res: Response) => {
    const service = await getRemanProductBodyByIdService(req.params.id)
    res.status(200).json(service)
}

export const getAllRPBController = async (req: Request, res: Response) => {
    interface smartRequest {
        param: any
        service: Function
    }

    let queries: smartRequest[] = []

    queries.push({
        "param": await req.query.remanProductId,
        "service": getRPBByRemanProductIdService
    })

    queries.push({
        "param": await req.query.bodyId,
        "service": getRPBByBodyIdService
    })

    console.log(queries);
    

    for (const element of queries) {
        console.log(element.param);
        
        if (element.param) {
            const service = await element.service(String(element.param))
            
            return res.status(200).json(service)  
        }
    }

    const service = await getAllRemanProductBodyService()
    res.status(200).json(service)
}

export const deleteRPBController = async (req: Request, res: Response) => {
    const service = await deleteRemanProductBodyService(req.params.id)
    res.status(204).json(service)
}

export const patchRPBController = async (req: Request, res: Response) => {
    const service = await patchRemanProductBodyService(req.body, req.params.id)
    res.status(200).json(service)

}

