import mongoose, { Schema } from "mongoose";

const remanProductBody = new mongoose.Schema({
    remanProductId: {type: Schema.Types.ObjectId, ref: 'RemanProduct'},
    bodyId : {type: Schema.Types.ObjectId, ref: "Body"}
})