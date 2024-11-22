import { Router } from 'express'
import { productController } from './product.controller'

const productRouter = Router()
productRouter.post('', productController.createProduct)
productRouter.get('/:productId', productController.getSingleProduct)
productRouter.get('', productController.getProduct)

export default productRouter
