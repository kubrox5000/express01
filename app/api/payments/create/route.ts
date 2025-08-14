import { type NextRequest, NextResponse } from "next/server"
import { PaymentService } from "@/lib/payment-service"
import { createClient } from "@/lib/supabase/server"

export async function POST(request: NextRequest) {
  try {
    const { orderId, amount, customerEmail, customerName } = await request.json()

    const supabase = createClient()

    // Get order details
    const { data: order, error } = await supabase.from("orders").select("*").eq("id", orderId).single()

    if (error || !order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 })
    }

    const paymentService = PaymentService.getInstance()

    const paymentResponse = await paymentService.createPayment({
      amount,
      currency: "MAD",
      orderId,
      customerEmail,
      customerName,
      description: `Payment for order ${order.order_number}`,
    })

    if (paymentResponse.success) {
      // Update order with payment ID
      await supabase
        .from("orders")
        .update({
          payment_id: paymentResponse.paymentId,
          payment_status: "pending",
        })
        .eq("id", orderId)
    }

    return NextResponse.json(paymentResponse)
  } catch (error) {
    console.error("Payment creation failed:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
