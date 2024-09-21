import express from 'express'
import { creationCoreController, deleteCoreController, getCoreByIdController, getCoresController, patchCoreController } from '../controllers/coreController'
import { validatePlanner } from '../middlewares/validatePlanner'
import { validateOperator } from '../middlewares/validateOperator'
import { validateAdm } from '../middlewares/validateAdm'

const coreRoutes = express.Router()

coreRoutes.post('',validatePlanner,validatePlanner, creationCoreController)
coreRoutes.get('',validatePlanner,validateOperator, getCoresController)
coreRoutes.get('/:id',validatePlanner,validateOperator, getCoreByIdController)
coreRoutes.delete('/:id',validatePlanner,validateAdm, deleteCoreController)
coreRoutes.patch('/:id',validatePlanner,validatePlanner, patchCoreController)    

export default coreRoutes