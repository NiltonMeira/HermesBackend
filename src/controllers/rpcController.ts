import { Request, Response } from "express"
import { getAllRemanProductBodyService, getRemanProductBodyByIdService, getRPBByBodyIdService, getRPBByRemanProductIdService, patchRemanProductBodyService } from "../services/rpbService"
import { creationRPBController } from "./rpbController"
import { creationRPCService, deleteRPCService, getRPCByComponentIdService, getRPCByIdService, getRPCByRemanProductIdService, patchRPCService } from "../services/rpcService"

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

export const deleteRPCController = async (req: Request, res: Response) => {
    const service = await deleteRPCService(req.params.id)
    res.status(204).json(service)
}

export const patchRPCController = async (req: Request, res: Response) => {
    const service = await patchRPCService(req.body, req.params.id)
    res.status(200).json(service)

}
