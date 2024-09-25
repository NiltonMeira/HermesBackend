import { patchQueueController } from './../controllers/queueController';
import express from 'express'
import { validateToken } from '../middlewares/validateToken'
import { validatePlanner } from '../middlewares/validatePlanner'
import { creationQueueController, deleteQueueController, getQueueByIdController, getQueueController } from '../controllers/queueController'
import { validateOperator } from '../middlewares/validateOperator'

const queueRouter = express.Router()

queueRouter.post('', validateToken, validatePlanner, creationQueueController)
queueRouter.get('', validateToken, validatePlanner, getQueueController)
queueRouter.get('/:id', validateToken, validateOperator, getQueueByIdController)
queueRouter.delete('/:id', deleteQueueController)
queueRouter.patch('/:id', patchQueueController)

export default queueRouter