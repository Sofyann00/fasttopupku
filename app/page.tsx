"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone, Zap, Shield, Users } from "lucide-react"
import Link from "next/link"
import { products, formatPrice } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useRef, useState } from "react"

export default function Home() {
  const [openQna, setOpenQna] = useState<number | null>(null);

  const servicesRef = useRef<HTMLDivElement>(null)
  
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const features = [
    {
      name: 'Token Listrik PLN',
      description: 'Beli token listrik prabayar dengan berbagai nominal, proses instan langsung masuk meteran.',  
      icon: <Zap className="h-8 w-8 text-orange-400" />,
      gradient: 'from-orange-400 to-red-500',
      bgGradient: 'from-orange-50 to-red-50',
    },
    {
      name: 'Pulsa Semua Operator',
      description: 'Isi pulsa untuk semua operator: Telkomsel, XL, Indosat, THREE, Axis, Smartfren, by.U.',
      icon: <Smartphone className="h-8 w-8 text-emerald-400" />,
      gradient: 'from-emerald-400 to-teal-500',
      bgGradient: 'from-emerald-50 to-teal-50',
    },
    {
      name: 'Pembayaran Aman',
      description: 'Berbelanja dengan tenang menggunakan sistem pembayaran yang aman dan terpercaya.',
      icon: <Shield className="h-8 w-8 text-violet-400" />,
      gradient: 'from-violet-400 to-purple-500',
      bgGradient: 'from-violet-50 to-purple-50',
    },
    {
      name: 'Layanan 24/7',
      description: 'Tim support kami siap membantu Anda kapan saja untuk masalah layanan PPOB.',
      icon: <Users className="h-8 w-8 text-pink-400" />,
      gradient: 'from-pink-400 to-rose-500',
      bgGradient: 'from-pink-50 to-rose-50',
    },
  ];

  const qnaList = [
    {
      question: "Layanan apa saja yang tersedia di fasttopupku?",
      answer: "Kami menyediakan Token Listrik PLN, Pembayaran Tagihan Listrik, dan Pulsa untuk semua operator (Telkomsel, XL, Indosat, THREE, Axis, Smartfren, by.U). Semua layanan 100% resmi dan terpercaya.",
    },
    {
      question: "Bagaimana cara beli token listrik dan pulsa?", 
      answer: "Pilih layanan yang diinginkan (Token Listrik/Pulsa), masukkan nomor meteran atau nomor HP, pilih nominal, dan selesaikan pembayaran. Semua transaksi diproses secara instan!",
    },
    {
      question: "Apakah semua operator pulsa tersedia?",
      answer: "Ya, kami melayani pulsa untuk semua operator besar di Indonesia: Telkomsel, XL Axiata, Indosat Ooredoo, THREE, Axis, Smartfren, dan by.U dengan berbagai nominal.",
    },
    {
      question: "Bagaimana jika token listrik/pulsa tidak masuk?",
      answer: "Jika token listrik tidak masuk dalam 5 menit atau pulsa tidak masuk dalam 3 menit, silakan hubungi customer service kami dengan bukti transaksi. Kami akan segera membantu menyelesaikan masalah.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Token Listrik & Pulsa Instan
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Beli token listrik PLN dan isi pulsa semua operator. Cepat, aman, dan sederhana.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button onClick={scrollToServices} size="lg" className="px-6">
                Mulai Sekarang
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Link href="#faq" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Pelajari lebih lanjut
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Mengapa pilih kami</h2>
            <p className="text-gray-600 text-sm">Fokus pada kecepatan dan kemudahan transaksi</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-2xl border border-gray-200 bg-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-700">
                    {feature.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">{feature.name}</h3>
                </div>
                <p className="mt-3 text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section ref={servicesRef} className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8 space-y-1">
            <div className="inline-flex items-center gap-2 text-gray-700">
              <Smartphone className="w-4 h-4" />
              <span className="text-sm font-medium">Layanan tersedia</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Pilih layanan favorit</h2>
            <p className="text-sm text-gray-600">Harga terbaik, proses cepat</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => {
              const isElectricity = product.category === 'token-listrik' || product.category === 'tagihan-listrik';
              const isPulsa = product.category === 'pulsa';
              const isHighlighted = isElectricity || isPulsa;

              return (
                <div key={product.id} className="group">
                  <Card className={`h-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden`}>
                    <Link href={isHighlighted ? `/products/${product.id}` : '#'} className={!isHighlighted ? 'pointer-events-none' : ''}>
                      <div className="relative aspect-[4/3] w-full">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                        {isHighlighted ? (
                          <div className="absolute top-3 right-3 bg-green-600 text-white px-2 py-0.5 rounded text-[10px] font-medium">
                            Tersedia
                          </div>
                        ) : (
                          <div className="absolute top-3 right-3 bg-gray-800 text-white px-2 py-0.5 rounded text-[10px] font-medium">
                            Segera hadir
                          </div>
                        )}
                      </div>
                      <CardContent className="p-4 space-y-3">
                        <h3 className="font-semibold text-base text-gray-900 line-clamp-1">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-xs line-clamp-2">
                          {product.description}
                        </p>
                        {product.price > 0 && (
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-[11px] text-gray-500">Mulai dari</p>
                              <p className="text-lg font-semibold text-gray-900">
                                {formatPrice(product.price)}
                              </p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                          </div>
                        )}
                      </CardContent>
                    </Link>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-8 space-y-1">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Pertanyaan Umum</h2>
            <p className="text-sm text-gray-600">Jawaban singkat untuk hal yang sering ditanyakan</p>
          </div>

          <div className="space-y-3">
            {qnaList.map((qna, idx) => (
              <div key={idx} className="rounded-xl border border-gray-200 bg-white">
                <button
                  className="w-full flex items-center justify-between p-4 text-left"
                  onClick={() => setOpenQna(openQna === idx ? null : idx)}
                >
                  <span className="font-medium text-gray-900 pr-4">
                    {qna.question}
                  </span>
                  <svg className={`w-5 h-5 text-gray-500 transition-transform ${openQna === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openQna === idx && (
                  <div className="px-4 pb-4 pt-0">
                    <p className="text-sm text-gray-700">{qna.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="https://wa.me/6285811959392"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm"
            >
              Chat dengan Kami
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}