import AppError from "../appError"
import { RemanProductBody } from "../models/remanProductBodyModel"
import { TRemanProductBodyCreation, TRemanProductBodyUpdate } from "../types/remanProductBodyType"

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

export const getRPBByRemanProductIdService = async (remanProductId: string) => {
    const newRPB = await RemanProductBody.find(
        {"remanProductId": {"$regex": remanProductId, "$options": "i"}}
    )

    console.log(newRPB);

    return newRPB
}

export const getRPBByBodyIdService = async (bodyId: string) => {
    const newRPB = await RemanProductBody.find(
        {"bodyId": {"$regex": bodyId, "$options": "i"}}
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