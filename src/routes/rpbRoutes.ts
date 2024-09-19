import express from "express";
import { creationRPBController, getAllRPBController, getRPBByIdController } from "../controllers/rpbController";

const rpbRouter = express.Router()

rpbRouter.post("", creationRPBController)
rpbRouter.get("", getAllRPBController)
rpbRouter.get("/:id", getRPBByIdController)
rpbRouter.get("/body")

export default rpbRouter