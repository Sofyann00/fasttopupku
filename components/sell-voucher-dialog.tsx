"use client"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { validateVoucherCode } from "@/lib/sell-voucher"
import { CheckCircle2, XCircle } from "lucide-react"

interface SellVoucherDialogProps {
  isOpen: boolean
  onClose: () => void
  gameId: string
  gameName: string
}

export function SellVoucherDialog({ isOpen, onClose, gameId, gameName }: SellVoucherDialogProps) {
  const [voucherCode, setVoucherCode] = useState("")
  const [validationResult, setValidationResult] = useState<{
    isValid: boolean;
    value?: number;
  } | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = () => {
    setIsSubmitting(true)
    const result = validateVoucherCode(voucherCode, gameId)
    setValidationResult(result)
    setIsSubmitting(false)
  }

  const handleClose = () => {
    setVoucherCode("")
    setValidationResult(null)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Jual Voucher {gameName}</DialogTitle>
          <DialogDescription>
            Masukkan kode voucher yang ingin Anda jual
          </DialogDescription>
        </DialogHeader>

        {!validationResult ? (
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Input
                id="voucher-code"
                placeholder="Masukkan kode voucher"
                value={voucherCode}
                onChange={(e) => setVoucherCode(e.target.value)}
              />
            </div>
          </div>
        ) : validationResult.isValid ? (
          <div className="flex flex-col items-center justify-center py-6 gap-4">
            <CheckCircle2 className="h-16 w-16 text-green-500" />
            <div className="text-center">
              <h3 className="text-lg font-semibold text-green-600">Voucher Valid!</h3>
              <p className="text-sm text-gray-500 mt-1">
                Nilai voucher: Rp {validationResult.value?.toLocaleString()}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Uang sejumlah Rp {validationResult.value?.toLocaleString()} akan segera ditransfer ke rekening Anda
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Proses transfer biasanya memakan waktu 3-5 menit
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-6 gap-4">
            <XCircle className="h-16 w-16 text-red-500" />
            <div className="text-center">
              <h3 className="text-lg font-semibold text-red-600">Voucher Tidak Valid</h3>
              <p className="text-sm text-gray-500 mt-1">
                Mohon periksa kembali kode voucher Anda
              </p>
            </div>
          </div>
        )}

        <DialogFooter>
          {!validationResult ? (
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting || !voucherCode}
              className="bg-[#f77a0e] hover:bg-[#f77a0e]/90"
            >
              {isSubmitting ? "Memvalidasi..." : "Validasi Voucher"}
            </Button>
          ) : (
            <Button
              onClick={handleClose}
              className="bg-[#f77a0e] hover:bg-[#f77a0e]/90"
            >
              {validationResult.isValid ? "Selesai" : "Coba Lagi"}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
} 