import { NextRequest, NextResponse } from "next/server";

import { Order } from "@/lib/models/order";
import dbConnect from "@/lib/mongodb";

// After
type Params = { params: { userId: string } };

export async function GET(request: Request, params: Params) {
  try {
    const userId = params.params.userId;

    await dbConnect();
    const orders = await Order.find({ userId: userId })
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json(orders);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}
