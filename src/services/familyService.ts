import AppError from "../appError"
import { Family } from "../models/familyModel"
import { TFamilyCreation, TFamilyUpdate } from "../types/familyType"

export const creationFamilyService = async (payload: TFamilyCreation) => {
    const newFamily = new Family(payload)
    return await newFamily.save()
}

export const getAllFamilysService = async () => {
    return await Family.find()
}

export const getFamilyByIdService = async (id: string) => {
    const family = await Family.findById(id).exec()

    if(!family) throw new AppError("Family not found", 404)

    return family
}

export const getFamilytByNameService = async (name: string) => {
    const familys = await Family.find(
        { "name": { "$regex": name, "$options": "i" } }
    )
    
    if(!familys) throw new AppError("Family not found", 404)

    return familys

}

export const deleteFamilyService = async (id: string) => {
    const family = Family.findById(id)

    if(!family) throw new AppError("family not found", 404)

    await family.deleteOne()

}

export const patchProductService = async (payload: TFamilyUpdate, id:string) => {
    const family = await Family.findById(id)

    if(!family) throw new AppError("family not found", 404)

    family.set(payload)
    
    return family.save()

}   