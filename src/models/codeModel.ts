import mongoose, { Schema } from "mongoose";

const CoreSchema = new mongoose.Schema({
    name: String,
    familyId: {type: Schema.Types.ObjectId, ref: 'Family'},
    description: String
})

export const Core = mongoose.model('Core', CoreSchema)