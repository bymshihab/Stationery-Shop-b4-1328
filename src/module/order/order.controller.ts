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
    res.json({
      status: false,
      message: (err as Error).message || 'Internal Server Error',
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

const getTotalRevenue = async (req: Request, res: Response) => {
  try {
    const result = await orderService.getTotalRevenue()
    res.json({
      status: true,
      message: 'Total revenue fetched successfully',
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
  getTotalRevenue,
}
