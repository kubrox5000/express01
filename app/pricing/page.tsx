import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Truck, Clock, Shield } from "lucide-react"

export default function PricingPage() {
  const plans = [
    {
      name: "التوصيل العادي",
      price: "25",
      duration: "3-5 أيام",
      features: ["تغطية جميع المدن الرئيسية", "تتبع مباشر للطلب", "دعم عملاء 24/7", "تأمين أساسي للطلبات"],
      icon: <Truck className="h-8 w-8" />,
      popular: false,
    },
    {
      name: "التوصيل السريع",
      price: "45",
      duration: "1-2 أيام",
      features: [
        "توصيل في نفس اليوم للمدن الكبرى",
        "أولوية في المعالجة",
        "تتبع مباشر متقدم",
        "تأمين شامل للطلبات",
        "دعم مخصص",
      ],
      icon: <Clock className="h-8 w-8" />,
      popular: true,
    },
    {
      name: "التوصيل المميز",
      price: "75",
      duration: "نفس اليوم",
      features: [
        "توصيل في نفس اليوم مضمون",
        "معالجة فورية للطلبات",
        "تتبع مباشر مع إشعارات SMS",
        "تأمين كامل ضد الأضرار",
        "مدير حساب مخصص",
        "تقارير مفصلة",
      ],
      icon: <Shield className="h-8 w-8" />,
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#f8fafc] to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#334155] mb-6">أسعار شفافة لكل احتياج</h1>
          <p className="text-xl text-gray-600 leading-relaxed">اختر الخطة التي تناسب متطلبات التوصيل الخاصة بك</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-2 hover:shadow-xl transition-all ${
                  plan.popular ? "border-[#2563eb] shadow-lg scale-105" : "border-gray-200 hover:border-[#0ea5e9]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#2563eb] text-white px-4 py-2 rounded-full text-sm font-semibold">
                      الأكثر شعبية
                    </span>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      plan.popular ? "bg-[#2563eb] text-white" : "bg-[#f8fafc] text-[#2563eb]"
                    }`}
                  >
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-[#334155] mb-2">{plan.name}</CardTitle>
                  <div className="space-y-1">
                    <div className="text-4xl font-bold text-[#2563eb]">
                      {plan.price} <span className="text-lg text-gray-500">درهم</span>
                    </div>
                    <div className="text-gray-600">{plan.duration}</div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3 rtl:space-x-reverse">
                        <CheckCircle className="h-5 w-5 text-[#0ea5e9] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full py-3 text-lg ${
                      plan.popular
                        ? "bg-[#2563eb] hover:bg-[#1d4ed8] text-white"
                        : "bg-white border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white"
                    }`}
                  >
                    اختر هذه الخطة
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#334155] mb-8">معلومات إضافية عن الأسعار</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#334155]">رسوم إضافية</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• المناطق النائية: +10 درهم</li>
                <li>• الطلبات الثقيلة (+5 كيلو): +15 درهم</li>
                <li>• التوصيل في العطل: +20 درهم</li>
                <li>• إعادة التوصيل: +10 درهم</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#334155]">خصومات متاحة</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• +100 طلب شهرياً: خصم 10%</li>
                <li>• +500 طلب شهرياً: خصم 15%</li>
                <li>• +1000 طلب شهرياً: خصم 20%</li>
                <li>• عقد سنوي: خصم إضافي 5%</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
