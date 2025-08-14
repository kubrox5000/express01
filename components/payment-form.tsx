"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CreditCard, Loader2 } from "lucide-react"

interface PaymentFormProps {
  orderId: string
  amount: number
  onSuccess: (paymentId: string) => void
  onError: (error: string) => void
}

export function PaymentForm({ orderId, amount, onSuccess, onError }: PaymentFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/payments/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId,
          amount,
          customerEmail: customerInfo.email,
          customerName: customerInfo.name,
        }),
      })

      const data = await response.json()

      if (data.success && data.paymentUrl) {
        // Redirect to payment gateway
        window.location.href = data.paymentUrl
      } else {
        onError(data.error || "فشل في إنشاء الدفع")
      }
    } catch (error) {
      onError("حدث خطأ في الشبكة")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5" />
          معلومات الدفع
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">الاسم الكامل</Label>
            <Input
              id="name"
              type="text"
              value={customerInfo.name}
              onChange={(e) => setCustomerInfo((prev) => ({ ...prev, name: e.target.value }))}
              required
              className="text-right"
              dir="rtl"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">البريد الإلكتروني</Label>
            <Input
              id="email"
              type="email"
              value={customerInfo.email}
              onChange={(e) => setCustomerInfo((prev) => ({ ...prev, email: e.target.value }))}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">رقم الهاتف</Label>
            <Input
              id="phone"
              type="tel"
              value={customerInfo.phone}
              onChange={(e) => setCustomerInfo((prev) => ({ ...prev, phone: e.target.value }))}
              required
              className="text-right"
              dir="rtl"
            />
          </div>

          <div className="pt-4 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">المجموع:</span>
              <span className="text-lg font-bold text-blue-600">{amount} درهم</span>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  جاري المعالجة...
                </>
              ) : (
                "متابعة الدفع"
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
