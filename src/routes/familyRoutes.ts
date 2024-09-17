import express from 'express'
import { creationFamilyController, deleteFamilyController, getFamilyByIdController, getFamilyController, patchFamilyController } from '../controllers/familyController'

const familyRouter = express.Router()

familyRouter.post('', creationFamilyController)
familyRouter.get('', getFamilyController)
familyRouter.get('/:id', getFamilyByIdController)
familyRouter.delete('/:id', deleteFamilyController)
familyRouter.patch('/:id', patchFamilyController)    

export default familyRouter