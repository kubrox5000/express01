"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Filter, Eye, CheckCircle, XCircle, Clock, MoreHorizontal } from "lucide-react"

export default function AdminSellersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const sellers = [
    {
      id: "1",
      name: "متجر الأناقة المغربية",
      email: "elegance@example.com",
      phone: "+212 661-234567",
      city: "الدار البيضاء",
      status: "active",
      orders: 245,
      revenue: "45,670",
      joinDate: "2024-01-15",
    },
    {
      id: "2",
      name: "شركة التوزيع السريع",
      email: "distribution@example.com",
      phone: "+212 662-345678",
      city: "الرباط",
      status: "pending",
      orders: 0,
      revenue: "0",
      joinDate: "2024-03-10",
    },
    {
      id: "3",
      name: "متجر الحرف اليدوية",
      email: "crafts@example.com",
      phone: "+212 663-456789",
      city: "فاس",
      status: "suspended",
      orders: 89,
      revenue: "12,340",
      joinDate: "2024-02-20",
    },
    {
      id: "4",
      name: "مخبزة الأصالة",
      email: "bakery@example.com",
      phone: "+212 664-567890",
      city: "مراكش",
      status: "active",
      orders: 156,
      revenue: "23,450",
      joinDate: "2024-01-28",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">نشط</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">في الانتظار</Badge>
      case "suspended":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">معلق</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">غير معروف</Badge>
    }
  }

  const filteredSellers = sellers.filter((seller) => {
    const matchesSearch =
      seller.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      seller.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || seller.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#334155] mb-2">إدارة البائعين</h1>
        <p className="text-gray-600">إدارة ومراقبة جميع البائعين على المنصة</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="border-none shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">إجمالي البائعين</p>
                <p className="text-2xl font-bold text-[#334155]">1,247</p>
              </div>
              <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">البائعين النشطين</p>
                <p className="text-2xl font-bold text-[#334155]">1,089</p>
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
                <p className="text-sm font-medium text-gray-600 mb-1">في الانتظار</p>
                <p className="text-2xl font-bold text-[#334155]">23</p>
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
                <p className="text-sm font-medium text-gray-600 mb-1">معلقين</p>
                <p className="text-2xl font-bold text-[#334155]">135</p>
              </div>
              <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center">
                <XCircle className="h-6 w-6 text-white" />
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
                  <SelectItem value="active">نشط</SelectItem>
                  <SelectItem value="pending">في الانتظار</SelectItem>
                  <SelectItem value="suspended">معلق</SelectItem>
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

      {/* Sellers Table */}
      <Card className="border-none shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-[#334155]">قائمة البائعين</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">اسم البائع</TableHead>
                <TableHead className="text-right">البريد الإلكتروني</TableHead>
                <TableHead className="text-right">الهاتف</TableHead>
                <TableHead className="text-right">المدينة</TableHead>
                <TableHead className="text-right">الحالة</TableHead>
                <TableHead className="text-right">الطلبات</TableHead>
                <TableHead className="text-right">الإيرادات</TableHead>
                <TableHead className="text-right">تاريخ الانضمام</TableHead>
                <TableHead className="text-right">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSellers.map((seller) => (
                <TableRow key={seller.id}>
                  <TableCell className="font-medium">{seller.name}</TableCell>
                  <TableCell>{seller.email}</TableCell>
                  <TableCell>{seller.phone}</TableCell>
                  <TableCell>{seller.city}</TableCell>
                  <TableCell>{getStatusBadge(seller.status)}</TableCell>
                  <TableCell>{seller.orders}</TableCell>
                  <TableCell>{seller.revenue} درهم</TableCell>
                  <TableCell>{seller.joinDate}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline" className="bg-transparent">
                        <Eye className="h-4 w-4" />
                      </Button>
                      {seller.status === "pending" && (
                        <>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-red-300 text-red-600 hover:bg-red-50 bg-transparent"
                          >
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </>
                      )}
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
