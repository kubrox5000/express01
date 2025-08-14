"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Truck, Car, ArrowRight, CheckCircle, FileText, CreditCard } from 'lucide-react'

export default function DriverRegisterPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Info
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    nationalId: "",

    // Vehicle Info
    vehicleType: "",
    vehiclePlate: "",
    vehicleModel: "",
    vehicleYear: "",
    drivingLicense: "",

    // Address & Banking
    address: "",
    cityId: "",
    bankAccount: "",

    // Agreement
    agreeToTerms: false,
  })

  const steps = [
    { number: 1, title: "المعلومات الشخصية", icon: <FileText className="h-5 w-5" /> },
    { number: 2, title: "معلومات المركبة", icon: <Car className="h-5 w-5" /> },
    { number: 3, title: "العنوان والحساب البنكي", icon: <CreditCard className="h-5 w-5" /> },
  ]

  const vehicleTypes = ["دراجة نارية", "سيارة صغيرة", "شاحنة صغيرة", "شاحنة متوسطة"]

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
  }

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    // Handle form submission
    console.log("Driver registration submitted:", formData)
    alert("تم تسجيل طلبك بنجاح! سنتواصل معك قريباً لمراجعة الوثائق وتفعيل حسابك.")
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    currentStep >= step.number ? "bg-[#2563eb] text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {currentStep > step.number ? <CheckCircle className="h-5 w-5" /> : step.icon}
                </div>
                <div className="mr-3 rtl:ml-3">
                  <div
                    className={`text-sm font-medium ${currentStep >= step.number ? "text-[#2563eb]" : "text-gray-500"}`}
                  >
                    الخطوة {step.number}
                  </div>
                  <div className="text-xs text-gray-600">{step.title}</div>
                </div>
                {index < steps.length - 1 && <ArrowRight className="h-5 w-5 text-gray-300 mx-4" />}
              </div>
            ))}
          </div>
        </div>

        <Card className="border-2 border-gray-100 shadow-lg">
          <CardHeader className="bg-[#f8fafc]">
            <CardTitle className="text-2xl text-[#334155] text-center">
              التقدم كسائق - {steps[currentStep - 1].title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <label className="block text-sm font-medium text-[#334155] mb-2">رقم الهاتف *</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+212 6XX-XXXXXX"
                      required
                    />
                  </div>
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
                  <label className="block text-sm font-medium text-[#334155] mb-2">رقم البطاقة الوطنية *</label>
                  <Input
                    value={formData.nationalId}
                    onChange={(e) => handleInputChange("nationalId", e.target.value)}
                    placeholder="رقم البطاقة الوطنية"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              </div>
            )}

            {/* Step 2: Vehicle Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#334155] mb-2">نوع المركبة *</label>
                  <Select onValueChange={(value) => handleInputChange("vehicleType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر نوع المركبة" />
                    </SelectTrigger>
                    <SelectContent>
                      {vehicleTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#334155] mb-2">رقم اللوحة *</label>
                    <Input
                      value={formData.vehiclePlate}
                      onChange={(e) => handleInputChange("vehiclePlate", e.target.value)}
                      placeholder="رقم لوحة المركبة"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#334155] mb-2">موديل المركبة *</label>
                    <Input
                      value={formData.vehicleModel}
                      onChange={(e) => handleInputChange("vehicleModel", e.target.value)}
                      placeholder="موديل المركبة"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#334155] mb-2">سنة الصنع *</label>
                    <Input
                      value={formData.vehicleYear}
                      onChange={(e) => handleInputChange("vehicleYear", e.target.value)}
                      placeholder="سنة صنع المركبة"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#334155] mb-2">رقم رخصة القيادة *</label>
                    <Input
                      value={formData.drivingLicense}
                      onChange={(e) => handleInputChange("drivingLicense", e.target.value)}
                      placeholder="رقم رخصة القيادة"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Address & Banking */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#334155] mb-2">العنوان الكامل *</label>
                  <Textarea
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="العنوان الكامل"
                    rows={3}
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

                <div>
                  <label className="block text-sm font-medium text-[#334155] mb-2">رقم الحساب البنكي *</label>
                  <Input
                    value={formData.bankAccount}
                    onChange={(e) => handleInputChange("bankAccount", e.target.value)}
                    placeholder="RIB أو رقم الحساب البنكي"
                    required
                  />
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
                    </Link>{" "}
                    الخاصة بمنصة ExpressMaroc
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              <div>
                {currentStep > 1 && (
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white bg-transparent"
                  >
                    السابق
                  </Button>
                )}
              </div>
              <div>
                {currentStep < 3 ? (
                  <Button onClick={handleNext} className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8">
                    التالي
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={!formData.agreeToTerms}
                    className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8"
                  >
                    إرسال الطلب
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Login Link */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            لديك حساب بالفعل؟{" "}
            <Link href="/auth/driver-login" className="text-[#2563eb] hover:underline font-medium">
              تسجيل الدخول
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
