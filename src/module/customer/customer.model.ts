import { model, Schema } from 'mongoose'

const customerSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide a valid customer name'],
    minlength: [3, 'Customer name must be at least 3 characters long'],
    maxlength: [50, 'Customer name must not exceed 50 characters'],
    trim: true, // Removes unnecessary whitespace
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    validate: {
      validator: function (value: string) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)
      },
      message: '{VALUE} is not a valid email',
    },
    immutable: true,
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
    trim: true, // Removes unnecessary whitespace
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    validate: {
      validator: function (value: string) {
        return /^\+?[0-9]{8,15}$/.test(value)
      },
      message: '{VALUE} is not a valid phone number',
    },
  },
  orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
})

const Customer = model('Customer', customerSchema)
export default Customer
