import AppError from "../appError";
import { Product } from "../models/productModel";
import { TProductCreation, TProductUpdate } from "../types/productType";

export const creationProductService = async (payload: TProductCreation) => {
    const newProduct = new Product(payload)
    const validate = await getProductByName(payload.name)
    if(validate.length > 0) throw new AppError("This product already Exists", 404)
    console.log(newProduct);
    return await newProduct.save()
}

export const getAllProductsService = async () => {
    const product = await Product.find()
    
    console.log(product);
    return product
}

export const getProductByIdService = async (id: string) => {
    const product = await Product.findById(id).exec()

    if(!product) throw new AppError("Product not found", 404)
    
    console.log(product);
    return product
}

export const getProductByName = async (name: string) => {
    const products = await Product.find(
        { "name": { "$regex": name, "$options": "i" } }
    )
    
    if(!products) throw new AppError("Product not found", 404)
    
    console.log(products);    
    return products

}

export const deleteProductService = async (id: string) => {
    const product = Product.findById(id)

    if(!product) throw new AppError("Product not found", 404)

    await product.deleteOne()
    return "The product was deleted"
}

export const patchProductService = async (payload: TProductUpdate, id:string) => {
    const product = await Product.findById(id)

    if(!product) throw new AppError("Product not found", 404)

    product.set(payload)
    console.log(product);
    return product.save()

}   

