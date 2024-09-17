import express from 'express'
import { creationRemanProductController, getRemanProductByIdController, getRemanProductController, patchRemanProductController } from '../controllers/remanProductController'
import { deleteProductsController } from '../controllers/productController'

const remanProductRouter = express.Router()

remanProductRouter.post("", creationRemanProductController)
remanProductRouter.get("", getRemanProductController)
remanProductRouter.get("/:id", getRemanProductByIdController)
remanProductRouter.delete("/:id", deleteProductsController)
remanProductRouter.patch("/:id", patchRemanProductController)

export default remanProductRouter