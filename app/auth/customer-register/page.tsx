"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Truck, User } from "lucide-react"

export default function CustomerRegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    cityId: "",
    agreeToTerms: false,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const cities = [
    { id: "1", name: "الدار البيضاء" },
    { id: "2", name: "الرباط" },
    { id: "3", name: "فاس" },
    { id: "4", name: "مراكش" },
    { id: "5", name: "طنجة" },
    { id: "6", name: "أكادير" },
  ]

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (formData.password !== formData.confirmPassword) {
      setError("كلمات المرور غير متطابقة")
      setIsLoading(false)
      return
    }

    if (!formData.agreeToTerms) {
      setError("يجب الموافقة على الشروط والأحكام")
      setIsLoading(false)
      return
    }

    // Simulate registration process
    setTimeout(() => {
      alert("تم إنشاء حسابك بنجاح! يمكنك الآن تسجيل الدخول.")
      window.location.href = "/auth/customer-login"
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <Truck className="h-8 w-8 text-[#2563eb]" />
            <span className="text-2xl font-bold text-[#334155]">ExpressMaroc</span>
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-md w-full space-y-8">
          <Card className="border-2 border-gray-100 shadow-lg">
            <CardHeader className="bg-[#f8fafc] text-center">
              <div className="bg-[#2563eb] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-[#334155]">إنشاء حساب عميل</CardTitle>
              <p className="text-gray-600 mt-2">انضم إلينا لتتبع طلباتك بسهولة</p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-[#334155] mb-2">الاسم الكامل *</label>
                  <Input
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    placeholder="أدخل اسمك الكامل"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#334155] mb-2">البريد الإلكتروني *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#334155] mb-2">رقم الهاتف *</label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+212 6XX-XXXXXX"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#334155] mb-2">المدينة *</label>
                  <Select onValueChange={(value) => handleInputChange("cityId", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر المدينة" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city.id} value={city.id}>
                          {city.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#334155] mb-2">كلمة المرور *</label>
                    <Input
                      type="password"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      placeholder="كلمة مرور قوية"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#334155] mb-2">تأكيد كلمة المرور *</label>
                    <Input
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                      placeholder="أعد كتابة كلمة المرور"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                    أوافق على{" "}
                    <Link href="/terms" className="text-[#2563eb] hover:underline">
                      الشروط والأحكام
                    </Link>{" "}
                    و{" "}
                    <Link href="/privacy" className="text-[#2563eb] hover:underline">
                      سياسة الخصوصية
                    </Link>
                  </label>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading || !formData.agreeToTerms}
                  className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white py-3 text-lg"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      جاري إنشاء الحساب...
                    </div>
                  ) : (
                    "إنشاء الحساب"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-gray-600">
              لديك حساب بالفعل؟{" "}
              <Link href="/auth/customer-login" className="text-[#2563eb] hover:underline font-medium">
                تسجيل الدخول
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
