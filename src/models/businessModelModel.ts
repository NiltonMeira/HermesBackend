import mongoose from "mongoose";

const BussinessModelSchema = new mongoose.Schema({
    name: String,
    custumer: String,
    description: String
})