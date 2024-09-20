import AppError from "../appError"
import { Family } from "../models/familyModel"
import { TFamilyCreation, TFamilyUpdate } from "../types/familyType"

export const creationFamilyService = async (payload: TFamilyCreation) => {
    const newFamily = new Family(payload)
    console.log(newFamily);
    
    return await newFamily.save()
}

export const getAllFamilysService = async () => {
    const family = await Family.find()
    console.log(family);
    return family
}

export const getFamilyByIdService = async (id: string) => {
    const family = await Family.findById(id).exec()

    if(!family) throw new AppError("Family not found", 404)
    
    console.log(family);
    
    return family
}

export const getFamilytByNameService = async (name: string) => {
    const familys = await Family.find(
        { "name": { "$regex": name, "$options": "i" } }
    )
    
    if(!familys) throw new AppError("Family not found", 404)
    
    console.log(familys);
    
    return familys

}

export const getFamilyByProductId = async (familyID: string) => {
    const familys = await Family.find(
        { "familyID": { "$regex": familyID, "$options": "i" } }
    )
    
    if(!familys) throw new AppError("Family not found", 404)
    
    console.log(familys);
    
    return familys
}

export const deleteFamilyService = async (id: string) => {
    const family = await Family.findById(id)

    if(!family) throw new AppError("family not found", 404)

    await family.deleteOne()

    return "The family was deleted"

}

export const patchFamilyService = async (payload: TFamilyUpdate, id:string) => {
    const family = await Family.findById(id)

    if(!family) throw new AppError("family not found", 404)

    family.set(payload)

    console.log(family);    
    return await family.save()

}   