import { type NextRequest, NextResponse } from "next/server"
import { SMSService } from "@/lib/sms-service"
import { WhatsAppService } from "@/lib/whatsapp-service"
import { createClient } from "@/lib/supabase/server"

export async function POST(request: NextRequest) {
  try {
    const { orderId, type, customerPhone, customerName } = await request.json()

    const supabase = createClient()

    // Get order details
    const { data: order, error } = await supabase.from("orders").select("*").eq("id", orderId).single()

    if (error || !order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 })
    }

    const smsService = SMSService.getInstance()
    const whatsappService = WhatsAppService.getInstance()

    let message = ""

    switch (type) {
      case "confirmed":
        message = SMSService.getOrderConfirmationMessage(order.order_number, customerName)
        break
      case "shipped":
        const trackingUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/tracking/${order.order_number}`
        message = SMSService.getOrderShippedMessage(order.order_number, trackingUrl)
        break
      case "delivered":
        message = SMSService.getOrderDeliveredMessage(order.order_number)
        break
      default:
        return NextResponse.json({ error: "Invalid notification type" }, { status: 400 })
    }

    // Send SMS
    const smsSuccess = await smsService.sendSMS({
      to: customerPhone,
      message,
      orderId,
    })

    // Send WhatsApp message
    const whatsappSuccess = await whatsappService.sendMessage({
      to: customerPhone,
      message,
    })

    return NextResponse.json({
      success: true,
      sms: smsSuccess,
      whatsapp: whatsappSuccess,
    })
  } catch (error) {
    console.error("Notification sending failed:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
