import AppError from "../appError"
import { Body } from "../models/bodyModel"
import { RemanProductBody } from "../models/remanProductBodyModel"
import { TBodyCreation } from "../types/bodyType"
import { TRemanProductBodyCreation, TRemanProductBodyUpdate } from "../types/remanProductBodyType"
import { tUserCreation } from "../types/userTypes"

export const creationRemanProductBodyService = async (payload: TRemanProductBodyCreation) => {
    const newRPB = new RemanProductBody(payload)
    console.log(newRPB)
    return await newRPB.save()
}

export const getRemanProductBodyByIdService = async (id: string) => {
    const newRPB = await RemanProductBody.findById(id)

    if(!newRPB) throw new AppError("RemanProductBodyService not found", 404)
    
    console.log(newRPB)
    return newRPB
}

export const getAllRemanProductBodyService = async () => {
    const newRPB = await RemanProductBody.find()

    console.log(newRPB);
    
    return await newRPB
}

export const getRemanProductBodyByNameService = async (name: string) => {
    const newRPB = await RemanProductBody.find(
        { "name": { "$regex": name, "$options": "i" } }
    )

    console.log(newRPB)

    return newRPB
}

export const getRemanProductBodyByPartNumberService = async (partNumber: string) => {
    const newRPB = await RemanProductBody.find(
        {"partNumber": {"$regex": partNumber, "$options": "i"}}
    )

    console.log(newRPB);

    return newRPB
}

export const deleteRemanProductBodyService = async (id: string) => {
    const newRPB = await RemanProductBody.findById(id)

    
    if(!newRPB) throw new AppError("RemanProductBodyService not found", 404)

    console.log(newRPB + "deleted");
    
    await newRPB.deleteOne()
}

export const patchRemanProductBodyService = async (payload: TRemanProductBodyUpdate, id: string) => {
    const newRPB = await RemanProductBody.findById(id)

    
    if(!newRPB) throw new AppError("RemanProductBodyService not found", 404)

        newRPB.set(payload)

    console.log(newRPB);
    return newRPB
}