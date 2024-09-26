import mongoose, { Schema } from "mongoose";

const OperationBodySchema = new mongoose.Schema({
    bodyId: {type: Schema.Types.ObjectId, ref: 'Body'},
    queryId: {type: Schema.Types.ObjectId, ref: 'Queue'},
    partNumber: String,
    type: Boolean,
    Date: Date,
    NPK: Number,
    Quantity: Number
})

export const Operation = mongoose.model('Operation', OperationBodySchema)