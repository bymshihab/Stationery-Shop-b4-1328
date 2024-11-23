import express, { Request, Response } from 'express'
import productRouter from './module/product/product.router'
import orderRouter from './module/order/order.router'
import customerRouter from './module/customer/customer.router'

const app = express()

app.use(express.json())
app.use('/api/products', productRouter)
app.use('/api/orders', orderRouter)
app.use('/api/customers', customerRouter)

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'Hello World',
    status: 200,
  })
})

export default app
