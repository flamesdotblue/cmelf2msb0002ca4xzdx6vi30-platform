"use client";

import { useState } from 'react';
import { useCart } from './CartProvider';
import { Product } from '@/lib/products';
import { QuantitySelector } from './QuantitySelector';

export function AddToCart({ product }: { product: Product }) {
  const { addItem, giftWrapFee } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [giftWrap, setGiftWrap] = useState(false);
  const [giftMessage, setGiftMessage] = useState('');

  const handleAdd = () => {
    addItem({ productId: product.id, quantity, giftWrap, giftMessage: giftWrap ? giftMessage : undefined });
  };

  return (
    <div className="space-y-4">
      <QuantitySelector value={quantity} onChange={setQuantity} />
      <div className="flex items-center gap-2 text-sm">
        <input id="giftwrap" type="checkbox" checked={giftWrap} onChange={(e) => setGiftWrap(e.target.checked)} />
        <label htmlFor="giftwrap">Add gift wrap (+${giftWrapFee} per candle)</label>
      </div>
      {giftWrap && (
        <textarea
          className="input"
          placeholder="Gift message (optional)"
          value={giftMessage}
          onChange={(e) => setGiftMessage(e.target.value)}
          rows={3}
        />
      )}
      <button onClick={handleAdd} className="btn-primary w-full sm:w-auto">Add to cart</button>
    </div>
  );
}
