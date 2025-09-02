import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [{
    id: String,
    name: String,
    price: Number,
    quantity: Number,
    image: String,
    description: String
  }],
  total: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
  shippingAddress: { type: String, required: true },
  courier: { type: String, required: true },
  date: { type: Date, default: Date.now },
  customerName: String,
  customerEmail: String,
  customerPhone: String
}, {
  timestamps: true
})

export const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema) 