"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Package,
  TrendingUp,
  CreditCard,
  Settings,
  Users,
  FileText,
  LogOut,
  Truck,
} from "lucide-react"

const sidebarItems = [
  {
    title: "لوحة التحكم",
    href: "/seller/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "الطلبات",
    href: "/seller/orders",
    icon: Package,
  },
  {
    title: "الإحصائيات",
    href: "/seller/analytics",
    icon: TrendingUp,
  },
  {
    title: "المدفوعات",
    href: "/seller/payments",
    icon: CreditCard,
  },
  {
    title: "العملاء",
    href: "/seller/customers",
    icon: Users,
  },
  {
    title: "التقارير",
    href: "/seller/reports",
    icon: FileText,
  },
  {
    title: "الإعدادات",
    href: "/seller/settings",
    icon: Settings,
  },
]

export default function SellerSidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col bg-white border-l border-gray-200">
      {/* Logo */}
      <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-200">
        <Truck className="h-8 w-8 text-[#2563eb]" />
        <div>
          <div className="font-bold text-[#334155]">ExpressMaroc</div>
          <div className="text-xs text-gray-500">لوحة البائع</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive ? "bg-[#2563eb] text-white" : "text-gray-600 hover:bg-gray-100 hover:text-[#2563eb]",
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="px-4 py-4 border-t border-gray-200">
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-red-600 w-full transition-colors">
          <LogOut className="h-5 w-5" />
          تسجيل الخروج
        </button>
      </div>
    </div>
  )
}
