import AppError from "../appError"
import { RemanProductComponent } from "../models/remanProductComponentModel"
import { TRemanProductComponentCreation, TRemanProductComponentUpdate } from "../types/remanProductComponentType"

export const creationRemanProductComponent = async (payload: TRemanProductComponentCreation) => {
    const newRPC = new RemanProductComponent(payload)
    console.log(newRPC)
    return await newRPC.save()
}

export const getRemanProductComponentByIdService = async (id: string) => {
    const newRPC = await RemanProductComponent.findById(id)

    if (!newRPC) throw new AppError("RemanProductCompoenntService not found", 404)

    console.log(newRPC)
    return newRPC
}

export const getAllRemanProductsComponents = async () => {
    const newRPC = await RemanProductComponent.find()

    console.log(newRPC);

    return await newRPC
}

export const getRemanProductCompoentByNameService = async (name: string) => {
    const newRPC = await RemanProductComponent.find(
        { "name": { "$regex": name, "$options": "i" } }
    )

    console.log(newRPC)

    return newRPC
}

export const getRPCByComponentIdService = async (componentId: string) => {
    const newRPC = await RemanProductComponent.find(
        { "compoenentId": { "$regex": componentId, "$options": "i" } }
    )

    console.log(newRPC);

    return newRPC
}

export const getRPCByRemanProductIdService = async (remanProductId: string) => {
    const newRPC = await RemanProductComponent.find(
        { "remanProductId": { "$regex": remanProductId, "$options": "i" } }
    )

    console.log(newRPC);

    return newRPC
}


export const deleteRemanProductComponentService = async (id: string) => {
    const newRPC = await RemanProductComponent.findById(id)


    if (!newRPC) throw new AppError("RemanProductCompoenntService not found", 404)


    console.log(newRPC + "deleted");

    await newRPC.deleteOne()
}

export const patchRemanProductComponentService = async (payload: TRemanProductComponentUpdate, id: string) => {
    const newRPC = await RemanProductComponent.findById(id)

    
    if (!newRPC) throw new AppError("RemanProductCompoenntService not found", 404)

    newRPC.set(payload)

    console.log(newRPC);
    return newRPC
}