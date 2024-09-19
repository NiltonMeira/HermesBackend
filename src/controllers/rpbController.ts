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
    interface smartRequest {
        param: string,
        service: Function
    }

    let queries: smartRequest[] = []

    queries.push({
        "param": String(req.query.bodyId),
        "service": getRPBByBodyIdService
    })

    queries.push({
        "param": String(req.query.remanProductId),
        "service": getRPBByRemanProductIdService
    })

    queries.forEach(element =>{
        if((element.param)) return element.service(element.param)

    })

    return getAllRemanProductBodyService()
}

export const deleteRPBComponent = async (req: Request, res: Response) => {
    const service = await deleteRemanProductBodyService(req.params.id)
    res.status(204).json(service)
}

export const patchRPBComponent = async (req: Request, res: Response) => {
    const service = await patchRemanProductBodyService(req.body, req.params.id)
    res.status(200).json(service)

}

