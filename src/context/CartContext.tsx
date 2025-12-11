"use client";
import Box from '@mui/material/Box';
Box;

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import Card from "@mui/material/Card";
import { ICartItem, IService } from "@/types";
import { getStorage, setStorage } from "@/utils/localStorage";
import { services as mockServices } from "@/lib/mockData";

type CartContextValue = {
  cart: ICartItem[];
  cartDetails: (ICartItem & { service?: IService; subTotal: number })[];
  addToCart: (serviceId: string, guests?: number, selectedField?: string, date?: string) => void;
  removeFromCart: (serviceId: string) => void;
  clearCart: () => void;
  totalPrice: number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<ICartItem[]>([]);

  useEffect(() => {
    const stored = getStorage<ICartItem[]>("service_cart");
    if (stored && Array.isArray(stored)) {
      setCart(stored);
    }
  }, []);

  useEffect(() => {
    setStorage("service_cart", cart);
  }, [cart]);

  const addToCart = (serviceId: string, guests = 1, selectedField?: string, date?: string) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.serviceId === serviceId);
      if (existing) {
        return prev.map((p) =>
          p.serviceId === serviceId ? { ...p, guests: p.guests + guests } : p
        );
      }
      const svc = mockServices.find((s) => s.id === serviceId);
      const price = svc ? svc.price : 0;
      return [...prev, { serviceId, guests, price, selectedField, date }];
    });
  };

  const removeFromCart = (serviceId: string) => {
    setCart((prev) => prev.filter((p) => p.serviceId !== serviceId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartDetails = useMemo(() => {
    return cart.map((item) => {
      const service = mockServices.find((s) => s.id === item.serviceId);
      const subTotal = (item.price || 0) * (item.guests || 1);
      return { ...item, service, subTotal };
    });
  }, [cart]);

  const totalPrice = useMemo(() => {
    return cart.reduce((acc, it) => acc + (it.price || 0) * (it.guests || 1), 0);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, cartDetails, addToCart, removeFromCart, clearCart, totalPrice }}
    >
      <Box>
        {children}
      </Box>
    </CartContext.Provider>
  );
};
