import { getComponentByIdService, getComponentByNameService } from './../services/componentService';
import { Request, Response } from "express";
import { creationComponentService, getAllComponentsService } from "../services/componentService";
import AppError from '../appError';

export const creationComponentController = async (req: Request, res: Response) => {
    const service = await creationComponentService(req.body)
    res.status(201).json(service)
}

export const getComponentById = async(req: Request, res: Response) => {
    const service = getComponentByIdService(req.params.id)
    res.status(200).json(service)
}

export const getComponentsController = async (req: Request, res: Response) => {
    const query = await req.query.getComponentByNameService

    const service = query ?
    getComponentByNameService(query as string) :
    getAllComponentsService()

}