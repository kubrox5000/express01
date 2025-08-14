import Link from "next/link"
import { Truck, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#334155] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Truck className="h-8 w-8 text-[#0ea5e9]" />
              <span className="text-2xl font-bold">ExpressMaroc</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              منصة التوصيل الرائدة في المغرب. نوفر خدمات توصيل سريعة وموثوقة لجميع أنحاء المملكة.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <Facebook className="h-5 w-5 text-gray-300 hover:text-[#0ea5e9] cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-300 hover:text-[#0ea5e9] cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-300 hover:text-[#0ea5e9] cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">روابط سريعة</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-[#0ea5e9] transition-colors">
                الرئيسية
              </Link>
              <Link href="/pricing" className="block text-gray-300 hover:text-[#0ea5e9] transition-colors">
                الأسعار
              </Link>
              <Link href="/tracking" className="block text-gray-300 hover:text-[#0ea5e9] transition-colors">
                تتبع الطلب
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-[#0ea5e9] transition-colors">
                اتصل بنا
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">خدماتنا</h3>
            <div className="space-y-2">
              <p className="text-gray-300">توصيل سريع</p>
              <p className="text-gray-300">توصيل عادي</p>
              <p className="text-gray-300">دفع عند الاستلام</p>
              <p className="text-gray-300">تتبع مباشر</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">تواصل معنا</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="h-5 w-5 text-[#0ea5e9]" />
                <span className="text-gray-300">+212 5XX-XXXXXX</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="h-5 w-5 text-[#0ea5e9]" />
                <span className="text-gray-300">info@expressmaroc.ma</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <MapPin className="h-5 w-5 text-[#0ea5e9]" />
                <span className="text-gray-300">الدار البيضاء، المغرب</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">© 2024 ExpressMaroc. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
