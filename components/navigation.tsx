"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, X, Truck, ChevronDown, User, Store, Car, Shield } from "lucide-react"
import { useLocale } from "@/hooks/use-locale"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, locale, setLocale } = useLocale()

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <Truck className="h-8 w-8 text-[#2563eb]" />
            <span className="text-2xl font-bold text-[#334155]">ExpressMaroc</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <Link href="/" className="text-[#334155] hover:text-[#2563eb] font-medium transition-colors">
              {t.nav.home}
            </Link>
            <Link href="/pricing" className="text-[#334155] hover:text-[#2563eb] font-medium transition-colors">
              {t.nav.pricing}
            </Link>
            <Link href="/tracking" className="text-[#334155] hover:text-[#2563eb] font-medium transition-colors">
              {t.nav.tracking}
            </Link>
            <Link href="/contact" className="text-[#334155] hover:text-[#2563eb] font-medium transition-colors">
              {t.nav.contact}
            </Link>
            <LanguageSwitcher currentLocale={locale} onLocaleChange={setLocale} />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white bg-transparent"
                >
                  تسجيل الدخول <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/auth/customer-login" className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    عميل
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/auth/seller-login" className="flex items-center">
                    <Store className="mr-2 h-4 w-4" />
                    بائع
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/auth/driver-login" className="flex items-center">
                    <Car className="mr-2 h-4 w-4" />
                    سائق
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/admin/login" className="flex items-center">
                    <Shield className="mr-2 h-4 w-4" />
                    مدير
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white">
                  إنشاء حساب <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/auth/customer-register" className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    حساب عميل
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/auth/seller-register" className="flex items-center">
                    <Store className="mr-2 h-4 w-4" />
                    حساب بائع
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/auth/driver-register" className="flex items-center">
                    <Car className="mr-2 h-4 w-4" />
                    حساب سائق
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-[#334155]">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="/"
                className="block px-3 py-2 text-[#334155] hover:text-[#2563eb] font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.home}
              </Link>
              <Link
                href="/pricing"
                className="block px-3 py-2 text-[#334155] hover:text-[#2563eb] font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.pricing}
              </Link>
              <Link
                href="/tracking"
                className="block px-3 py-2 text-[#334155] hover:text-[#2563eb] font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.tracking}
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-[#334155] hover:text-[#2563eb] font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.contact}
              </Link>
              <div className="px-3 py-2">
                <LanguageSwitcher currentLocale={locale} onLocaleChange={setLocale} />
              </div>

              <div className="px-3 py-2">
                <div className="text-sm font-medium text-[#334155] mb-2">تسجيل الدخول</div>
                <div className="space-y-1 ml-4">
                  <Link
                    href="/auth/customer-login"
                    className="flex items-center px-2 py-1 text-sm text-[#334155] hover:text-[#2563eb]"
                    onClick={() => setIsOpen(false)}
                  >
                    <User className="mr-2 h-4 w-4" />
                    عميل
                  </Link>
                  <Link
                    href="/auth/seller-login"
                    className="flex items-center px-2 py-1 text-sm text-[#334155] hover:text-[#2563eb]"
                    onClick={() => setIsOpen(false)}
                  >
                    <Store className="mr-2 h-4 w-4" />
                    بائع
                  </Link>
                  <Link
                    href="/auth/driver-login"
                    className="flex items-center px-2 py-1 text-sm text-[#334155] hover:text-[#2563eb]"
                    onClick={() => setIsOpen(false)}
                  >
                    <Car className="mr-2 h-4 w-4" />
                    سائق
                  </Link>
                  <Link
                    href="/admin/login"
                    className="flex items-center px-2 py-1 text-sm text-[#334155] hover:text-[#2563eb]"
                    onClick={() => setIsOpen(false)}
                  >
                    <Shield className="mr-2 h-4 w-4" />
                    مدير
                  </Link>
                </div>
              </div>

              <div className="px-3 py-2">
                <div className="text-sm font-medium text-[#334155] mb-2">إنشاء حساب</div>
                <div className="space-y-1 ml-4">
                  <Link
                    href="/auth/customer-register"
                    className="flex items-center px-2 py-1 text-sm text-[#334155] hover:text-[#2563eb]"
                    onClick={() => setIsOpen(false)}
                  >
                    <User className="mr-2 h-4 w-4" />
                    حساب عميل
                  </Link>
                  <Link
                    href="/auth/seller-register"
                    className="flex items-center px-2 py-1 text-sm text-[#334155] hover:text-[#2563eb]"
                    onClick={() => setIsOpen(false)}
                  >
                    <Store className="mr-2 h-4 w-4" />
                    حساب بائع
                  </Link>
                  <Link
                    href="/auth/driver-register"
                    className="flex items-center px-2 py-1 text-sm text-[#334155] hover:text-[#2563eb]"
                    onClick={() => setIsOpen(false)}
                  >
                    <Car className="mr-2 h-4 w-4" />
                    حساب سائق
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
