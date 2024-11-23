import { customerController } from './customer.controller'
import { Router } from 'express'

const customerRouter = Router()
customerRouter.post('', customerController.createCustomer)
customerRouter.get('/:id', customerController.getSingleCustomer)
customerRouter.get('/:id/orders', customerController.getCustomerOrders)
customerRouter.get('', customerController.getCustomer)
export default customerRouter
