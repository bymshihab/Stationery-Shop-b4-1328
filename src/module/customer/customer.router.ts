import { customerController } from './customer.controller'
import { Router } from 'express'

const customerRouter = Router()
customerRouter.post('', customerController.createCustomer)
customerRouter.get('/:id/orders', customerController.getCustomerOrders)
export default customerRouter
