"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  Package,
  Truck,
  TrendingUp,
  Settings,
  FileText,
  CreditCard,
  MapPin,
  Bell,
  LogOut,
  Shield,
} from "lucide-react"

const sidebarItems = [
  {
    title: "لوحة التحكم",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "إدارة البائعين",
    href: "/admin/sellers",
    icon: Users,
  },
  {
    title: "إدارة السائقين",
    href: "/admin/drivers",
    icon: Truck,
  },
  {
    title: "إدارة الطلبات",
    href: "/admin/orders",
    icon: Package,
  },
  {
    title: "المدفوعات",
    href: "/admin/payments",
    icon: CreditCard,
  },
  {
    title: "التتبع والخرائط",
    href: "/admin/tracking",
    icon: MapPin,
  },
  {
    title: "الإحصائيات",
    href: "/admin/analytics",
    icon: TrendingUp,
  },
  {
    title: "التقارير",
    href: "/admin/reports",
    icon: FileText,
  },
  {
    title: "الإشعارات",
    href: "/admin/notifications",
    icon: Bell,
  },
  {
    title: "إعدادات النظام",
    href: "/admin/settings",
    icon: Settings,
  },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col bg-[#334155] text-white">
      {/* Logo */}
      <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-600">
        <Shield className="h-8 w-8 text-[#0ea5e9]" />
        <div>
          <div className="font-bold text-white">ExpressMaroc</div>
          <div className="text-xs text-gray-300">لوحة الإدارة</div>
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
                    isActive ? "bg-[#2563eb] text-white" : "text-gray-300 hover:bg-gray-600 hover:text-white",
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
      <div className="px-4 py-4 border-t border-gray-600">
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-600 hover:text-red-400 w-full transition-colors">
          <LogOut className="h-5 w-5" />
          تسجيل الخروج
        </button>
      </div>
    </div>
  )
}
