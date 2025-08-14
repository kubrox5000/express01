"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Shield, Eye, EyeOff } from "lucide-react"

export default function AdminLoginPage() {
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

    // Simulate admin login process
    setTimeout(() => {
      if (formData.email === "admin@expressmaroc.ma" && formData.password === "admin123") {
        router.push("/admin/dashboard")
      } else {
        setError("بيانات الدخول غير صحيحة")
      }
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#334155] to-[#1e293b] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Logo */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center space-x-2 rtl:space-x-reverse">
            <Truck className="h-12 w-12 text-white" />
            <span className="text-3xl font-bold text-white">ExpressMaroc</span>
          </Link>
          <p className="mt-2 text-gray-300">نظام الإدارة</p>
        </div>

        <Card className="border-2 border-gray-600 shadow-2xl bg-white/95 backdrop-blur">
          <CardHeader className="text-center pb-2">
            <div className="bg-[#2563eb] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl text-[#334155]">تسجيل دخول المدير</CardTitle>
            <p className="text-gray-600 mt-2">ادخل إلى لوحة التحكم الإدارية</p>
          </CardHeader>
          <CardContent className="p-8 pt-4">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">{error}</div>
              )}

              <div>
                <label className="block text-sm font-medium text-[#334155] mb-2">البريد الإلكتروني</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="admin@expressmaroc.ma"
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

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">للاختبار: admin@expressmaroc.ma / admin123</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
