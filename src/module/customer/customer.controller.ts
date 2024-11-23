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

const getCustomer = async (req: Request, res: Response) => {
  try {
    const customers = await customerService.getCustomers()
    res.json({
      status: true,
      message: 'Customers fetched successfully',
      data: customers,
    })
  } catch (error) {
    res.json({
      status: false,
      message: (error as Error).message || 'Internal Server Error',
    })
  }
}

const getSingleCustomer = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const customer = await customerService.getSingleCustomer(id)
    res.json({
      status: true,
      message: 'Customer fetched successfully',
      data: customer,
    })
  } catch (error) {
    res.json({
      status: false,
      message: (error as Error).message || 'Customer not found',
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
  getCustomer,
  getSingleCustomer,
  getCustomerOrders,
}
