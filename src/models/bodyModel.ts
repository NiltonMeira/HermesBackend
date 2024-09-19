import mongoose from "mongoose";

const BodySchema = new mongoose.Schema({
    name: String,
    description: String,
    partNumber: String,
    partNumberReman: String,
    isReman: Boolean
})

export const Body = mongoose.model('Body', BodySchema)