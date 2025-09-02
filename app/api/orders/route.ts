import { NextResponse } from 'next/server'

import { Order } from '@/lib/models/order'
import dbConnect from '@/lib/mongodb'

export async function POST(req: Request) {
  try {
    await dbConnect()
    const body = await req.json()

    const order = await Order.create({
      userId: body.userId,
      items: body.items,
      total: body.total,
      status: body.status,
      shippingAddress: body.shippingAddress,
      courier: body.courier,
      customerName: body.customerName,
      customerEmail: body.customerEmail,
      customerPhone: body.customerPhone
    })

    return NextResponse.json(order)
  } catch (error) {
    console.error('Error creating order:', error)
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    )
  }
} 