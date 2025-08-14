"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Package, CheckCircle, Clock, MapPin, Phone, MessageCircle, Truck, User } from "lucide-react"

export default function OrderTrackingPage() {
  const params = useParams()
  const orderId = params.id as string
  const [trackingData, setTrackingData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API call to fetch tracking data
    setTimeout(() => {
      setTrackingData({
        orderNumber: orderId,
        customerName: "أحمد محمد",
        customerPhone: "+212 661-234567",
        sellerName: "متجر الأناقة المغربية",
        packageDescription: "ملابس رجالية - 3 قطع",
        packageValue: 450,
        deliveryFee: 25,
        totalAmount: 475,
        status: "في الطريق",
        estimatedDelivery: "غداً، 2:00 مساءً",
        currentLocation: "الدار البيضاء - مركز التوزيع",
        driverName: "محمد الإدريسي",
        driverPhone: "+212 661-987654",
        timeline: [
          {
            status: "تم استلام الطلب",
            time: "اليوم، 9:00 صباحاً",
            location: "الرباط - متجر الأناقة المغربية",
            completed: true,
            description: "تم استلام الطرد من البائع وتأكيد المحتويات",
          },
          {
            status: "تم شحن الطلب",
            time: "اليوم، 11:30 صباحاً",
            location: "الرباط - مركز التوزيع",
            completed: true,
            description: "تم تحضير الطرد للشحن وتسليمه للسائق",
          },
          {
            status: "في الطريق",
            time: "اليوم، 2:00 مساءً",
            location: "الدار البيضاء - مركز التوزيع",
            completed: true,
            description: "الطرد في طريقه إلى مدينة الوجهة",
          },
          {
            status: "خارج للتوصيل",
            time: "غداً، 10:00 صباحاً",
            location: "الدار البيضاء",
            completed: false,
            description: "السائق في طريقه لتوصيل الطرد",
          },
          {
            status: "تم التوصيل",
            time: "غداً، 2:00 مساءً",
            location: "العنوان المحدد",
            completed: false,
            description: "تم تسليم الطرد بنجاح للعميل",
          },
        ],
      })
      setIsLoading(false)
    }, 1500)
  }, [orderId])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "في الطريق":
        return "bg-blue-100 text-blue-800"
      case "تم التوصيل":
        return "bg-green-100 text-green-800"
      case "في الانتظار":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2563eb] mx-auto mb-4"></div>
            <p className="text-gray-600">جاري تحميل بيانات التتبع...</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  if (!trackingData) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">لم يتم العثور على الطلب</h2>
            <p className="text-gray-600">يرجى التحقق من رقم التتبع والمحاولة مرة أخرى</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#334155] mb-2">تتبع الطلب</h1>
          <p className="text-xl text-gray-600">رقم الطلب: {trackingData.orderNumber}</p>
        </div>

        {/* Order Summary */}
        <Card className="mb-8 border-2 border-[#2563eb]">
          <CardHeader className="bg-[#f8fafc]">
            <CardTitle className="text-2xl text-[#334155] flex items-center gap-3">
              <Package className="h-6 w-6 text-[#2563eb]" />
              ملخص الطلب
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-lg font-semibold text-[#334155] mb-2">الحالة الحالية</div>
                <Badge className={`text-lg px-4 py-2 ${getStatusColor(trackingData.status)}`}>
                  {trackingData.status}
                </Badge>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-[#334155] mb-2">التوصيل المتوقع</div>
                <div className="text-[#0ea5e9] font-bold text-xl">{trackingData.estimatedDelivery}</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-[#334155] mb-2">الموقع الحالي</div>
                <div className="text-gray-600 font-medium">{trackingData.currentLocation}</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-[#334155] mb-2">المبلغ الإجمالي</div>
                <div className="text-[#2563eb] font-bold text-xl">{trackingData.totalAmount} درهم</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#334155]">تتبع مسار الطلب</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {trackingData.timeline.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                          item.completed ? "bg-[#2563eb] text-white" : "bg-gray-200 text-gray-400"
                        }`}
                      >
                        {item.completed ? <CheckCircle className="h-6 w-6" /> : <Clock className="h-6 w-6" />}
                      </div>
                      <div className="flex-1">
                        <div className={`font-semibold text-lg ${item.completed ? "text-[#334155]" : "text-gray-400"}`}>
                          {item.status}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">{item.time}</div>
                        <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                          <MapPin className="h-4 w-4" />
                          {item.location}
                        </div>
                        <div className="text-sm text-gray-600 mt-2">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Details & Contact */}
          <div className="space-y-6">
            {/* Order Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#334155] flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  تفاصيل الطلب
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-600">البائع</p>
                  <p className="text-[#334155] font-semibold">{trackingData.sellerName}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">وصف الطرد</p>
                  <p className="text-[#334155]">{trackingData.packageDescription}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">قيمة الطرد</p>
                  <p className="text-[#334155]">{trackingData.packageValue} درهم</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">رسوم التوصيل</p>
                  <p className="text-[#334155]">{trackingData.deliveryFee} درهم</p>
                </div>
              </CardContent>
            </Card>

            {/* Driver Contact */}
            {trackingData.driverName && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#334155] flex items-center gap-2">
                    <Truck className="h-5 w-5" />
                    معلومات السائق
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-[#2563eb]" />
                    <div>
                      <p className="font-semibold text-[#334155]">{trackingData.driverName}</p>
                      <p className="text-sm text-gray-600">سائق التوصيل</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-[#2563eb] hover:bg-[#1d4ed8] text-white">
                      <Phone className="h-4 w-4 ml-2" />
                      اتصال
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-[#0ea5e9] text-[#0ea5e9] hover:bg-[#0ea5e9] hover:text-white bg-transparent"
                    >
                      <MessageCircle className="h-4 w-4 ml-2" />
                      رسالة
                    </Button>
                  </div>
                </CardContent>
              \
