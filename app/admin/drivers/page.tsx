"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Filter, Eye, MapPin, Plus, Truck, Star, MoreHorizontal } from "lucide-react"

export default function AdminDriversPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const drivers = [
    {
      id: "1",
      name: "محمد الإدريسي",
      email: "mohamed@example.com",
      phone: "+212 661-123456",
      city: "الدار البيضاء",
      status: "available",
      vehicle: "دراجة نارية",
      plate: "A-12345",
      rating: 4.8,
      deliveries: 342,
      joinDate: "2024-01-10",
    },
    {
      id: "2",
      name: "عبد الرحمن الكتاني",
      email: "abderrahman@example.com",
      phone: "+212 662-234567",
      city: "الرباط",
      status: "busy",
      vehicle: "سيارة صغيرة",
      plate: "B-67890",
      rating: 4.6,
      deliveries: 198,
      joinDate: "2024-02-15",
    },
    {
      id: "3",
      name: "يوسف البوعناني",
      email: "youssef@example.com",
      phone: "+212 663-345678",
      city: "فاس",
      status: "offline",
      vehicle: "دراجة نارية",
      plate: "C-11111",
      rating: 4.9,
      deliveries: 456,
      joinDate: "2023-12-05",
    },
    {
      id: "4",
      name: "خالد المرابط",
      email: "khalid@example.com",
      phone: "+212 664-456789",
      city: "مراكش",
      status: "available",
      vehicle: "شاحنة صغيرة",
      plate: "D-22222",
      rating: 4.7,
      deliveries: 289,
      joinDate: "2024-01-20",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "available":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">متاح</Badge>
      case "busy":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">مشغول</Badge>
      case "offline":
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">غير متصل</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">غير معروف</Badge>
    }
  }

  const filteredDrivers = drivers.filter((driver) => {
    const matchesSearch =
      driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || driver.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#334155] mb-2">إدارة السائقين</h1>
          <p className="text-gray-600">إدارة ومراقبة جميع السائقين على المنصة</p>
        </div>
        <Button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white">
          <Plus className="h-4 w-4 ml-2" />
          إضافة سائق جديد
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="border-none shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">إجمالي السائقين</p>
                <p className="text-2xl font-bold text-[#334155]">89</p>
              </div>
              <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center">
                <Truck className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">متاحين الآن</p>
                <p className="text-2xl font-bold text-[#334155]">34</p>
              </div>
              <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center">
                <Truck className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">في مهمة</p>
                <p className="text-2xl font-bold text-[#334155]">28</p>
              </div>
              <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center">
                <Truck className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">متوسط التقييم</p>
                <p className="text-2xl font-bold text-[#334155]">4.7</p>
              </div>
              <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center">
                <Star className="h-6 w-6 text-white" />
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
                  placeholder="البحث بالاسم أو البريد الإلكتروني..."
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
                  <SelectItem value="available">متاح</SelectItem>
                  <SelectItem value="busy">مشغول</SelectItem>
                  <SelectItem value="offline">غير متصل</SelectItem>
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

      {/* Drivers Table */}
      <Card className="border-none shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-[#334155]">قائمة السائقين</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">اسم السائق</TableHead>
                <TableHead className="text-right">البريد الإلكتروني</TableHead>
                <TableHead className="text-right">الهاتف</TableHead>
                <TableHead className="text-right">المدينة</TableHead>
                <TableHead className="text-right">الحالة</TableHead>
                <TableHead className="text-right">المركبة</TableHead>
                <TableHead className="text-right">اللوحة</TableHead>
                <TableHead className="text-right">التقييم</TableHead>
                <TableHead className="text-right">التوصيلات</TableHead>
                <TableHead className="text-right">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDrivers.map((driver) => (
                <TableRow key={driver.id}>
                  <TableCell className="font-medium">{driver.name}</TableCell>
                  <TableCell>{driver.email}</TableCell>
                  <TableCell>{driver.phone}</TableCell>
                  <TableCell>{driver.city}</TableCell>
                  <TableCell>{getStatusBadge(driver.status)}</TableCell>
                  <TableCell>{driver.vehicle}</TableCell>
                  <TableCell>{driver.plate}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span>{driver.rating}</span>
                    </div>
                  </TableCell>
                  <TableCell>{driver.deliveries}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline" className="bg-transparent">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-transparent">
                        <MapPin className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-transparent">
                        <MoreHorizontal className="h-4 w-4" />
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
