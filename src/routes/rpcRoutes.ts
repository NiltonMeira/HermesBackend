import express from "express";
import { creationRPCController, deleteRPCController, getRPCByIdController, getRPCController, patchRPCController } from "../controllers/rpcController";

const rpcRouter = express.Router()

rpcRouter.post("", creationRPCController)
rpcRouter.get("", getRPCController)
rpcRouter.get("/:id", getRPCByIdController)
rpcRouter.delete("/:id", deleteRPCController)
rpcRouter.patch("/:id", patchRPCController )

export default  rpcRouter