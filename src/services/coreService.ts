import AppError from "../appError";
import { Core } from "../models/codeModel";
import { TCoreCreation, TCoreUpdate } from "../types/coreType";

export const creationCoreService = async (payload: TCoreCreation) => {
    const newCore = new Core(payload)
    return await newCore.save()
}

export const getAllCoreServices = async () => {
    return await Core.find()
}

export const getCoreByIdService = async (id: string) => {
    const core = await Core.findById(id).exec()

    if(!core) throw new AppError("Core not found", 404)

    return core
}

export const getCoreByNameService = async (name: string) => {
    const cores = await Core.find(
        { "name": { "$regex": name, "$options": "i" } }
    )

    if(!cores) throw new AppError("Core not found", 404)

    return cores 
}

export const deleteCoreService = async (id: string) => {
    const core =  await Core.findById(id)

    if(!core) throw new AppError("Core not found", 404)

    await core.deleteOne()
}

export const patchFamilyService = async (payload: TCoreUpdate, id: string) => {
    const core =  await Core.findById(id)

    if(!core) throw new AppError("Core not found", 404)

    core.set(payload)

    return await core.save()
}
