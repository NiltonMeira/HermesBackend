import  express  from 'express';
import { creationProductController, deleteProductsController, getProductsByIdController, getProductsController, patchProductController } from '../controllers/productController';

const productRouter = express.Router()

productRouter.post('', creationProductController)
productRouter.get('', getProductsController)
productRouter.get('/:id', getProductsByIdController)
productRouter.delete('/:id', deleteProductsController)
productRouter.patch('/:id', patchProductController)

export default productRouter