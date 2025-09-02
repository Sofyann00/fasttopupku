import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const response = await fetch('https://pocergeming.com/api/digiflazz/transaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error in Digiflazz transaction:', error)
    return NextResponse.json(
      { error: 'Failed to process transaction' },
      { status: 500 }
    )
  }
} 