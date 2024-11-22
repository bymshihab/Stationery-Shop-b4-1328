import Order from './order.model'
import { IOrder } from './order.interface'

const createOrder = async (order: IOrder) => {
  const result = await Order.create(order)
  return result
}

const getOrder = async () => {
  const result = await Order.find()
  return result
}

export default {
  createOrder,
  getOrder,
}
