import express from "express";
import { creationRPCController, deleteRPCController, getRPCByIdController, getRPCController, patchRPCController } from "../controllers/rpcController";
import { validateToken } from "../middlewares/validateToken";
import { validatePlanner } from "../middlewares/validatePlanner";
import { validateOperator } from "../middlewares/validateOperator";
import { validateAdm } from "../middlewares/validateAdm";

const rpcRouter = express.Router()

rpcRouter.post("",validateToken, validatePlanner, creationRPCController)
rpcRouter.get("",validateToken, validateOperator, getRPCController)
rpcRouter.get("/:id",validateToken, validateOperator, getRPCByIdController)
rpcRouter.delete("/:id",validateToken, validateAdm, deleteRPCController)
rpcRouter.patch("/:id", validateToken, validatePlanner, patchRPCController )

export default  rpcRouter