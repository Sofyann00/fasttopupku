"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { useUser } from "@/contexts/user-context"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Loader2 } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Bank {
  _id: string;
  name: string;
  paymentCode: string;
}

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    bankAccountNumber: "",
    bankName: "",
  })
  const [banks, setBanks] = useState<Bank[]>([])
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { register } = useUser()
  const router = useRouter()

  useEffect(() => {
    // Fetch banks data
    const fetchBanks = async () => {
      try {
        const response = await fetch('/api/banks')
        const data = await response.json()
        setBanks(data.banks)
      } catch (error) {
        console.error('Error fetching banks:', error)
      }
    }
    fetchBanks()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    try {
      await register(
        formData.name, 
        formData.email, 
        formData.password,
        parseInt(formData.phoneNumber),
        formData.bankAccountNumber,
        formData.bankName
      )
      router.push("/profile")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Register</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-2">Name</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  disabled={isLoading}
                />
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  disabled={isLoading}
                />
              </div>
              <div>
                <label className="block mb-2">Phone Number</label>
                <Input
                  type="tel"
                  required
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                  disabled={isLoading}
                  placeholder="e.g., 08123456789"
                />
              </div>
              <div>
                <label className="block mb-2">Bank Name</label>
                <Select
                  required
                  value={formData.bankName}
                  onValueChange={(value) =>
                    setFormData({ ...formData, bankName: value })
                  }
                  disabled={isLoading}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your bank" />
                  </SelectTrigger>
                  <SelectContent>
                    {banks.map((bank) => (
                      <SelectItem key={bank._id} value={bank.name}>
                        {bank.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block mb-2">Bank Account Number</label>
                <Input
                  type="text"
                  required
                  value={formData.bankAccountNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, bankAccountNumber: e.target.value })
                  }
                  disabled={isLoading}
                  placeholder="Enter your bank account number"
                />
              </div>
              <div>
                <label className="block mb-2">Password</label>
                <Input
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  disabled={isLoading}
                />
              </div>
              <div>
                <label className="block mb-2">Confirm Password</label>
                <Input
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({ ...formData, confirmPassword: e.target.value })
                  }
                  disabled={isLoading}
                />
              </div>
              {error && (
                <p className="text-sm text-red-500 mt-2">{error}</p>
              )}
                              <Button type="submit" className="w-full bg-[#1e40af] text-white" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Registering...
                  </>
                ) : (
                  "Register"
                )}
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="text-primary hover:underline">
                  Login
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 