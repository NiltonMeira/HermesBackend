import express from "express";
import { creationRPBController, deleteRPBController, getAllRPBController, getRPBByIdController, patchRPBController } from "../controllers/rpbController";
import { patchBodyService } from "../services/bodyService";

const rpbRouter = express.Router()

rpbRouter.post("", creationRPBController)
rpbRouter.get("", getAllRPBController)
rpbRouter.get("/:id", getRPBByIdController)
rpbRouter.delete("/:id", deleteRPBController)
rpbRouter.patch("/:id", patchRPBController )

export default rpbRouter