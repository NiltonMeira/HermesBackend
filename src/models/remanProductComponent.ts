import mongoose, { Schema } from "mongoose";

const remanProductComponent = new mongoose.Schema({
    remanProductId: {type: Schema.Types.ObjectId, ref: 'RemanProduct'},
    componentId : {type: Schema.Types.ObjectId, ref: "Component"}
})