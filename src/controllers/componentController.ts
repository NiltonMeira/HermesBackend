import { deleteComponentService, getComponentByIdService, getComponentByNameService, getComponentsByPartNumberService, patchComponentService } from './../services/componentService';
import { Request, Response } from "express";
import { creationComponentService, getAllComponentsService } from "../services/componentService";

export const creationComponentController = async (req: Request, res: Response) => {
    const service = await creationComponentService(req.body)
    res.status(201).json(service)
}

export const getComponentByIdController = async(req: Request, res: Response) => {
    const service = await getComponentByIdService(req.params.id)
    res.status(200).json(service)
}

export const getComponentsController = async (req: Request, res: Response) => {
    interface smartRequest {
        param: any
        service: Function
    }

    let queries: smartRequest[] = []
    
    queries.push({
        "param": await req.query.componentName,
        "service": getComponentByNameService
    })

    queries.push({
        "param": await req.query.partNumber,
        "service": getComponentsByPartNumberService
    })

    console.log(queries);

    for (const element of queries) {
        console.log(element.param);
        
        if (element.param) {
            const service = await element.service(String(element.param))
            
            return res.status(200).json(service)  
        }
    }

    const service = await getAllComponentsService()
    res.status(200).json(service)
}

export const getPartNumberController = async (req: Request, res: Response) => {
    const service = await getComponentsByPartNumberService(req.params.part)
    res.status(200).json(service)
}

export const deleteComponentController = async (req: Request, res: Response) => {
    const service = await deleteComponentService(req.params.id)
    res.status(204).json(service)
}

export const patchComponentController = async (req: Request, res: Response) => {
    const service = await patchComponentService(req.body, req.params.id)
    res.status(200).json(service)
}