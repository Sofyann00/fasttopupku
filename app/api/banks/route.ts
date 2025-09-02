import { NextResponse } from 'next/server'
import bankData from '@/lib/bank.json'

export async function GET() {
  try {
    return NextResponse.json(bankData)
  } catch (error) {
    console.error('Error fetching banks:', error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
} 