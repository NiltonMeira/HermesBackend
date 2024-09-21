import { Request, Response } from "express"
import { creationBussinesModelService, deleteBussinesModelService, getAllBussinesModelService, getBussinesModelByCustumerService, getBussinesModelByIdService, getBussinesModelByNameService, patchBussinesModelService } from "../services/bussinesModelService"

export const creationBussinesModelController = async (req: Request , res: Response) => {
    const service = await creationBussinesModelService(req.body)
    res.status(201).json(service)
}

export const getBMByIdController = async (req: Request, res: Response) => {
    const service = await getBussinesModelByIdService(req.params.id)
    res.status(200).json(service)
}

export const getBMController = async (req: Request, res: Response) => {
    interface smartRequest {
        param: any
        service: Function
    }

    let queries: smartRequest[] = []

    queries.push({
        "param": await req.query.bussinesModelName,
        "service": getBussinesModelByNameService
    })

    queries.push({
        "param": await req.query.custumer,
        "service": getBussinesModelByCustumerService
    })

    console.log(queries);
    

    for (const element of queries) {
        console.log(element.param);
        
        if (element.param) {
            const service = await element.service(String(element.param))
            
            return res.status(200).json(service)  
        }
    }

    const service = await getAllBussinesModelService()
    res.status(200).json(service)
}

export const deleteBMController = async (req: Request, res: Response) => {
    const service = await deleteBussinesModelService(req.params.id)
    res.status(204).json(service)
}

export const patchBMController = async (req: Request, res: Response) => {
    const service = await patchBussinesModelService(req.body, req.params.id)
    res.status(200).json(service)

}
