import mongoose, { Schema } from "mongoose";

const RemanProducSchema = new mongoose.Schema({
    remanProductId: {type: Schema.Types.ObjectId, ref: 'RemanProduct'},
    componentId : {type: Schema.Types.ObjectId, ref: "Component"}
})

export const RemanProductComponent = mongoose.model('RemanProductModel', RemanProducSchema)