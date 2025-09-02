export interface RedeemCode {
  code: string;
  points: number;
  description: string;
}

export const redeemCodes: RedeemCode[] = [
  {
    code: "WELCOME2024",
    points: 100,
    description: "Welcome bonus for new members!"
  },
  {
    code: "GAMER50",
    points: 50,
    description: "Special discount for gamers"
  },
  {
    code: "fasttopupku100",
    points: 100,
    description: "Platform launch celebration"
  },
  {
    code: "SUMMER2024",
    points: 200,
    description: "Summer special promotion"
  },
  {
    code: "LOYALTY25",
    points: 25,
    description: "Loyalty reward"
  }
];

export function checkRedeemCode(code: string): RedeemCode | null {
  const foundCode = redeemCodes.find(c => c.code === code.toUpperCase());
  return foundCode || null;
} 