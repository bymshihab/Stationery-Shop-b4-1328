import { Request, Response } from 'express'
import orderService from './order.service'
const createOrder = async (req: Request, res: Response) => {
  try {
    const payload = req.body
    const result = await orderService.createOrder(payload)
    res.json({
      status: true,
      message: 'Order created successfully',
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
const getOrder = async (req: Request, res: Response) => {
  try {
    const result = await orderService.getOrder()
    res.json({
      status: true,
      message: 'Order fetched successfully',
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

export const orderController = {
  createOrder,
  getOrder,
}
