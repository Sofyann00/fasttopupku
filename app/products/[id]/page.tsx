"use client"

import { useEffect, useState } from "react"
import { useCart } from "@/contexts/cart-context"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { products, formatPrice } from "@/lib/data"
import { notFound } from "next/navigation"
import { cn } from "@/lib/utils"
import { useUser } from "@/contexts/user-context"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { useQRCode } from "next-qrcode"
import { Product, Item } from "@/lib/types"
import { Zap, CheckCircle2, Smartphone, ArrowRight, Shield } from "lucide-react"

export default function ProductPage({ params }: { params: { id: string } }) {
  const { addItem } = useCart()
  const { toast } = useToast()
  const { user, addOrder } = useUser()
  const { Canvas } = useQRCode()
  const [selectedItem, setSelectedItem] = useState<any | null>(null)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null)
  const [showPaymentDialog, setShowPaymentDialog] = useState(false)
  const [isSendingEmail, setIsSendingEmail] = useState(false)
  const [paymentData, setPaymentData] = useState<any>(null)
  const [isLoadingPayment, setIsLoadingPayment] = useState(false)
  const [isCheckingPayment, setIsCheckingPayment] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)

  const product: Product | undefined = products.find((p: Product) => p.id === parseInt(params.id))

  if (!product) {
    notFound()
  }

  const handleAddToCart = async () => {
    if (!user) {
      toast({
        title: "Login Diperlukan",
        description: "Silakan login untuk melanjutkan pembelian.",
        variant: "destructive"
      })
      return
    }

    if (!selectedItem || !phoneNumber || !selectedPayment) {
      toast({
        title: "Data Belum Lengkap",
        description: "Pilih paket, masukkan nomor telepon, dan pilih metode pembayaran.",
        variant: "destructive"
      })
      return
    }

    // Validate phone number format
    // const phoneRegex = /^(\+62|62|0)8[1-9][0-9]{6,9}$/
    // if (!phoneRegex.test(phoneNumber)) {
    //   toast({
    //     title: "Nomor Telepon Tidak Valid",
    //     description: "Masukkan nomor telepon Indonesia yang valid (contoh: 08123456789)",
    //     variant: "destructive"
    //   })
    //   return
    // }

    setIsLoadingPayment(true)
    setShowPaymentDialog(true);
    // try {
    //   const response = await fetch('/api/payment', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       outputCurrency: "IDR",
    //       reference: `order-${Date.now()}`,
    //       inputCurrency: "IDR",
    //       balanceType: "fiat",
    //       paymentMethod: selectedPayment,
    //       inputAmount: selectedItem.price
    //     })
    //   });

    //   const data = await response.json();

    //   if (!response.ok) {
    //     throw new Error(data.message || 'Failed to create payment');
    //   }

    //   console.log(data.data)

    //   setPaymentData(data.data);
    //   setShowPaymentDialog(true);
    // } catch (error) {
    //   toast({
    //     title: "Terjadi Kesalahan",
    //     description: error instanceof Error ? error.message : "Gagal memproses pembayaran",
    //     variant: "destructive"
    //   });
    // } finally {
    //   setIsLoadingPayment(false)
    // }
  }

  const handlePaymentComplete = async () => {
    if (!user?.email) {
      toast({
        title: "Error",
        description: "Silakan login untuk menyelesaikan pembelian.",
        variant: "destructive"
      })
      return
    }

    setIsSendingEmail(true)
    
    try {
      // Add to cart
      addItem({
        ...product,
        price: selectedItem.price,
        quantity: 1
      })

      // Add order to user's orders
      addOrder({
        items: [{
          id: selectedItem.id.toString(),
          name: selectedItem.name,
          price: selectedItem.price,
          quantity: 1,
          image: selectedItem.iconUrl || product.image
        }],
        total: selectedItem.price,
        status: "completed",
        productName: product.name,
        itemName: selectedItem.name
      })

      // Send confirmation email via API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: user.email,
          productName: product.name,
          itemName: selectedItem.name,
          price: selectedItem.price,
          phoneNumber: phoneNumber
        }),
      });

      const data = await response.json();

      if (!data.success) {
        toast({
          title: "Peringatan Email",
          description: "Gagal mengirim email konfirmasi, tapi pembelian berhasil.",
          variant: "destructive"
        })
      }
      
      setShowPaymentDialog(false)
      toast({
        title: "Pembelian Berhasil",
        description: `${selectedItem.name} untuk ${phoneNumber} sedang diproses. Kami akan mengirim notifikasi via email.`,
      })
    } catch (error) {
      toast({
        title: "Terjadi Kesalahan",
        description: "Gagal memproses pembelian. Silakan coba lagi.",
        variant: "destructive"
      })
    } finally {
      setIsSendingEmail(false)
    }
  }

  const isElectricity = product.category === 'token-listrik' || product.category === 'tagihan-listrik';
  const isPulsa = product.category === 'pulsa';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Product Header */}
      <div className="relative bg-gradient-to-br from-white via-gray-50 to-white border-b border-gray-200/50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-orange-400/10 to-pink-400/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Product Logo */}
            <div className="relative group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden border-2 border-white shadow-2xl group-hover:shadow-3xl transform group-hover:scale-105 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-pink-500/20"></div>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Product Info */}
            <div className="text-center lg:text-left space-y-6 flex-1">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full border border-orange-200/50">
                  {isElectricity ? (
                    <Zap className="w-4 h-4 text-orange-600" />
                  ) : (
                    <Smartphone className="w-4 h-4 text-orange-600" />
                  )}
                  <span className="text-sm font-medium text-orange-800">
                    {isElectricity ? 'Token Listrik' : 'Pulsa Digital'}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  {product.name}
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  {product.description}
                </p>
              </div>
              
              {/* Status Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-green-200/50">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-green-700">Proses Instan</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-200/50">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-blue-700">24/7 Support</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-200/50">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-purple-700">Aman & Terpercaya</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Items Grid */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 p-8">
              <div className="mb-8 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                    {isElectricity ? (
                      <Zap className="w-6 h-6 text-white" />
                    ) : (
                      <Smartphone className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      Pilih Nominal {product.name}
                    </h2>
                    <p className="text-sm text-gray-600">Pilih paket sesuai kebutuhan Anda</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.items?.map((item: Item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      console.log('Selected Item:', item);
                      setSelectedItem({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        priceDiscount: item.priceDiscount,
                        iconUrl: item.iconUrl
                      })
                    }}
                    className={cn(
                      "group relative p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1",
                      selectedItem?.id === item.id
                        ? "border-orange-300 bg-gradient-to-br from-orange-50 to-pink-50 shadow-xl scale-105"
                        : "border-gray-200 hover:border-orange-200 bg-white/50 backdrop-blur-sm"
                    )}
                  >
                    {/* Selection indicator */}
                    {selectedItem?.id === item.id && (
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                    )}
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300",
                          selectedItem?.id === item.id
                            ? "bg-gradient-to-br from-orange-500 to-pink-500 shadow-lg"
                            : "bg-gray-100 group-hover:bg-gradient-to-br group-hover:from-orange-100 group-hover:to-pink-100"
                        )}>
                          {isElectricity ? (
                            <Zap className={cn("w-6 h-6", selectedItem?.id === item.id ? "text-white" : "text-gray-600 group-hover:text-orange-600")} />
                          ) : (
                            <Smartphone className={cn("w-6 h-6", selectedItem?.id === item.id ? "text-white" : "text-gray-600 group-hover:text-orange-600")} />
                          )}
                        </div>
                        <div className="text-left flex-1">
                          <p className="font-bold text-gray-900 text-lg group-hover:text-orange-600 transition-colors">{item.name}</p>
                          <p className="text-sm text-gray-500">{isElectricity ? 'Token Listrik PLN' : 'Pulsa Digital'}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <p className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                              {formatPrice(item.price)}
                            </p>
                            {item.priceDiscount && item.priceDiscount > 0 && (
                              <div className="px-2 py-1 bg-gradient-to-r from-red-100 to-pink-100 rounded-full">
                                <span className="text-xs font-semibold text-red-600">
                                  -{Math.round(((item.priceDiscount - item.price) / item.priceDiscount) * 100)}%
                                </span>
                              </div>
                            )}
                          </div>
                          {item.priceDiscount && item.priceDiscount > 0 && (
                            <p className="text-sm text-gray-400 line-through">
                              {formatPrice(item.priceDiscount)}
                            </p>
                          )}
                        </div>
                        {item.priceDiscount && item.priceDiscount > 0 && (
                          <div className="text-right">
                            <p className="text-xs text-gray-500">Hemat</p>
                            <p className="text-sm font-semibold text-green-600">
                              {formatPrice(item.priceDiscount - item.price)}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Order Information */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 p-8 sticky top-6">
              <div className="mb-8 space-y-2">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Informasi Pesanan
                </h2>
                <p className="text-sm text-gray-600">Lengkapi data untuk melanjutkan</p>
              </div>

              <div className="space-y-8">
                {/* Phone Number Input */}
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-gray-700">
                    {isElectricity ? 'Nomor Meteran PLN' : 'Nomor Telepon'}
                  </label>
                  <div className="relative">
                    <Input
                      type="tel"
                      placeholder={isElectricity ? "Contoh: 123456789012" : "Contoh: 08123456789"}
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full px-4 py-3 bg-white/50 border-2 border-gray-200 rounded-2xl focus:border-orange-300 focus:ring-4 focus:ring-orange-100/50 transition-all duration-300"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      {isElectricity ? (
                        <Zap className="w-5 h-5 text-gray-400" />
                      ) : (
                        <Smartphone className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {isElectricity 
                      ? 'Masukkan nomor meteran PLN 12 digit yang tertera pada meteran listrik'
                      : 'Masukkan nomor telepon yang akan diisi pulsa'
                    }
                  </p>
                </div>

                {/* Selected Item Display */}
                {selectedItem && (
                  <div className="relative p-6 bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl border-2 border-orange-200/50 shadow-lg">
                    <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-orange-800">Paket Dipilih</h4>
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="font-bold text-gray-900">{selectedItem.name}</p>
                          <p className="text-sm text-gray-600">{product.name}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                            {formatPrice(selectedItem.price)}
                          </p>
                          {selectedItem.priceDiscount && selectedItem.priceDiscount > 0 && (
                            <p className="text-xs text-gray-400 line-through">
                              {formatPrice(selectedItem.priceDiscount)}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Payment Methods */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900">Metode Pembayaran</h3>
                  
                  {/* QRIS */}
                  <button
                    onClick={() => setSelectedPayment('qris')}
                    className={cn(
                      "group w-full p-5 rounded-2xl border-2 flex items-center justify-between transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5",
                      selectedPayment === 'qris'
                        ? "border-orange-300 bg-gradient-to-br from-orange-50 to-pink-50 shadow-lg"
                        : "border-gray-200 hover:border-orange-200 bg-white/50"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <Image
                          src="/qris_img.png"
                          alt="QRIS"
                          width={60}
                          height={24}
                          className="object-contain"
                        />
                        {selectedPayment === 'qris' && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="w-2.5 h-2.5 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">QRIS</p>
                        <p className="text-xs text-gray-500">Scan & Pay dengan mudah</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900">
                        {formatPrice(selectedItem?.price ?? 0)}
                      </p>
                      <p className="text-xs text-gray-500">Instan</p>
                    </div>
                  </button>

                  {/* Virtual Account */}
                  <button
                    onClick={() => setSelectedPayment('va')}
                    className={cn(
                      "group w-full p-5 rounded-2xl border-2 flex items-center justify-between transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5",
                      selectedPayment === 'va'
                        ? "border-orange-300 bg-gradient-to-br from-orange-50 to-pink-50 shadow-lg"
                        : "border-gray-200 hover:border-orange-200 bg-white/50"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-14 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                          <span className="text-white text-xs font-bold">VA</span>
                        </div>
                        {selectedPayment === 'va' && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="w-2.5 h-2.5 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">Virtual Account</p>
                        <p className="text-xs text-gray-500">Transfer via mobile banking</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900">
                        {formatPrice(selectedItem?.price ?? 0)}
                      </p>
                      <p className="text-xs text-gray-500">Aman</p>
                    </div>
                  </button>
                </div>

                {/* Payment Instructions */}
                {selectedPayment && (
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Cara Pembayaran:</h4>
                    {selectedPayment === 'qris' ? (
                      <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                        <li>Scan QR Code yang muncul setelah konfirmasi</li>
                        <li>Pilih aplikasi e-wallet atau mobile banking</li>
                        <li>Masukkan nominal pembayaran</li>
                        <li>Konfirmasi pembayaran</li>
                        <li>Pulsa akan masuk otomatis setelah pembayaran berhasil</li>
                      </ol>
                    ) : (
                      <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                        <li>Nomor Virtual Account akan muncul setelah konfirmasi</li>
                        <li>Buka aplikasi mobile banking</li>
                        <li>Pilih menu Transfer ke Virtual Account</li>
                        <li>Masukkan nomor Virtual Account</li>
                        <li>Konfirmasi pembayaran</li>
                        <li>Pulsa akan masuk otomatis setelah pembayaran berhasil</li>
                      </ol>
                    )}
                  </div>
                )}

                <div className="space-y-4">
                  {/* Security Notice */}
                  <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-green-800">Transaksi Aman</p>
                        <p className="text-xs text-green-600">Data Anda dilindungi enkripsi SSL</p>
                      </div>
                    </div>
                  </div>

                  {/* Purchase Button */}
                  <Button 
                    size="lg" 
                    className="group w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white py-4 px-6 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-0"
                    onClick={handleAddToCart}
                    disabled={!selectedItem || !phoneNumber || !selectedPayment || isLoadingPayment}
                  >
                    {isLoadingPayment ? (
                      <>
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Memproses Pembayaran...
                        </div>
                      </>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        <span>Beli Sekarang</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </Button>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="p-3 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200/50">
                      <p className="text-xs text-gray-500">Proses</p>
                      <p className="font-bold text-orange-600">30 Detik</p>
                    </div>
                    <div className="p-3 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200/50">
                      <p className="text-xs text-gray-500">Success Rate</p>
                      <p className="font-bold text-green-600">99.9%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">Konfirmasi Pembayaran</DialogTitle>
            <DialogDescription className="text-gray-600">
              Selesaikan pembayaran untuk melanjutkan
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-2xl font-bold text-blue-600">
                {formatPrice(selectedItem?.price ?? 0)}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {selectedItem?.name} untuk {phoneNumber}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {product.name}
              </p>
            </div>

            {selectedPayment === 'qris' && paymentData?.paymentFiat?.qrData ? (
              <div className="flex flex-col items-center space-y-4">
                <div className="relative w-64 h-64 border rounded-lg p-4 bg-white">
                  <Canvas
                    text={paymentData.paymentFiat.qrData}
                    options={{
                      errorCorrectionLevel: 'M',
                      margin: 3,
                      scale: 4,
                      width: 256,
                      color: {
                        dark: '#000000FF',
                        light: '#FFFFFFFF',
                      },
                    }}
                  />
                </div>
                <p className="text-sm text-gray-600 text-center">
                  Scan QR code menggunakan aplikasi pembayaran favorit Anda
                </p>
                <div className="text-sm text-gray-500 text-center">
                  <p>Berlaku sampai: {new Date(paymentData.expiredAt).toLocaleString('id-ID')}</p>
                </div>
              </div>
            ) : selectedPayment === 'va' && paymentData?.paymentFiat ? (
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Nomor Virtual Account:</p>
                  <p className="text-lg font-mono font-semibold text-gray-900">{paymentData.paymentFiat.accountNumber}</p>
                  <p className="text-sm text-gray-600 mt-1">Bank: {paymentData.paymentFiat.bankName}</p>
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>1. Buka aplikasi mobile banking Anda</li>
                  <li>2. Pilih menu Transfer ke Virtual Account</li>
                  <li>3. Masukkan nomor VA di atas</li>
                  <li>4. Konfirmasi dan selesaikan pembayaran</li>
                </ul>
                <div className="text-sm text-gray-500 text-center">
                  <p>Berlaku sampai: {new Date(paymentData.expiredAt).toLocaleString('id-ID')}</p>
                </div>
              </div>
            ) : null}

            <div className="flex justify-center gap-3 mt-6">
              <Button
                onClick={handlePaymentComplete}
                disabled={isSendingEmail}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                {isSendingEmail ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Memproses...
                  </>
                ) : (
                  "Saya sudah menyelesaikan pembayaran"
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
} 