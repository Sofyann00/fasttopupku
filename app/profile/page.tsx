"use client";

import { useUser } from "@/contexts/user-context";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BlockiesAvatar } from "../../components/ui/blockies-avatar";
import { Package, Clock, CheckCircle2, XCircle, AlertCircle, User, Building2, CreditCard } from "lucide-react";
import { Order } from "@/lib/types";
import { RedeemCode } from "@/components/redeem-code"

export default function ProfilePage() {
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const { user, isLoading } = useUser();
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      if (!isLoading && !user) {
        router.push("/login");
        return;
      }
    }, 1000);

    return () => clearTimeout(redirectTimer);
  }, [user, router, isLoading]);

  const maskBankAccount = (accountNumber: string) => {
    if (!accountNumber) return '';
    const length = accountNumber.length;
    const visibleLength = Math.floor(length / 2);
    const maskedLength = length - visibleLength;
    const visiblePart = accountNumber.slice(0, visibleLength);
    const maskedPart = '*'.repeat(maskedLength);
    return visiblePart + maskedPart;
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#f77a0e] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }
  
  if (!user) {
    return null;
  }

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'failed':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-[#f77a0e]/10 flex items-center justify-center">
                <User className="w-12 h-12 text-[#f77a0e]" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[#f77a0e] text-white text-xs px-2 py-1 rounded-full">
                Member
              </div>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{user?.name}</h1>
              <p className="text-gray-600 mb-4">{user?.email}</p>
              <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                <div className="bg-gray-50 rounded-xl px-4 py-2">
                  <p className="text-sm text-gray-600">Phone Number</p>
                  <p className="text-lg font-semibold text-gray-900">{user?.phoneNumber}</p>
                </div>
                <div className="bg-gray-50 rounded-xl px-4 py-2">
                  <p className="text-sm text-gray-600">Bank Name</p>
                  <p className="text-lg font-semibold text-gray-900">{user?.bankName}</p>
                </div>
                <div className="bg-gray-50 rounded-xl px-4 py-2">
                  <p className="text-sm text-gray-600">Bank Account</p>
                  <p className="text-lg font-semibold text-gray-900">{maskBankAccount(user?.bankAccountNumber || '')}</p>
                </div>
                <div className="bg-gray-50 rounded-xl px-4 py-2">
                  <p className="text-sm text-gray-600">Total Orders</p>
                  <p className="text-lg font-semibold text-gray-900">{orders.length}</p>
                </div>
                <div className="bg-gray-50 rounded-xl px-4 py-2">
                  <p className="text-sm text-gray-600">Points</p>
                  <p className="text-lg font-semibold text-[#f77a0e]">{points}</p>
                </div>
                {user?.email === 'administrator@gmail.com' && (
                  <button
                    onClick={() => router.push('/dashboard')}
                    className="bg-[#f77a0e] text-white px-6 py-2 rounded-xl hover:bg-[#f77a0e]/90 transition-colors"
                  >
                    Dashboard
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Redeem Code Section */}
        <div className="mb-8">
          <RedeemCode onPointsUpdate={(newPoints) => setPoints(prev => prev + newPoints)} />
        </div>

        {/* Orders Section */}
        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="bg-white p-1 rounded-xl shadow-sm border border-gray-100">
            <TabsTrigger 
              value="orders"
              className="data-[state=active]:bg-[#f77a0e] data-[state=active]:text-white rounded-lg px-6 py-2.5"
            >
              <Package className="w-5 h-5 mr-2" />
              Orders
            </TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="space-y-4">
            {orders.length === 0 ? (
              <Card className="bg-white border-gray-100 shadow-lg">
                <CardContent className="py-12">
                  <div className="flex flex-col items-center gap-4">
                    <Package className="w-12 h-12 text-gray-400" />
                    <p className="text-gray-500 text-lg">No orders yet</p>
                    <button 
                      onClick={() => router.push('/')}
                      className="mt-4 px-6 py-2 bg-[#f77a0e] text-white rounded-xl hover:bg-[#f77a0e]/90 transition-colors duration-200"
                    >
                      Start Shopping
                    </button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              orders.map((order) => (
                <Card key={order.id} className="bg-white border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-200">
                  <CardHeader className="border-b border-gray-100">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl font-bold text-gray-900">
                        Order #{order.id}
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(order.status)}
                        <span className="text-sm font-medium text-gray-600">
                          {order.status}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-500">Product</p>
                          <p className="font-medium text-gray-900">{order.productName}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Item</p>
                          <p className="font-medium text-gray-900">{order.itemName}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-500">Date</p>
                          <p className="font-medium text-gray-900">
                            {new Date(order.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Total Amount</p>
                          <p className="text-xl font-bold text-[#f77a0e]">
                            Rp {order.total.toLocaleString("id-ID")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
