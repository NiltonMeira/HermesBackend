import mongoose from "mongoose";

const ProductSchema =  new mongoose.Schema({
    name: String,
    description: String
})

export const Product = mongoose.model('Product', ProductSchema)