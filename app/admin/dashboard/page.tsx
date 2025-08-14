import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Users,
  Package,
  Truck,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Eye,
  Plus,
} from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    {
      title: "إجمالي البائعين",
      value: "1,247",
      change: "+23",
      changeType: "positive",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      title: "السائقين النشطين",
      value: "89",
      change: "+5",
      changeType: "positive",
      icon: Truck,
      color: "bg-green-500",
    },
    {
      title: "الطلبات اليومية",
      value: "2,847",
      change: "+12%",
      changeType: "positive",
      icon: Package,
      color: "bg-purple-500",
    },
    {
      title: "الإيرادات الشهرية",
      value: "847,230 درهم",
      change: "+18%",
      changeType: "positive",
      icon: DollarSign,
      color: "bg-yellow-500",
    },
  ]

  const recentActivities = [
    {
      type: "seller",
      message: "بائع جديد: متجر الأناقة المغربية",
      time: "منذ 5 دقائق",
      status: "pending",
    },
    {
      type: "order",
      message: "طلب عاجل: ORD-2847 - الدار البيضاء",
      time: "منذ 12 دقيقة",
      status: "urgent",
    },
    {
      type: "driver",
      message: "سائق جديد: محمد الإدريسي - طنجة",
      time: "منذ 25 دقيقة",
      status: "approved",
    },
    {
      type: "payment",
      message: "دفعة مكتملة: 15,670 درهم",
      time: "منذ 1 ساعة",
      status: "completed",
    },
  ]

  const pendingApprovals = [
    {
      type: "seller",
      name: "متجر الحرف اليدوية",
      location: "فاس",
      date: "اليوم",
    },
    {
      type: "driver",
      name: "عبد الرحمن الكتاني",
      location: "مراكش",
      date: "أمس",
    },
    {
      type: "seller",
      name: "شركة التوزيع السريع",
      location: "الرباط",
      date: "أمس",
    },
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "seller":
        return <Users className="h-4 w-4" />
      case "driver":
        return <Truck className="h-4 w-4" />
      case "order":
        return <Package className="h-4 w-4" />
      case "payment":
        return <DollarSign className="h-4 w-4" />
      default:
        return <AlertTriangle className="h-4 w-4" />
    }
  }

  const getActivityColor = (status: string) => {
    switch (status) {
      case "pending":
        return "text-yellow-600 bg-yellow-50"
      case "urgent":
        return "text-red-600 bg-red-50"
      case "approved":
        return "text-green-600 bg-green-50"
      case "completed":
        return "text-blue-600 bg-blue-50"
      default:
        return "text-gray-600 bg-gray-50"
    }
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#334155] mb-2">لوحة التحكم الإدارية</h1>
        <p className="text-gray-600">نظرة شاملة على منصة ExpressMaroc</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-[#334155]">{stat.value}</p>
                  <p className="text-sm font-medium text-green-600">{stat.change} هذا الشهر</p>
                </div>
                <div className={`${stat.color} w-12 h-12 rounded-full flex items-center justify-center`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activities */}
        <div className="lg:col-span-2">
          <Card className="border-none shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl text-[#334155]">النشاطات الأخيرة</CardTitle>
              <Button
                variant="outline"
                size="sm"
                className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white bg-transparent"
              >
                <Eye className="h-4 w-4 ml-2" />
                عرض الكل
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className={`p-2 rounded-full ${getActivityColor(activity.status)}`}>
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-[#334155]">{activity.message}</p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pending Approvals & Quick Actions */}
        <div className="space-y-6">
          {/* Pending Approvals */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-[#334155] flex items-center gap-2">
                <Clock className="h-5 w-5 text-yellow-600" />
                في انتظار الموافقة
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {pendingApprovals.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200"
                >
                  <div>
                    <p className="font-medium text-[#334155] text-sm">{item.name}</p>
                    <p className="text-xs text-gray-600">
                      {item.location} • {item.date}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white text-xs px-2 py-1">
                      موافقة
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-red-300 text-red-600 hover:bg-red-50 text-xs px-2 py-1 bg-transparent"
                    >
                      رفض
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-[#334155]">إجراءات سريعة</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white justify-start">
                <Plus className="h-4 w-4 ml-2" />
                إضافة سائق جديد
              </Button>
              <Button
                variant="outline"
                className="w-full border-[#0ea5e9] text-[#0ea5e9] hover:bg-[#0ea5e9] hover:text-white justify-start bg-transparent"
              >
                <TrendingUp className="h-4 w-4 ml-2" />
                عرض التقارير
              </Button>
              <Button
                variant="outline"
                className="w-full border-gray-300 text-gray-600 hover:bg-gray-100 justify-start bg-transparent"
              >
                <AlertTriangle className="h-4 w-4 ml-2" />
                إدارة التنبيهات
              </Button>
            </CardContent>
          </Card>

          {/* System Status */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-[#334155]">حالة النظام</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">خوادم التطبيق</span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-600">متصل</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">قاعدة البيانات</span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-600">متصل</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">خدمة التتبع</span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-600">متصل</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">نظام الدفع</span>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  <span className="text-sm text-yellow-600">صيانة</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
