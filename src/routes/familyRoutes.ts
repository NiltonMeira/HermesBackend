import express from 'express'
import { creationFamilyController, deleteFamilyController, getFamilyByIdController, getFamilyController, patchFamilyController } from '../controllers/familyController'
import { validateToken } from '../middlewares/validateToken'
import { validateOperator } from '../middlewares/validateOperator'
import { validatePlanner } from '../middlewares/validatePlanner'
import { validateAdm } from '../middlewares/validateAdm'

const familyRouter = express.Router()

familyRouter.post('',validateToken, validatePlanner, creationFamilyController)
familyRouter.get('',validateToken,validateOperator, getFamilyController)
familyRouter.get('/:id',validateToken,validateOperator, getFamilyByIdController)
familyRouter.delete('/:id',validateToken,validateAdm, deleteFamilyController)
familyRouter.patch('/:id',validateToken,validatePlanner, patchFamilyController)    

export default familyRouter