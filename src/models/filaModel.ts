import mongoose, { Schema } from "mongoose";

const FilaSchema = new mongoose.Schema({
    name: String,
    productId: {type: Schema.Types.ObjectId, ref: 'Product'},
    producName: String,
    description	: String
})

export const Family =  mongoose.model('Family', FilaSchema)