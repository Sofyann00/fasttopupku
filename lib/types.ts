export interface Item {
  createdDate: string;
  updatedDate: string;
  id: number;
  name: string;
  price: number;
  priceDiscount: number | null;
  iconUrl: string | null;
  priceInc: string[] | null;
  priceExc: string[] | null;
  voucherStock: number;
  sortOrder: number | null;
  isActive: boolean;
  variant: {
    createdDate: string;
    updatedDate: string;
    id: number;
    name: string;
    iconUrl: string | null;
  } | null;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  quantity?: number;
  banner: string;
  items: Item[];
  playerId?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  status: 'pending' | 'completed' | 'failed';
  items: CartItem[];
  total: number;
  createdAt: string;
  updatedAt: string;
  productName: string;
  itemName: string;
  date: string;
}

export interface GameVoucher {
  id: string;
  gameName: string;
  price: number;
  type: 'Diamond' | 'UC' | 'Voucher' | 'Other';
  createdAt: string;
  createdBy: string;
}