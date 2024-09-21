import mongoose from "mongoose"
import AppError from "../appError"
import { Body } from "../models/bodyModel"
import { TBodyCreation, TBodyUpdate } from "../types/bodyType"
import { tUserCreation } from "../types/userTypes"
import { RemanProduct } from "../models/remanproductModel"

export const creationBodyService = async (payload: TBodyCreation) => {
    const newBody = new Body(payload)
    const validate = await getBodyByNameService(payload.name)
    if (validate.length > 0) throw new AppError("This body already Exists", 404)

    console.log(newBody)

    try {
        return await newBody.save()
    } catch (err) {
        throw new AppError("Insert a valid reman product Id", 404)
    }
}

export const getBodyByIdService = async (id: string) => {
    const body = await Body.findById(id)

    if (!body) throw new AppError("Body not found", 404)

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
        { "partNumber": { "$regex": partNumber, "$options": "i" } }
    )

    console.log(bodies);

    return bodies
}


export const deleteBodyService = async (id: string) => {
    const body = await Body.findById(id)

    if (!body) throw new AppError("Body not found", 404)

    console.log(body.name + "deleted");

    await body.deleteOne()
}

export const patchBodyService = async (payload: TBodyUpdate, id: string) => {
    console.log(payload);
    
    const body = await Body.findById(id)
    console.log(body);
    
    if (!body) throw new AppError("Body not found", 404)

    body.set(payload)
    await body.save()

    console.log(body);

    return body
}