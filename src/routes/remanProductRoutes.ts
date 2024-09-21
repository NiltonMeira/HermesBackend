import { validateOperator } from './../middlewares/validateOperator';
import express from 'express'
import { creationRemanProductController, getRemanProductByIdController, getRemanProductController, patchRemanProductController } from '../controllers/remanProductController'
import { deleteProductsController } from '../controllers/productController'
import { validateToken } from '../middlewares/validateToken'
import { validatePlanner } from '../middlewares/validatePlanner'
import { validateAdm } from '../middlewares/validateAdm';

const remanProductRouter = express.Router()

remanProductRouter.post("",validateToken, validatePlanner, creationRemanProductController)
remanProductRouter.get("",validateToken, validateOperator, getRemanProductController)
remanProductRouter.get("/:id",validateToken, validateOperator, getRemanProductByIdController)
remanProductRouter.delete("/:id",validateToken, validateAdm, deleteProductsController)
remanProductRouter.patch("/:id",validateToken, validatePlanner, patchRemanProductController)

export default remanProductRouter