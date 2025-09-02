import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import dbConnect from '@/lib/mongodb'
import User from '@/models/User'

export async function POST(request: Request) {
  try {
    await dbConnect()
    const { name, email, password, phoneNumber, bankAccountNumber, bankName } = await request.json()

    const existingUser = await User.findOne({ email })
    
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      )
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
      bankAccountNumber,
      bankName,
      orders: []
    })

    const userWithoutPassword = user.toObject()
    delete userWithoutPassword.password
    return NextResponse.json(userWithoutPassword)

  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
} 