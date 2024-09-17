import AppError from "../appError";
import { Product } from "../models/productModel";
import { TProductCreation, TProductUpdate } from "../types/productType";

export const creationProductService = async (payload: TProductCreation) => {
    const newProduct = new Product(payload)
    return await newProduct.save()
}

export const getAllProductsService = async () => {
    return await Product.find()
}

export const getProductByIdService = async (id: string) => {
    const product = await Product.findById(id).exec()

    if(!product) throw new AppError("Product not found", 404)

    return product
}

export const getProductByName = async (name: string) => {
    const products = await Product.find(
        { "name": { "$regex": name, "$options": "i" } }
    )
    
    if(!products) throw new AppError("Product not found", 404)

    return products

}

export const deleteProductService = async (id: string) => {
    const product = Product.findById(id)

    if(!product) throw new AppError("Product not found", 404)

    await product.deleteOne()

}

export const patchProductService = async (payload: TProductUpdate, id:string) => {
    const product = await Product.findById(id)

    if(!product) throw new AppError("Product not found", 404)

    product.set(payload)
    
    return product.save()

}   

