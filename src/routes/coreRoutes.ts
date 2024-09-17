import express from 'express'
import { creationCoreController, deleteCoreController, getCoreByIdController, getCoresController, patchCoreController } from '../controllers/coreController'

const coreRoutes = express.Router()

coreRoutes.post('', creationCoreController)
coreRoutes.get('', getCoresController)
coreRoutes.get('/:id', getCoreByIdController)
coreRoutes.delete('/:id', deleteCoreController)
coreRoutes.patch('/:id', patchCoreController)    

export default coreRoutes