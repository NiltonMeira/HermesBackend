import mongoose from "mongoose";
import AppError from "../appError";
import { Core } from "../models/coreModel";
import { TCoreCreation, TCoreUpdate } from "../types/coreType";

export const creationCoreService = async (payload: TCoreCreation) => {
    const newCore = new Core(payload)
    const validate = await getCoreByNameService(payload.name)
    if (validate.length > 0) throw new AppError("This core already Exists", 404)
    console.log(newCore);

    try {
        return await newCore.save()
    } catch (err) {
        throw new AppError("Insert a valid family Id", 404)
    }
}

export const getAllCoreServices = async () => {
    const cores = await Core.find()

    if(!Core) throw new AppError("Core not found", 404)
    
    console.log(cores);
    
    return cores
}

export const getCoreByIdService = async (id: string) => {
    const core = await Core.findById(id).exec()

    if (!core) throw new AppError("Core not found", 404)

    console.log(core);
        
    return core
}

export const getCoreByNameService = async (name: string) => {
    const cores = await Core.find(
        { "name": { "$regex": name, "$options": "i" } }
    )

    if (!cores) throw new AppError("Core not found", 404)

    console.log(cores);
    
    return cores
}

export const getCoreByFamilyIdService = async (familyId: string) => {
    const objectId = new mongoose.Types.ObjectId(familyId);

    const cores = await Core.find({ familyId: objectId });
    
    if (!cores || cores.length === 0) throw new AppError("Family not found", 404);
    
    console.log(cores); 
    return cores
}

export const deleteCoreService = async (id: string) => {
    const core = await Core.findById(id)

    if (!core) throw new AppError("Core not found", 404)

    await core.deleteOne()
}

export const patchCoreService = async (payload: TCoreUpdate, id: string) => {
    const core = await Core.findById(id)

    if (!core) throw new AppError("Core not found", 404)

    core.set(payload)

    return await core.save()
}
