import { deleteComponentService, getComponentByIdService, getComponentByNameService, getComponentsByPartNumberService, patchComponentService } from './../services/componentService';
import { Request, Response } from "express";
import { creationComponentService, getAllComponentsService } from "../services/componentService";

export const creationComponentController = async (req: Request, res: Response) => {
    const service = await creationComponentService(req.body)
    res.status(201).json(service)
}

export const getComponentById = async(req: Request, res: Response) => {
    const service = getComponentByIdService(req.params.id)
    res.status(200).json(service)
}

export const getComponentsController = async (req: Request, res: Response) => {
    const query = await req.query.componentName

    const service = query ?
    getComponentByNameService(query as string) :
    getAllComponentsService()

    res.status(200).json(service)
}

export const getPartNumberController = async (req: Request, res: Response) => {
    const service = await getComponentsByPartNumberService(req.params.id)
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