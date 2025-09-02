"use client"
import { products } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { formatPrice } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { SellVoucherDialog } from "@/components/sell-voucher-dialog"

export default function SellVoucher() {
  const router = useRouter()
  const [selectedGame, setSelectedGame] = useState<{ id: string; name: string } | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleBack = () => {
    router.back()
  }

  const handleSellVoucher = (gameId: string, gameName: string) => {
    setSelectedGame({ id: gameId, name: gameName })
    setIsDialogOpen(true)
  }

  return (
    <div className="flex flex-col bg-white text-gray-900 min-h-screen">
      {/* Header */}
      <div className="w-full mx-auto max-w-[1920px] px-4 sm:px-6 2xl:px-8 py-8 sm:py-12 2xl:py-16">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="p-2 hover:bg-gray-100 rounded-full"
            onClick={handleBack}
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold">
            Jual Voucher Game
          </h1>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-8 sm:py-12 2xl:py-16 relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="w-full mx-auto max-w-[1920px] px-4 sm:px-6 2xl:px-8">
          <div className="text-center mb-8 sm:mb-16 2xl:mb-24">
            <p className="text-base sm:text-lg 2xl:text-2xl text-gray-600 max-w-2xl 2xl:max-w-4xl mx-auto px-4">
              Pilih game yang ingin Anda jual vouchernya
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 2xl:gap-12">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <Card className="bg-white border-gray-100">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 2xl:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium text-xs sm:text-sm 2xl:text-lg">
                        </span>
                        <Button 
                          className="bg-[#f77a0e] hover:bg-[#f77a0e]/90 text-white text-xs sm:text-sm 2xl:text-base px-3 sm:px-4 2xl:px-6 py-1.5 sm:py-2 2xl:py-3 rounded-full transition-all duration-300"
                          onClick={() => handleSellVoucher(product.id.toString(), product.name)}
                        >
                          Jual Voucher
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-3 sm:p-4 2xl:p-6">
                    <h3 className="font-semibold text-base sm:text-lg 2xl:text-2xl mb-1 line-clamp-1 group-hover:text-[#f77a0e] transition-colors duration-200">
                      {product.name}
                    </h3>
                    <p className="text-xs sm:text-sm 2xl:text-lg text-gray-500 line-clamp-2">
                      {product.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedGame && (
        <SellVoucherDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          gameId={selectedGame.id}
          gameName={selectedGame.name}
        />
      )}
    </div>
  )
} 