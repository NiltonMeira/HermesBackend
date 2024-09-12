import { User } from "../models/userModel"
import { tUserCreation } from "../types/userTypes"

export const creationUserService = async(payload: tUserCreation ) => {
    const newUser = new User(payload)
    newUser.role = 1
    return await newUser.save()
}