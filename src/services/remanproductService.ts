import AppError from "../appError"
import { RemanProduct } from "../models/remanproductModel"
import { TRemanProduct } from "../types/remanproductType"

export const creationRemanProductsService = async (payload: TRemanProduct ) => {
    const newRemanProduct = new RemanProduct(payload)
    return await newRemanProduct.save()
}

export const getAllRemanProductServices = async () => {
    return await RemanProduct.find()
}

export const getRemanProductByIdService = async (id: string) => {
    const remanproduct = await RemanProduct.findById(id).exec()

    if(!remanproduct) throw new AppError("Core not found", 404)

    return remanproduct
}

export const getRemanProductByNameService = async (name: string) => {
    const remanproducts = await RemanProduct.find(
        { "name": { "$regex": name, "$options": "i" } }
    )

    if(!remanproducts) throw new AppError("Core not found", 404)

    return remanproducts
}

