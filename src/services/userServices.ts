import  bcrypt  from 'bcryptjs';
import AppError from "../appError"
import { User } from "../models/userModel"
import {tUserCreation, TUserUpdate } from "../types/userTypes"

export const creationUserService = async(payload: tUserCreation) => {
    if(!await validateEmail(payload.email).valueOf()) throw new AppError("Email ja cadastrado", 404) 
    if(!(await validateEdv(payload.edv)).valueOf()) throw new AppError("EDV ja cadastrado", 404)

    validatePassword(payload.password)
    
    payload.password = await hashPassword(payload.password);

    const newUser = new User(payload)
    newUser.role = 3

    console.log(newUser);
     
    return await newUser.save()
}

export const getAllUsersService = async () => {
    const users = User.find()
    
    console.log(users);
    

    return await users
}

export const getUserByIDService = async (id: String) => {
    
    const user = await User.findById(id).exec()

    if(!user) throw new AppError("User not found", 404)
    
    console.log(user);    
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
    const user = User.findById(id)

    if(!user) throw new AppError("User not found", 404)
    
    await user.deleteOne()

    return "User deleted"
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

export const validatePassword = (password: string) => {
    if(password.length < 8) throw new AppError("The password is too short", 404)

    if(!hasNumbers(password)) throw new AppError("The password must contain numbers", 404)

    if(!hasUpperCase(password)) throw new AppError("The password must contain uppercase Letters", 404)

    if(!hasSpecialChar(password)) throw new AppError("The password must contain special char")
}

const hasNumbers = (password: string): boolean => {
    return /\d/.test(password);
  };

const hasUpperCase = (password: string) => {
    return /[A-Z]/.test(password);
}

const hasSpecialChar = (password: string) => {
    return /[!@#$%^&*(),.?":{}|<>]/.test(password)
}

