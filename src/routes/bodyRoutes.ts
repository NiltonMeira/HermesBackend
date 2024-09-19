import express from 'express'
import { creationBodycontroller, deleteBodyController, getBodiesByPartNumberController, getBodiesController, getBodyByIdController, patchBodyController } from '../controllers/bodyController'

const bodyRouter = express.Router()

bodyRouter.post('', creationBodycontroller)
bodyRouter.get('', getBodiesController)
bodyRouter.get("/:id", getBodyByIdController)
bodyRouter.get('', getBodiesByPartNumberController)
bodyRouter.delete("/:id", deleteBodyController)
bodyRouter.patch("/:id", patchBodyController)

export default bodyRouter