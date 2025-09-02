"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/user-context";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GameVoucher } from "@/lib/types";
import { toast } from "sonner";

const GAME_OPTIONS = [
  "Mobile Legends",
  "PUBG Mobile",
  "Free Fire",
  "Genshin Impact",
  "Valorant",
  "Other"
];

const VOUCHER_TYPES = [
  "Diamond",
  "UC",
  "Voucher",
  "Other"
];

export default function DashboardPage() {
  const router = useRouter();
  const { user } = useUser();
  const [step, setStep] = useState(1);
  const [voucher, setVoucher] = useState<Partial<GameVoucher>>({
    gameName: "",
    price: 0,
    type: "Diamond"
  });

  // Redirect if not admin
  if (user?.email !== "administrator@gmail.com") {
    router.push("/");
    return null;
  }

  const handleNext = () => {
    if (step === 1 && !voucher.gameName) {
      toast.error("Please select a game");
      return;
    }
    if (step === 2 && (!voucher.price || voucher.price <= 0)) {
      toast.error("Please enter a valid price");
      return;
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    try {
      const newVoucher: GameVoucher = {
        id: Math.random().toString(36).substr(2, 9),
        gameName: voucher.gameName!,
        price: voucher.price!,
        type: voucher.type!,
        createdAt: new Date().toISOString(),
        createdBy: user?.email || ""
      };

      // Here you would typically save to your database
      console.log("New voucher:", newVoucher);
      toast.success("Voucher created successfully!");
      
      // Reset form
      setVoucher({
        gameName: "",
        price: 0,
        type: "Diamond"
      });
      setStep(1);
    } catch (error) {
      toast.error("Failed to create voucher");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle>Create Game Voucher</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Progress Steps */}
            <div className="flex justify-between mb-8">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`flex-1 text-center ${
                    s === step
                      ? "text-[#f77a0e] font-semibold"
                      : s < step
                      ? "text-green-500"
                      : "text-gray-400"
                  }`}
                >
                  <div
                    className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2 ${
                      s === step
                        ? "bg-[#f77a0e] text-white"
                        : s < step
                        ? "bg-green-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {s}
                  </div>
                  {s === 1 && "Select Game"}
                  {s === 2 && "Set Price"}
                  {s === 3 && "Voucher Type"}
                </div>
              ))}
            </div>

            {/* Step 1: Select Game */}
            {step === 1 && (
              <div className="space-y-4">
                <Select
                  value={voucher.gameName}
                  onValueChange={(value) =>
                    setVoucher({ ...voucher, gameName: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a game" />
                  </SelectTrigger>
                  <SelectContent>
                    {GAME_OPTIONS.map((game) => (
                      <SelectItem key={game} value={game}>
                        {game}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Step 2: Set Price */}
            {step === 2 && (
              <div className="space-y-4">
                <Input
                  type="number"
                  placeholder="Enter voucher price"
                  value={voucher.price || ""}
                  onChange={(e) =>
                    setVoucher({ ...voucher, price: Number(e.target.value) })
                  }
                />
              </div>
            )}

            {/* Step 3: Voucher Type */}
            {step === 3 && (
              <div className="space-y-4">
                <Select
                  value={voucher.type}
                  onValueChange={(value) =>
                    setVoucher({ ...voucher, type: value as GameVoucher["type"] })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select voucher type" />
                  </SelectTrigger>
                  <SelectContent>
                    {VOUCHER_TYPES.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="w-24"
                >
                  Back
                </Button>
              )}
              {step < 3 ? (
                <Button
                  onClick={handleNext}
                  className="w-24 ml-auto bg-[#f77a0e] hover:bg-[#f77a0e]/90"
                >
                  Next
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="w-24 ml-auto bg-[#f77a0e] hover:bg-[#f77a0e]/90"
                >
                  Create
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 