"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.")
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#f8fafc] to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#334155] mb-6">نحن هنا لمساعدتك!</h1>
          <p className="text-xl text-gray-600 leading-relaxed">تواصل معنا لأي استفسارات أو دعم تحتاجه</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-2 border-gray-100 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#334155] flex items-center gap-3">
                    <MessageCircle className="h-6 w-6 text-[#2563eb]" />
                    أرسل لنا رسالة
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#334155] mb-2">الاسم الكامل *</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="أدخل اسمك الكامل"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#334155] mb-2">رقم الهاتف</label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="+212 6XX-XXXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#334155] mb-2">البريد الإلكتروني *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#334155] mb-2">الموضوع *</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="موضوع رسالتك"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#334155] mb-2">الرسالة *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full"
                        placeholder="اكتب رسالتك هنا..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white py-3 text-lg"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          جاري الإرسال...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="h-5 w-5" />
                          إرسال الرسالة
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#2563eb] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#334155] mb-2">اتصل بنا</h3>
                      <p className="text-gray-600 mb-2">تحدث مع فريق الدعم مباشرة</p>
                      <p className="text-[#2563eb] font-semibold">+212 5XX-XXXXXX</p>
                      <p className="text-[#2563eb] font-semibold">+212 6XX-XXXXXX</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#0ea5e9] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#334155] mb-2">البريد الإلكتروني</h3>
                      <p className="text-gray-600 mb-2">راسلنا في أي وقت</p>
                      <p className="text-[#0ea5e9] font-semibold">info@expressmaroc.ma</p>
                      <p className="text-[#0ea5e9] font-semibold">support@expressmaroc.ma</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#2563eb] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#334155] mb-2">العنوان</h3>
                      <p className="text-gray-600 mb-2">مقرنا الرئيسي</p>
                      <p className="text-gray-700">
                        شارع محمد الخامس، الحي التجاري
                        <br />
                        الدار البيضاء 20000، المغرب
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#0ea5e9] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#334155] mb-2">ساعات العمل</h3>
                      <p className="text-gray-600 mb-2">نحن متاحون</p>
                      <div className="space-y-1 text-gray-700">
                        <p>الاثنين - الجمعة: 8:00 - 18:00</p>
                        <p>السبت: 9:00 - 15:00</p>
                        <p>الأحد: مغلق</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#334155] text-center mb-12">الأسئلة الشائعة</h2>
          <div className="space-y-6">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#334155] mb-2">كم يستغرق التوصيل؟</h3>
                <p className="text-gray-600">
                  يختلف وقت التوصيل حسب الخطة المختارة: التوصيل العادي (3-5 أيام)، السريع (1-2 أيام)، المميز (نفس
                  اليوم).
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#334155] mb-2">هل يمكنني تتبع طلبي؟</h3>
                <p className="text-gray-600">
                  نعم، يمكنك تتبع طلبك في الوقت الفعلي من خلال رقم التتبع الذي ستحصل عليه عند تأكيد الطلب.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#334155] mb-2">ما هي المناطق المغطاة؟</h3>
                <p className="text-gray-600">
                  نغطي جميع المدن الرئيسية في المغرب بما في ذلك الدار البيضاء، الرباط، فاس، مراكش، طنجة، وأكادير.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
