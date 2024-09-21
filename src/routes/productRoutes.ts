import  express  from 'express';
import { creationProductController, deleteProductsController, getProductsByIdController, getProductsController, patchProductController } from '../controllers/productController';
import { validateToken } from '../middlewares/validateToken';
import { validateAdm } from '../middlewares/validateAdm';
import { validatePlanner } from '../middlewares/validatePlanner';
import { validateOperator } from '../middlewares/validateOperator';

const productRouter = express.Router()

productRouter.post('',validateToken, validatePlanner, creationProductController)
productRouter.get('',validateToken, validateOperator, getProductsController)
productRouter.get('/:id',validateToken, validateOperator, getProductsByIdController)
productRouter.delete('/:id',validateToken, validateAdm, deleteProductsController)
productRouter.patch('/:id',validateToken, validateAdm, patchProductController)

export default productRouter