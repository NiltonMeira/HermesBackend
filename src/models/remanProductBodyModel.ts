import mongoose, { Schema } from "mongoose";

const RemanProductBodySchema = new mongoose.Schema({
    remanProductId: {type: Schema.Types.ObjectId, ref: 'RemanProduct'},
    bodyId : {type: Schema.Types.ObjectId, ref: "Body"}
})

export const  RemanProductBody = mongoose.model('RemanProductBody', RemanProductBodySchema)