import { Request, Response } from "express";
import { creationFamilyService, deleteFamilyService, getAllFamilysService, getFamilyByIdService, getFamilytByNameService, patchFamilyService } from "../services/familyService";

export const creationFamilyController = async (req: Request, res: Response) => {
    const service = await creationFamilyService(req.body)
    res.status(201).json(service)
}

export const getFamilyByIdController = async (req: Request, res: Response) => {
    const service = await getFamilyByIdService(req.params.id)
    res.status(200).json(service)
}

export const getFamilyController = async (req: Request, res: Response) => {
    const query = await req.query.familyId

    const service = query ?
    await getFamilytByNameService(String(query)) :
    await getAllFamilysService()

    res.status(200).json(service)
}

export const deleteFamilyController = async (req: Request, res: Response) => {
    const service = await deleteFamilyService(req.params.id)
    res.status(204).json(service)
}   

export const  patchFamilyController = async (req: Request, res: Response) => {
    const service = await patchFamilyService(req.body, req.params.id)
    res.status(200).json(service)
}