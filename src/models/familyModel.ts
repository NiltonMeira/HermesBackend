import mongoose, { Schema } from "mongoose";

const FamilySchema = new mongoose.Schema({
    name: String,
    productId: {type: Schema.Types.ObjectId, ref: 'Product'},
    description	: String
})

export const Family =  mongoose.model('Family', FamilySchema)