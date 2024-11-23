import Customer from './customer.model'
import { ICustomer } from './customer.interface'

const createCustomer = async (customer: ICustomer) => {
  try {
    const result = await Customer.create(customer)
    return result
  } catch (error) {
    throw new Error((error as Error).message)
  }
}

const getCustomerOrders = async (customerId: string) => {
  try {
    // Find the customer and populate their orders
    const customer = await Customer.findById(customerId)
      .populate({
        path: 'orders', // Populate the orders array in the customer model
        populate: {
          path: 'product', // Populate the product field inside each order
          select: 'name price', // Fetch only product name and price
        },
      })
      .select('name email') // Select customer name and email

    if (!customer) {
      throw new Error('Customer not found')
    }

    // Format the response
    const orders = customer.orders.map((order: any) => ({
      orderId: order._id,
      date: order.date,
      totalPrice: order.totalPrice,
      quantity: order.quantity,
      product: {
        name: order.product.name, // The name of the product from the populated `product`
        price: order.product.price, // The price of the product from the populated `product`
      },
    }))

    return orders // Return the formatted list of orders
  } catch (error) {
    throw new Error((error as Error).message)
  }
}

export default {
  createCustomer,
  getCustomerOrders,
}
