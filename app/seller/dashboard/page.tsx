import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Package, TrendingUp, DollarSign, Clock, CheckCircle, AlertCircle, Plus, Eye } from "lucide-react"

export default function SellerDashboard() {
  const stats = [
    {
      title: "إجمالي الطلبات",
      value: "1,234",
      change: "+12%",
      changeType: "positive",
      icon: Package,
    },
    {
      title: "الطلبات المكتملة",
      value: "1,180",
      change: "+8%",
      changeType: "positive",
      icon: CheckCircle,
    },
    {
      title: "الإيرادات الشهرية",
      value: "45,670 درهم",
      change: "+15%",
      changeType: "positive",
      icon: DollarSign,
    },
    {
      title: "الطلبات المعلقة",
      value: "54",
      change: "-5%",
      changeType: "negative",
      icon: Clock,
    },
  ]

  const recentOrders = [
    {
      id: "ORD-001",
      customer: "أحمد محمد",
      amount: "250 درهم",
      status: "في الطريق",
      date: "اليوم، 2:30 مساءً",
    },
    {
      id: "ORD-002",
      customer: "فاطمة الزهراء",
      amount: "180 درهم",
      status: "تم التوصيل",
      date: "اليوم، 1:15 مساءً",
    },
    {
      id: "ORD-003",
      customer: "يوسف العلوي",
      amount: "320 درهم",
      status: "قيد المعالجة",
      date: "اليوم، 11:45 صباحاً",
    },
    {
      id: "ORD-004",
      customer: "خديجة بنعلي",
      amount: "95 درهم",
      status: "تم التوصيل",
      date: "أمس، 4:20 مساءً",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "تم التوصيل":
        return "text-green-600 bg-green-50"
      case "في الطريق":
        return "text-blue-600 bg-blue-50"
      case "قيد المعالجة":
        return "text-yellow-600 bg-yellow-50"
      default:
        return "text-gray-600 bg-gray-50"
    }
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#334155] mb-2">مرحباً بك في لوحة التحكم</h1>
        <p className="text-gray-600">إليك نظرة عامة على أداء متجرك اليوم</p>
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
                  <p
                    className={`text-sm font-medium ${
                      stat.changeType === "positive" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {stat.change} من الشهر الماضي
                  </p>
                </div>
                <div className="bg-[#2563eb] w-12 h-12 rounded-full flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders */}
        <div className="lg:col-span-2">
          <Card className="border-none shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl text-[#334155]">الطلبات الأخيرة</CardTitle>
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
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="font-semibold text-[#334155]">{order.id}</p>
                          <p className="text-sm text-gray-600">{order.customer}</p>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-[#334155]">{order.amount}</p>
                          <p className="text-sm text-gray-500">{order.date}</p>
                        </div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div>
          <Card className="border-none shadow-lg mb-6">
            <CardHeader>
              <CardTitle className="text-xl text-[#334155]">إجراءات سريعة</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white justify-start">
                <Plus className="h-4 w-4 ml-2" />
                إضافة طلب جديد
              </Button>
              <Button
                variant="outline"
                className="w-full border-[#0ea5e9] text-[#0ea5e9] hover:bg-[#0ea5e9] hover:text-white justify-start bg-transparent"
              >
                <Package className="h-4 w-4 ml-2" />
                إدارة المخزون
              </Button>
              <Button
                variant="outline"
                className="w-full border-gray-300 text-gray-600 hover:bg-gray-100 justify-start bg-transparent"
              >
                <TrendingUp className="h-4 w-4 ml-2" />
                عرض التقارير
              </Button>
            </CardContent>
          </Card>

          {/* Alerts */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-[#334155]">تنبيهات مهمة</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-yellow-800">طلبات معلقة</p>
                  <p className="text-xs text-yellow-700">لديك 3 طلبات تحتاج إلى مراجعة</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-blue-800">تحديث النظام</p>
                  <p className="text-xs text-blue-700">ميزات جديدة متاحة في لوحة التحكم</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
