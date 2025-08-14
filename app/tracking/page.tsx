"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Package, CheckCircle, Clock, MapPin, Phone, MessageCircle } from "lucide-react"

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [trackingData, setTrackingData] = useState(null)

  const handleTrack = async () => {
    if (!trackingNumber.trim()) return

    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setTrackingData({
        orderNumber: trackingNumber,
        status: "في الطريق",
        estimatedDelivery: "غداً، 2:00 مساءً",
        currentLocation: "الدار البيضاء - مركز التوزيع",
        timeline: [
          {
            status: "تم استلام الطلب",
            time: "اليوم، 9:00 صباحاً",
            location: "الرباط",
            completed: true,
          },
          {
            status: "تم شحن الطلب",
            time: "اليوم، 11:30 صباحاً",
            location: "الرباط - مركز التوزيع",
            completed: true,
          },
          {
            status: "في الطريق",
            time: "اليوم، 2:00 مساءً",
            location: "الدار البيضاء - مركز التوزيع",
            completed: true,
          },
          {
            status: "خارج للتوصيل",
            time: "غداً، 10:00 صباحاً",
            location: "الدار البيضاء",
            completed: false,
          },
          {
            status: "تم التوصيل",
            time: "غداً، 2:00 مساءً",
            location: "العنوان المحدد",
            completed: false,
          },
        ],
      })
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#f8fafc] to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#334155] mb-6">تتبع طلبك في الوقت الفعلي</h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">ابق على اطلاع دائم مع نظام التتبع الموثوق لدينا</p>

          {/* Tracking Input */}
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="أدخل رقم التتبع"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="text-lg py-3"
                onKeyPress={(e) => e.key === "Enter" && handleTrack()}
              />
              <Button
                onClick={handleTrack}
                disabled={isLoading || !trackingNumber.trim()}
                className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-6"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <Search className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tracking Results */}
      {trackingData && (
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Order Summary */}
            <Card className="mb-8 border-2 border-[#2563eb]">
              <CardHeader className="bg-[#f8fafc]">
                <CardTitle className="text-2xl text-[#334155] flex items-center gap-3">
                  <Package className="h-6 w-6 text-[#2563eb]" />
                  طلب رقم: {trackingData.orderNumber}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-[#334155] mb-2">الحالة الحالية</div>
                    <div className="text-[#2563eb] font-bold text-xl">{trackingData.status}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-[#334155] mb-2">التوصيل المتوقع</div>
                    <div className="text-[#0ea5e9] font-bold text-xl">{trackingData.estimatedDelivery}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-[#334155] mb-2">الموقع الحالي</div>
                    <div className="text-gray-600 font-medium">{trackingData.currentLocation}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[#334155]">تتبع مسار الطلب</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {trackingData.timeline.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                          item.completed ? "bg-[#2563eb] text-white" : "bg-gray-200 text-gray-400"
                        }`}
                      >
                        {item.completed ? <CheckCircle className="h-5 w-5" /> : <Clock className="h-5 w-5" />}
                      </div>
                      <div className="flex-1">
                        <div className={`font-semibold ${item.completed ? "text-[#334155]" : "text-gray-400"}`}>
                          {item.status}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">{item.time}</div>
                        <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                          <MapPin className="h-4 w-4" />
                          {item.location}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Help Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#334155] mb-8">تحتاج مساعدة في التتبع؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <Phone className="h-12 w-12 text-[#2563eb] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#334155] mb-2">اتصل بنا</h3>
                <p className="text-gray-600 mb-4">تحدث مع فريق الدعم مباشرة</p>
                <Button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white">+212 5XX-XXXXXX</Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 text-[#0ea5e9] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#334155] mb-2">دردشة مباشرة</h3>
                <p className="text-gray-600 mb-4">احصل على مساعدة فورية</p>
                <Button
                  variant="outline"
                  className="border-[#0ea5e9] text-[#0ea5e9] hover:bg-[#0ea5e9] hover:text-white bg-transparent"
                >
                  ابدأ المحادثة
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
