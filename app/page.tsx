"use client"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Truck, Clock, Shield } from "lucide-react"
import Link from "next/link"
import { useLocale } from "@/hooks/use-locale"

export default function HomePage() {
  const { t } = useLocale()

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#f8fafc] to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-[#334155] leading-tight">{t.home.hero.title}</h1>
              <p className="text-xl text-gray-600 leading-relaxed">{t.home.hero.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth/seller-register">
                  <Button
                    size="lg"
                    className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 text-lg w-full sm:w-auto"
                  >
                    {t.home.hero.cta}
                  </Button>
                </Link>
                <Link href="/tracking">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white px-8 py-4 text-lg bg-transparent w-full sm:w-auto"
                  >
                    {t.home.hero.trackOrder}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder-zk5m4.png"
                alt="ExpressMaroc Delivery"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#334155] mb-4">{t.home.features.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نحن نقدم أفضل خدمات التوصيل في المغرب مع ضمان الجودة والسرعة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-[#2563eb] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#334155] mb-4">{t.home.features.fast.title}</h3>
                <p className="text-gray-600 leading-relaxed">{t.home.features.fast.description}</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-[#0ea5e9] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#334155] mb-4">{t.home.features.secure.title}</h3>
                <p className="text-gray-600 leading-relaxed">{t.home.features.secure.description}</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-[#2563eb] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#334155] mb-4">{t.home.features.tracking.title}</h3>
                <p className="text-gray-600 leading-relaxed">{t.home.features.tracking.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#2563eb]">50,000+</div>
              <div className="text-gray-600">{t.home.stats.orders}</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#2563eb]">12</div>
              <div className="text-gray-600">{t.home.stats.cities}</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#2563eb]">1,500+</div>
              <div className="text-gray-600">{t.home.stats.sellers}</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#2563eb]">98%</div>
              <div className="text-gray-600">{t.home.stats.satisfaction}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2563eb]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">جاهز لبدء التوصيل؟</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            انضم إلى آلاف البائعين الذين يثقون في ExpressMaroc لتوصيل طلباتهم
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/seller-register">
              <Button
                size="lg"
                className="bg-white text-[#2563eb] hover:bg-gray-100 px-8 py-4 text-lg w-full sm:w-auto"
              >
                سجل كبائع
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#2563eb] px-8 py-4 text-lg bg-transparent w-full sm:w-auto"
              >
                تواصل معنا
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
