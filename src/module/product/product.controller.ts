import productService from './product.service'
import { Request, Response } from 'express'

//handelling the request and response
const createProduct = async (req: Request, res: Response) => {
  try {
    //getting the payload from the request
    const payload = req.body
    //calling the service function
    const result = await productService.createProduct(payload)
    //sending response back to the client
    res.status(201).json({
      message: 'Product created successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'Internal Server Error',
    })
  }
}

export const productController = {
  createProduct,
}
