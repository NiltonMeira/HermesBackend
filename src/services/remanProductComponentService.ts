import AppError from "../appError"
import { RemanProductComponent } from "../models/remanProductComponentModel"
import { TRemanProductComponentCreation, TRemanProductComponentUpdate } from "../types/remanProductComponentType"

export const creationRemanProductComponent = async (payload: TRemanProductComponentCreation) => {
    const newRPB = new RemanProductComponent(payload)
    console.log(newRPB)
    return await newRPB.save()
}

export const getRemanProductComponentByIdService = async (id: string) => {
    const newRPB = await RemanProductComponent.findById(id)

    if (!newRPB) throw new AppError("RemanProductCompoenntService not found", 404)

    console.log(newRPB)
    return newRPB
}

export const getAllRemanProductsComponents = async () => {
    const newRPB = await RemanProductComponent.find()

    console.log(newRPB);

    return await newRPB
}

export const getRemanProductCompoentByNameService = async (name: string) => {
    const newRPB = await RemanProductComponent.find(
        { "name": { "$regex": name, "$options": "i" } }
    )

    console.log(newRPB)

    return newRPB
}

export const getRemanProducComponentByPartNumberService = async (partNumber: string) => {
    const newRPB = await RemanProductComponent.find(
        { "partNumber": { "$regex": partNumber, "$options": "i" } }
    )

    console.log(newRPB);

    return newRPB
}


export const deleteRemanProductComponentService = async (id: string) => {
    const newRPB = await RemanProductComponent.findById(id)


    if (!newRPB) throw new AppError("RemanProductCompoenntService not found", 404)


    console.log(newRPB + "deleted");

    await newRPB.deleteOne()
}

export const patchRemanProductComponentService = async (payload: TRemanProductComponentUpdate, id: string) => {
    const newRPB = await RemanProductComponent.findById(id)

    
    if (!newRPB) throw new AppError("RemanProductCompoenntService not found", 404)

    newRPB.set(payload)

    console.log(newRPB);
    return newRPB
}