import  bcrypt  from 'bcryptjs';
import AppError from "../appError"
import { User } from "../models/userModel"
import { TUser, tUserCreation, TUserUpdate } from "../types/userTypes"

export const creationUserService = async(payload: tUserCreation) => {
    if(!await validateEmail(payload.email).valueOf()) throw new AppError("Email ja cadastrado", 404) 
    if(!(await validateEdv(payload.edv)).valueOf()) throw new AppError("EDV ja cadastrado", 404)
    
    payload.password = await hashPassword(payload.password);

    const newUser = new User(payload)
    newUser.role = 1
    return await newUser.save()
}

export const getAllUsersService = async () => {
    return User.find()
}

export const getUserByIDService = async (id: string) => {
    const user = User.findById(id)

    if(!user) throw new AppError("User not found", 404)
        
    return user
}

export const getUserbyNameService = async (name: string) => {
    const users = await User.find(
        { "name": { "$regex": name, "$options": "i" } }
    )
    console.log(users);

    if(!users) throw new AppError("User not found", 404)

    return users
}

export const deleteUserService = async (id: string) => {
    const user = User.find()

    if(!user) throw new AppError("User not found", 404)

    await User.deleteOne()

}

export const patchUserService = async (payload: TUserUpdate, id: string) => {
    const user = await User.findById(id)

    if(!user) throw new AppError("User not found", 404)

    user.set(payload)

    return user.save()
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

export const hashPassword = async(password: string) => {
    const salt = await bcrypt.genSalt(12)
    return bcrypt.hash(password, salt)
}