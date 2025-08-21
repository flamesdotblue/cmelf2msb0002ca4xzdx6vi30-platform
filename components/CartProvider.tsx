"use client";

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { findById } from '@/lib/products';

export type CartItem = {
  productId: string;
  quantity: number;
  giftWrap: boolean;
  giftMessage?: string;
  addedAt: string; // unique id per line item
};

type CartContextType = {
  items: CartItem[];
  giftWrapFee: number;
  addItem: (item: Omit<CartItem, 'addedAt'>) => void;
  updateQuantity: (addedAt: string, quantity: number) => void;
  toggleGiftWrap: (addedAt: string, enabled: boolean) => void;
  setGiftMessage: (addedAt: string, msg: string) => void;
  removeItem: (addedAt: string) => void;
  totals: { subtotal: number; gift: number; total: number };
};

const CartContext = createContext<CartContextType | null>(null);

const STORAGE_KEY = 'park-ember-cart-v1';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const giftWrapFee = 5;

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const addItem: CartContextType['addItem'] = (item) => {
    const addedAt = new Date().toISOString() + Math.random().toString(36).slice(2);
    setItems((prev) => [...prev, { ...item, addedAt }]);
  };

  const updateQuantity: CartContextType['updateQuantity'] = (addedAt, quantity) => {
    setItems((prev) => prev.map((i) => (i.addedAt === addedAt ? { ...i, quantity: Math.max(1, quantity) } : i)));
  };

  const toggleGiftWrap: CartContextType['toggleGiftWrap'] = (addedAt, enabled) => {
    setItems((prev) => prev.map((i) => (i.addedAt === addedAt ? { ...i, giftWrap: enabled } : i)));
  };

  const setGiftMessage: CartContextType['setGiftMessage'] = (addedAt, msg) => {
    setItems((prev) => prev.map((i) => (i.addedAt === addedAt ? { ...i, giftMessage: msg } : i)));
  };

  const removeItem: CartContextType['removeItem'] = (addedAt) => {
    setItems((prev) => prev.filter((i) => i.addedAt !== addedAt));
  };

  const totals = useMemo(() => {
    let subtotal = 0;
    let gift = 0;
    for (const it of items) {
      const product = findById(it.productId);
      if (!product) continue;
      subtotal += product.price * it.quantity;
      if (it.giftWrap) gift += giftWrapFee * it.quantity;
    }
    return { subtotal, gift, total: subtotal + gift };
  }, [items]);

  return (
    <CartContext.Provider value={{ items, giftWrapFee, addItem, updateQuantity, toggleGiftWrap, setGiftMessage, removeItem, totals }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
