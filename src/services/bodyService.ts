import AppError from "../appError"
import { Body } from "../models/bodyModel"
import { TBodyCreation } from "../types/bodyType"
import { tUserCreation } from "../types/userTypes"

export const creationBodyService = async (payload: TBodyCreation) => {
    const newBody = new Body(payload)
    console.log(newBody)
    return await newBody.save()
}

export const getBodyByIdService = async (id: string) => {
    const body = await Body.findById(id)

    if(!body) throw new AppError("Body not found", 404)
    
    console.log(body)
    return body
}

export const getAllBodiesService = async () => {
    const bodies = await Body.find()

    console.log(bodies);
    
    return await bodies
}

export const getBodyByNameService = async (name: string) => {
    const bodies = await Body.find(
        { "name": { "$regex": name, "$options": "i" } }
    )

    console.log(bodies)

    return bodies
}

export const getBodyByPartNumberService = async (partNumber: string) => {
    const bodies = await Body.find(
        {"partNumber": {"$regex": partNumber, "$options": "i"}}
    )

    console.log(bodies);

    return bodies
}

export const deleteBodyService = async (id: string) => {
    const body = await Body.findById(id)

    if(!body) throw new AppError("Body not found", 404)

    console.log(body.name + "deleted");
    
    await body.deleteOne()
}

export const patchBodyService = async (payload: tUserCreation, id: string) => {
    const body = await Body.findById(id)

    if(!body) throw new AppError("Body not found", 404)

    body.set(payload)

    console.log(body);
    return body
}