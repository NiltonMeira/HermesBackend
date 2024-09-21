import express from 'express'
import { creationBussinesModelController, deleteBMController, getBMByIdController, getBMController, patchBMController } from '../controllers/bussineModelController'

const bussinesModelRouter = express.Router()

bussinesModelRouter.post('', creationBussinesModelController)
bussinesModelRouter.get('', getBMController)
bussinesModelRouter.get('/:id', getBMByIdController)
bussinesModelRouter.delete('/:id', deleteBMController)
bussinesModelRouter.patch('/:id', patchBMController)

export default bussinesModelRouter