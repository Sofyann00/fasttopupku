"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { CheckCircle2, XCircle, Gift, ArrowRight } from "lucide-react"
import { checkRedeemCode } from "@/lib/redeem"

interface RedeemCodeProps {
  onPointsUpdate: (points: number) => void
}

export function RedeemCode({ onPointsUpdate }: RedeemCodeProps) {
  const [code, setCode] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [dialogType, setDialogType] = useState<'success' | 'error'>('success')
  const [dialogMessage, setDialogMessage] = useState("")
  const [points, setPoints] = useState<number | null>(null)

  const handleRedeem = () => {
    const result = checkRedeemCode(code)
    if (result) {
      setDialogType('success')
      setDialogMessage(result.description)
      setPoints(result.points)
      onPointsUpdate(result.points)
    } else {
      setDialogType('error')
      setDialogMessage("Invalid or expired code. Please try again.")
      setPoints(null)
    }
    setIsDialogOpen(true)
    setCode("")
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:border-[#f77a0e]/20 transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-[#f77a0e]/10 flex items-center justify-center">
          <Gift className="h-6 w-6 text-[#f77a0e]" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Redeem Code</h2>
          <p className="text-sm text-gray-500">Enter your code to get points</p>
        </div>
      </div>

      <div className="flex gap-3">
        <Input
          type="text"
          placeholder="Enter your code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="flex-1 h-12 text-base border-gray-200 focus:border-[#f77a0e] focus:ring-[#f77a0e]/20 transition-all duration-200"
        />
        <Button 
          onClick={handleRedeem} 
          className="bg-[#f77a0e] hover:bg-[#f77a0e]/90 text-white h-12 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#f77a0e]/20 hover:-translate-y-0.5"
        >
          Redeem
        </Button>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden">
          <DialogHeader className="px-6 pt-6">
            <DialogTitle className="text-xl font-semibold">Redeem Code</DialogTitle>
            <DialogDescription>
              {!dialogType ? "Enter your redeem code" : ""}
            </DialogDescription>
          </DialogHeader>

          {dialogType === 'success' ? (
            <div className="flex flex-col items-center justify-center py-8 px-6 gap-6">
              <div className="relative">
                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse" />
                <CheckCircle2 className="h-20 w-20 text-green-500 relative z-10" />
              </div>
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-semibold text-green-600">Code Valid!</h3>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100">
                  <p className="text-sm text-gray-500">Points earned</p>
                  <p className="text-2xl font-bold text-[#f77a0e]">{points}</p>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  {dialogMessage}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 px-6 gap-6">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl animate-pulse" />
                <XCircle className="h-20 w-20 text-red-500 relative z-10" />
              </div>
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-semibold text-red-600">Invalid Code</h3>
                <p className="text-sm text-gray-600 mt-2">
                  {dialogMessage}
                </p>
              </div>
            </div>
          )}

          <div className="px-6 pb-6">
            <Button
              onClick={() => setIsDialogOpen(false)}
              className="w-full bg-[#f77a0e] hover:bg-[#f77a0e]/90 text-white h-12 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#f77a0e]/20 hover:-translate-y-0.5"
            >
              {dialogType === 'success' ? (
                <span className="flex items-center justify-center gap-2">
                  Selesai
                  <ArrowRight className="h-4 w-4" />
                </span>
              ) : (
                "Coba Lagi"
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
} 