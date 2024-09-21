import express from 'express'
import { creationBodycontroller, deleteBodyController, getBodiesController, getBodyByIdController, patchBodyController } from '../controllers/bodyController'
import { validateToken } from '../middlewares/validateToken'
import { validatePlanner } from '../middlewares/validatePlanner'
import { validateOperator } from '../middlewares/validateOperator'
import { validateAdm } from '../middlewares/validateAdm'

const bodyRouter = express.Router()

bodyRouter.post('',validateToken, validatePlanner, creationBodycontroller)
bodyRouter.get('',validateToken, validatePlanner, getBodiesController)
bodyRouter.get("/:id",validateToken,validateOperator, getBodyByIdController)
bodyRouter.delete("/:id",validateToken,validateAdm, deleteBodyController)
bodyRouter.patch("/:id",validateToken, validatePlanner, patchBodyController)

export default bodyRouter