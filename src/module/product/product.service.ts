import Product from './product.model'
import { IProduct } from './product.interface'

const createProduct = async (product: IProduct): Promise<IProduct> => {
  const result = await Product.create(product)
  return result
}

export default {
  createProduct,
}
