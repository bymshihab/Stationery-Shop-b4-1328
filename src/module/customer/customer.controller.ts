import { Request, Response } from 'express'
import customerService from './customer.service'
const createCustomer = async (req: Request, res: Response) => {
  try {
    const customer = await customerService.createCustomer(req.body)
    res.json({
      status: true,
      message: 'Customer created successfully',
      data: customer,
    })
  } catch (error) {
    res.json({
      status: false,
      message: (error as Error).message || 'Internal Server Error',
    })
  }
}

const getCustomerOrders = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const orders = await customerService.getCustomerOrders(id)
    res.json({
      status: true,
      message: 'Orders fetched successfully',
      data: orders,
    })
  } catch (error) {
    res.json({
      status: false,
      message: (error as Error).message || 'Customer not found',
    })
  }
}

export const customerController = {
  createCustomer,
  getCustomerOrders,
}
