import mongoose, { mongo } from "mongoose";

const ComponentSchema = new mongoose.Schema({
    name: String,
    description: String,
    partNumber: String,
    partNumberReman: String,
    isReman: Boolean
})

export const Component = mongoose.model('Component', ComponentSchema)