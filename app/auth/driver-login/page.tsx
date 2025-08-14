"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Car, Eye, EyeOff } from "lucide-react"

export default function DriverLoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate login process
    setTimeout(() => {
      if (formData.email && formData.password) {
        // Simulate successful login - redirect to driver dashboard
        router.push("/driver/dashboard")
      } else {
        setError("يرجى إدخال البريد الإلكتروني وكلمة المرور")
      }
      setIsLoading(false)
    }, 1500)
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

      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Card className="border-2 border-gray-100 shadow-lg">
            <CardHeader className="bg-[#f8fafc] text-center">
              <div className="bg-[#2563eb] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-[#334155]">تسجيل دخول السائقين</CardTitle>
              <p className="text-gray-600 mt-2">ادخل إلى لوحة التحكم الخاصة بك</p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-[#334155] mb-2">البريد الإلكتروني</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#334155] mb-2">كلمة المرور</label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      placeholder="كلمة المرور"
                      required
                      className="w-full pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Link href="/auth/forgot-password" className="text-sm text-[#2563eb] hover:underline">
                    نسيت كلمة المرور؟
                  </Link>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white py-3 text-lg"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      جاري تسجيل الدخول...
                    </div>
                  ) : (
                    "تسجيل الدخول"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Register Link */}
          <div className="text-center">
            <p className="text-gray-600">
              ليس لديك حساب؟{" "}
              <Link href="/auth/driver-register" className="text-[#2563eb] hover:underline font-medium">
                التقدم كسائق
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
