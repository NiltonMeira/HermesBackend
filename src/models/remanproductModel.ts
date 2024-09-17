import mongoose, { Schema } from "mongoose";

const remanproductSchema = new mongoose.Schema({
    name: String,
    coreId: {type: Schema.Types.ObjectId, ref: 'Core'},
    description: String
})

export const RemanProduct = mongoose.model('RemanProduct', remanproductSchema)