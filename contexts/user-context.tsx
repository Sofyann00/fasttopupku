"use client";

import { createContext, useContext, useEffect, useState } from "react";

type User = {
  _id: string;
  id: string;
  name: string;
  email: string;
  phoneNumber: number;
  bankAccountNumber: string;
  bankName: string;
  orders: Order[];
};

type Order = {
  id: string;
  date: string;
  items: OrderItem[];
  total: number;
  status: "pending" | "completed";
  productName: string;
  itemName: string;
};

type OrderItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type UserContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, phoneNumber: number, bankAccountNumber: string, bankName: string) => Promise<void>;
  logout: () => void;
  addOrder: (
    order: Omit<Order, "id" | "date"> & { id?: string; date?: string }
  ) => void;
  isLoading: boolean;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, action: "login" }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error);
      }

      const userData = await response.json();

      // Fetch orders immediately after login
      const ordersResponse = await fetch(`/api/orders/user/${userData._id}`);
   
      if (ordersResponse.ok) {
        const orders = await ordersResponse.json();
      
        userData.orders = orders;
      }

      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (
    name: string,
    email: string,
    password: string,
    phoneNumber: number,
    bankAccountNumber: string,
    bankName: string
  ) => {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        phoneNumber,
        bankAccountNumber,
        bankName
      }),
    })

    if (!response.ok) {
      const data = await response.json()
      throw new Error(data.error || 'Registration failed')
    }

    const user = await response.json()
    setUser(user)
  }

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const addOrder = (orderData: Omit<Order, "id" | "date">) => {
    if (!user) return;

    const newOrder = {
      ...orderData,
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString(),
    };

    const updatedUser = {
      ...user,
      orders: [newOrder, ...user.orders],
    };

    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  return (
    <UserContext.Provider
      value={{ user, login, register, logout, addOrder, isLoading }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
