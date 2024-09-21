import express from "express"
import { creationComponentController, deleteComponentController, getComponentByIdController, getComponentsController, getPartNumberController, patchComponentController } from "../controllers/componentController"
import { validateToken } from "../middlewares/validateToken"
import { validatePlanner } from "../middlewares/validatePlanner"
import { validateOperator } from "../middlewares/validateOperator"
import { validateAdm } from "../middlewares/validateAdm"

const componentRoutes = express.Router()

componentRoutes.post('',validateToken,validatePlanner, creationComponentController)
componentRoutes.get('',validateToken,validateOperator, getComponentsController)
componentRoutes.get('/:id',validateToken,validateOperator, getComponentByIdController)
componentRoutes.delete('/:id',validateToken,validateAdm, deleteComponentController)
componentRoutes.patch('/:id',validateToken,validatePlanner, patchComponentController )

export default componentRoutes