import express from "express";
import { creationRPBController, deleteRPBController, getAllRPBController, getRPBByIdController, patchRPBController } from "../controllers/rpbController";
import { validateToken } from "../middlewares/validateToken";
import { validatePlanner } from "../middlewares/validatePlanner";
import { validateOperator } from "../middlewares/validateOperator";
import { validateAdm } from "../middlewares/validateAdm";

const rpbRouter = express.Router()

rpbRouter.post("",validateToken,validatePlanner, creationRPBController)
rpbRouter.get("",validateToken, validateOperator, getAllRPBController)
rpbRouter.get("/:id",validateToken,validateOperator, getRPBByIdController)
rpbRouter.delete("/:id",validateToken,validateAdm, deleteRPBController)
rpbRouter.patch("/:id",validateToken, validateAdm, patchRPBController )

export default rpbRouter