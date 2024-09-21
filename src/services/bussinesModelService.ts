import AppError from "../appError"
import { BussinesModel } from "../models/businessModelModel"
import { TBussinesModelCreation, TBussinesModelUpdate } from "../types/bussinesModelType"

export const creationBussinesModelService = async (payload: TBussinesModelCreation) => {
    const newBussines = new BussinesModel(payload)
    const validate = await getBussinesModelByNameService(payload.name)
    if (validate.length > 0) throw new AppError("This Bussines Model already Exists", 404)

    console.log(newBussines)
    return await newBussines.save()
}

export const getBussinesModelByIdService = async (id: string) => {
    const bussinesModel = await BussinesModel.findById(id)

    if (!bussinesModel) throw new AppError("bussinesModel not found", 404)

    console.log(bussinesModel)
    return bussinesModel
}

export const getAllBussinesModelService = async () => {
    const bussinesModel = await BussinesModel.find()

    console.log(bussinesModel);

    return await bussinesModel
}

export const getBussinesModelByNameService = async (name: string) => {
    const bussinesModel = await BussinesModel.find(
        { "name": { "$regex": name, "$options": "i" } }
    )

    console.log(bussinesModel)

    return bussinesModel
}

export const getBussinesModelByCustumerService = async (custumer: string) => {
    const bussinesModel = await BussinesModel.find(
        { "custumer": { "$regex": custumer, "$options": "i" } }
    )

    console.log(bussinesModel)

    return bussinesModel
}

export const deleteBussinesModelService = async (id: string) => {
    const bussinesModel = await BussinesModel.findById(id)

    if (!bussinesModel) throw new AppError("bussinesModel not found", 404)

    console.log(bussinesModel.name + "deleted");

    await bussinesModel.deleteOne()
}

export const patchBussinesModelService = async (payload: TBussinesModelUpdate, id: string) => {
    console.log(payload);
    
    const bussinesModel = await BussinesModel.findById(id)
    console.log(bussinesModel);
    
    if (!bussinesModel) throw new AppError("bussinesModel not found", 404)

    bussinesModel.set(payload)
    await bussinesModel.save()

    console.log(bussinesModel);

    return bussinesModel
}