import productService from './product.service'
import { Request, Response } from 'express'

//handelling the request and response for creating a new product
const createProduct = async (req: Request, res: Response) => {
  try {
    //getting the payload from the request
    const payload = req.body
    //calling the service function
    const result = await productService.createProduct(payload)
    //sending response back to the client
    res.json({
      status: true,
      message: 'Product created successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
    res.json({
      status: false,
      message: 'Internal Server Error',
    })
  }
}

//handelling the request and response for fetching the products
const getProduct = async (req: Request, res: Response) => {
  try {
    const result = await productService.getProduct()
    res.json({
      status: true,
      message: 'Product fetched successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
    res.json({
      status: false,
      message: 'Internal Server Error',
    })
  }
}

//get a single product
const getSingleProduct = async (req: Request, res: Response) => {
  //req.params allows us to access the parameters in the url
  const productId = req.params.productId
  try {
    const result = await productService.getSingleProduct(productId)
    res.json({
      status: true,
      message: 'Product fetched successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
    res.json({
      status: false,
      message: 'Internal Server Error',
    })
  }
}

//updating a product
const updateProduct = async (req: Request, res: Response) => {
  const productId = req.params.productId
  const payload = req.body
  try {
    const result = await productService.updateProduct(productId, payload)
    res.json({
      status: true,
      message: 'Product updated successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
    res.json({
      status: false,
      message: 'Internal Server Error',
    })
  }
}
//deleting a product
const deleteProduct = async (req: Request, res: Response) => {
  const productId = req.params.productId
  try {
    const result = await productService.deleteProduct(productId)
    res.json({
      status: true,
      message: 'Product deleted successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
    res.json({
      status: false,
      message: 'Internal Server Error',
    })
  }
}

export const productController = {
  createProduct,
  getProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
}
