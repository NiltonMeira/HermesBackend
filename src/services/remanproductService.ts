import mongoose from "mongoose"
import AppError from "../appError"
import { RemanProduct } from "../models/remanproductModel"
import { TRemanProduct, TRemanProductUpdate } from "../types/remanproductType"

export const creationRemanProductsService = async (payload: TRemanProduct ) => {
    const newRemanProduct = new RemanProduct(payload)
    const validate = await getRemanProductByNameService(payload.name)
    if (validate.length > 0) throw new AppError("This reman product already Exists", 404)
    
    try{
        return await newRemanProduct.save()
    } catch (err) {
        throw new AppError("Insert a valid core Id", 404)
    }
}

export const getAllRemanProductServices = async () => {
    const remanProducts = await RemanProduct.find()

    console.log(remanProducts);

    return remanProducts
}

export const getRemanProductByIdService = async (id: string) => {
    const remanproduct = await RemanProduct.findById(id).exec()

    if(!remanproduct) throw new AppError("Core not found", 404)

    console.log(remanproduct);
    

    return remanproduct
}

export const getRemanProductByNameService = async (name: string) => {
    const remanproducts = await RemanProduct.find(
        { "name": { "$regex": name, "$options": "i" } }
    )

    if(!remanproducts) throw new AppError("Core not found", 404)

    console.log(remanproducts);
    
    return remanproducts
}

export const getRemanProductByCoreIdService = async (coreId: string) => {
    const objectId = new mongoose.Types.ObjectId(coreId);

    const remanProduct = await RemanProduct.find({ coreId: objectId });
    
    if (!remanProduct || remanProduct.length === 0) throw new AppError("Reman Product not found found", 404);
    
    console.log(remanProduct); 
    return remanProduct
}

export const deleteRemanProductService = async (id: string) => {
    const remanproduct = await RemanProduct.findById(id)

    if(!remanproduct) throw new AppError("Reman Product not found", 404)

    await remanproduct.deleteOne()
}

export const patchRemanProductService = async (payload: TRemanProductUpdate, id: string) => {
    const remanproduct =  await RemanProduct.findById(id)

    if(!remanproduct) throw new AppError("Core not found", 404)

    remanproduct.set(payload)

    console.log(remanproduct);
    
    return await remanproduct.save()
}
