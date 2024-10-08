import mongoose, { Schema } from "mongoose"

const QueueSchema = new mongoose.Schema({
    name: String,
    bussinesModelId: {type: Schema.Types.ObjectId, ref: 'BussinesModel'},
    bodyId: {type: Schema.Types.ObjectId, ref: 'Body'},
    position: Number,
    partNumber: String,
    npk: Number,
    capacityBatch: Number,
    batchQuantity: Number,
    BodiesQuantity: Number
})

export const Queue = mongoose.model('Queue', QueueSchema)