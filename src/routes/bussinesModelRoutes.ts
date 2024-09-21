import express from 'express'
import { creationBussinesModelController, deleteBMController, getBMByIdController, getBMController, patchBMController } from '../controllers/bussineModelController'
import { validateToken } from '../middlewares/validateToken'
import { validatePlanner } from '../middlewares/validatePlanner'
import { validateOperator } from '../middlewares/validateOperator'
import { validateAdm } from '../middlewares/validateAdm'

const bussinesModelRouter = express.Router()

bussinesModelRouter.post('',validateToken, validatePlanner, creationBussinesModelController)
bussinesModelRouter.get('',validateToken,validateOperator, getBMController)
bussinesModelRouter.get('/:id',validateToken,validateOperator, getBMByIdController)
bussinesModelRouter.delete('/:id',validateToken, validateAdm, deleteBMController)
bussinesModelRouter.patch('/:id',validateToken, patchBMController)

export default bussinesModelRouter