import { Types } from 'mongoose'

export interface ICustomer {
  name: string
  email: string
  address: string
  phone: string
  orders: Types.ObjectId[]
}
