import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    role: Number,
    edv: String,
    password: String
})

export const User = mongoose.model('User', UserSchema)