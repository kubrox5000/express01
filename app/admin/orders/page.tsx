"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Search, Filter, Eye, MapPin, User, Truck, Package, Clock, CheckCircle, AlertCircle } from "lucide-react"

export default function AdminOrdersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [cityFilter, setCityFilter] = useState("all")

  const orders = [
    {
      id: "ORD-001",
      orderNumber: "EXP-2024-001",
      sellerName: "متجر الأناقة المغربية",
      customerName: "أحمد محمد",
      customerPhone: "+212 661-234567",
      customerCity: "الدار البيضاء",
      packageDescription: "ملابس رجالية - 3 قطع",
      packageValue: 450,
      deliveryFee: 25,
      codAmount: 475,
      status: "pending",
      driverName: null,
      createdAt: "2024-03-14 10:30",
      estimatedDelivery: "2024-03-17",
    },
    {
      id: "ORD-002",
      orderNumber: "EXP-2024-002",
      sellerName: "مستحضرات الجمال",
      customerName: "فاطمة الزهراء",
      customerPhone: "+212 662-345678",
      customerCity: "الرباط",
      packageDescription: "مستحضرات تجميل",
      packageValue: 180,
      deliveryFee: 30,
      codAmount: 210,
      status: "in_transit",
      driverName: "محمد الإدريسي",
      createdAt: "2024-03-14 09:15",
      estimatedDelivery: "2024-03-16",
    },
    {
      id: "ORD-003",
      orderNumber: "EXP-2024-003",
      sellerName: "مكتبة المعرفة",
      customerName: "يوسف العلوي",
      customerPhone: "+212 663-456789",
      customerCity: "فاس",
      packageDescription: "كتب ومجلات",
      packageValue: 120,
      deliveryFee: 35,
      codAmount: 155,
      status: "delivered",
      driverName: "عبد الرحمن الكتاني",
      createdAt: "2024-03-13 14:20",
      estimatedDelivery: "2024-03-15",
    },
  ]

  const availableDrivers = [
    { id: "1", name: "محمد الإدريسي", city: "الدار البيضاء", status: "available" },
    { id: "2", name: "عبد الرحمن الكتاني", city: "الرباط", status: "available" },
    { id: "3", name: "يوسف البوعناني", city: "فاس", status: "available" },
    { id: "4", name: "خالد المرابط", city: "مراكش", status: "available" },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">في الانتظار</Badge>
      case "confirmed":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">مؤكد</Badge>
      case "picked_up":
        return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">تم الاستلام</Badge>
      case "in_transit":
        return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">في الطريق</Badge>
      case "delivered":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">تم التوصيل</Badge>
      case "cancelled":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">ملغي</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">غير معروف</Badge>
    }
  }

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.sellerName.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || order.status === statusFilter
    const matchesCity = cityFilter === "all" || order.customerCity === cityFilter
    return matchesSearch && matchesStatus && matchesCity
  })

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#334155] mb-2">إدارة الطلبات</h1>
        <p className="text-gray-600">مراقبة وإدارة جميع طلبات التوصيل على المنصة</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        <Card className="border-none shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">إجمالي الطلبات</p>
                <p className="text-2xl font-bold text-[#334155]">2,847</p>
              </div>
              <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center">
                <Package className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">في الانتظار</p>
                <p className="text-2xl font-bold text-[#334155]">156</p>
              </div>
              <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">في الطريق</p>
                <p className="text-2xl font-bold text-[#334155]">234</p>
              </div>
              <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">مكتملة</p>
                <p className="text-2xl font-bold text-[#334155]">2,398</p>
              </div>
              <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">ملغية</p>
                <p className="text-2xl font-bold text-[#334155]">59</p>
              </div>
              <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="border-none shadow-lg mb-8">
        <CardHeader>
          <CardTitle className="text-xl text-[#334155]">البحث والتصفية</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="البحث برقم الطلب، العميل، أو البائع..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10"
                />
              </div>
            </div>
            <div className="w-full md:w-48">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="تصفية بالحالة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع الحالات</SelectItem>
                  <SelectItem value="pending">في الانتظار</SelectItem>
                  <SelectItem value="confirmed">مؤكد</SelectItem>
                  <SelectItem value="picked_up">تم الاستلام</SelectItem>
                  <SelectItem value="in_transit">في الطريق</SelectItem>
                  <SelectItem value="delivered">تم التوصيل</SelectItem>
                  <SelectItem value="cancelled">ملغي</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full md:w-48">
              <Select value={cityFilter} onValueChange={setCityFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="تصفية بالمدينة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع المدن</SelectItem>
                  <SelectItem value="الدار البيضاء">الدار البيضاء</SelectItem>
                  <SelectItem value="الرباط">الرباط</SelectItem>
                  <SelectItem value="فاس">فاس</SelectItem>
                  <SelectItem value="مراكش">مراكش</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white">
              <Filter className="h-4 w-4 ml-2" />
              تطبيق التصفية
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Orders Table */}
      <Card className="border-none shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-[#334155]">قائمة الطلبات</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">رقم الطلب</TableHead>
                <TableHead className="text-right">البائع</TableHead>
                <TableHead className="text-right">العميل</TableHead>
                <TableHead className="text-right">المدينة</TableHead>
                <TableHead className="text-right">المبلغ</TableHead>
                <TableHead className="text-right">الحالة</TableHead>
                <TableHead className="text-right">السائق</TableHead>
                <TableHead className="text-right">تاريخ الإنشاء</TableHead>
                <TableHead className="text-right">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.orderNumber}</TableCell>
                  <TableCell>{order.sellerName}</TableCell>
                  <TableCell>{order.customerName}</TableCell>
                  <TableCell>{order.customerCity}</TableCell>
                  <TableCell>{order.codAmount} درهم</TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell>{order.driverName || "غير محدد"}</TableCell>
                  <TableCell>{order.createdAt}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" variant="outline" className="bg-transparent">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                          <DialogHeader>
                            <DialogTitle>تفاصيل الطلب {order.orderNumber}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-6 py-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              <div>
                                <h3 className="font-semibold text-[#334155] mb-3 flex items-center gap-2">
                                  <User className="h-4 w-4" />
                                  معلومات العميل
                                </h3>
                                <div className="space-y-2 text-sm">
                                  <p>
                                    <span className="font-medium">الاسم:</span> {order.customerName}
                                  </p>
                                  <p>
                                    <span className="font-medium">الهاتف:</span> {order.customerPhone}
                                  </p>
                                  <p>
                                    <span className="font-medium">المدينة:</span> {order.customerCity}
                                  </p>
                                </div>
                              </div>
                              <div>
                                <h3 className="font-semibold text-[#334155] mb-3 flex items-center gap-2">
                                  <Package className="h-4 w-4" />
                                  معلومات الطرد
                                </h3>
                                <div className="space-y-2 text-sm">
                                  <p>
                                    <span className="font-medium">الوصف:</span> {order.packageDescription}
                                  </p>
                                  <p>
                                    <span className="font-medium">القيمة:</span> {order.packageValue} درهم
                                  </p>
                                  <p>
                                    <span className="font-medium">رسوم التوصيل:</span> {order.deliveryFee} درهم
                                  </p>
                                  <p>
                                    <span className="font-medium">المبلغ الإجمالي:</span> {order.codAmount} درهم
                                  </p>
                                </div>
                              </div>
                              <div>
                                <h3 className="font-semibold text-[#334155] mb-3 flex items-center gap-2">
                                  <Truck className="h-4 w-4" />
                                  معلومات التوصيل
                                </h3>
                                <div className="space-y-2 text-sm">
                                  <p>
                                    <span className="font-medium">الحالة:</span> {getStatusBadge(order.status)}
                                  </p>
                                  <p>
                                    <span className="font-medium">السائق:</span> {order.driverName || "غير محدد"}
                                  </p>
                                  <p>
                                    <span className="font-medium">التوصيل المتوقع:</span> {order.estimatedDelivery}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Driver Assignment */}
                            {order.status === "pending" && (
                              <div className="border-t pt-6">
                                <h3 className="font-semibold text-[#334155] mb-3">تعيين سائق</h3>
                                <div className="flex gap-4">
                                  <Select>
                                    <SelectTrigger className="flex-1">
                                      <SelectValue placeholder="اختر سائق متاح" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {availableDrivers.map((driver) => (
                                        <SelectItem key={driver.id} value={driver.id}>
                                          {driver.name} - {driver.city}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <Button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white">تعيين السائق</Button>
                                </div>
                              </div>
                            )}
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button size="sm" variant="outline" className="bg-transparent">
                        <MapPin className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
