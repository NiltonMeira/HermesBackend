import express from "express"
import { creationComponentController, deleteComponentController, getComponentByIdController, getComponentsController, getPartNumberController, patchComponentController } from "../controllers/componentController"

const componentRoutes = express.Router()

componentRoutes.post('', creationComponentController)
componentRoutes.get('', getComponentsController)
componentRoutes.get('/:id', getComponentByIdController)
componentRoutes.delete('/:id', deleteComponentController)
componentRoutes.patch('/:id', patchComponentController )

export default componentRoutes