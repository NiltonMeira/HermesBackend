import mongoose from "mongoose";

const BussinessModelSchema = new mongoose.Schema({
    name: String,
    custumer: String,
    description: String
})

export const BussinesModel = mongoose.model('BussinesModel', BussinessModelSchema)