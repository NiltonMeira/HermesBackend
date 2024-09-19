import { Request, Response } from "express"
import { creationRemanProductBodyService, deleteRemanProductBodyService, getAllRemanProductBodyService, getRemanProductBodyByIdService, getRPBByBodyIdService, getRPBByRemanProductIdService, patchRemanProductBodyService } from "../services/remanProductBodyService"
import { creationRPBController } from "./rpbController"
import { creationRPCService, deleteRPCService, getRPCByComponentIdService, getRPCByIdService, getRPCByRemanProductIdService, patchRPCService } from "../services/remanProductComponentService"

export const creationRPCController = async (req: Request, res: Response) => {
    const service = await creationRPCService(req.body)
    res.status(201).json(service)
}

export const getRPCByIdController = async (req: Request, res: Response) => {
    const service = await getRPCByIdService(req.params.id)
    res.status(200).json(service)
}

export const getAllRPCController = async (req: Request, res: Response) => {
    interface smartRequest {
        param: string,
        service: Function
    }

    let queries: smartRequest[] = []

    queries.push({
        "param": String(await req.query.compoenentIdId),
        "service": getRPCByComponentIdService
    })

    queries.push({
        "param": String(await req.query.remanProductId),
        "service": getRPCByRemanProductIdService
    })

    queries.forEach(element =>{
        if((element.param)) return element.service(element.param)

    })

    return getAllRemanProductBodyService()
}

export const deleteRPCComponent = async (req: Request, res: Response) => {
    const service = await deleteRPCService(req.params.id)
    res.status(204).json(service)
}

export const patchRPBComponent = async (req: Request, res: Response) => {
    const service = await patchRPCService(req.body, req.params.id)
    res.status(200).json(service)

}
