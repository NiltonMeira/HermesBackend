import AppError from "../appError"
import { User } from "../models/userModel"
import { tUserCreation } from "../types/userTypes"

export const creationUserService = async(payload: tUserCreation ) => {
    if(!await validateEmail(payload.email).valueOf()) throw new AppError("Email ja cadastrado", 404) 
    if(!(await validateEdv(payload.edv)).valueOf()) throw new AppError("EDV ja cadastrado", 404)

    const newUser = new User(payload)
    newUser.role = 1
    return await newUser.save()
}

export const validateEmail = async (email: string) => {
    const users = await User.find(
        {"email": {"$regex": email, "$options": "i" }}
    )

    return users.length == 0
}

export const validateEdv = async (edv: string) => {
    const users = await User.find(
        {"edv": {"$regex": edv, "$options": "i" }}
    )

    return users.length == 0
    
}