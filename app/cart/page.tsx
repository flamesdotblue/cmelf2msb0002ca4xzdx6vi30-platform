"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/components/CartProvider';
import { formatCurrency } from '@/lib/currency';
import { findById } from '@/lib/products';
import { QuantitySelector } from '@/components/QuantitySelector';

export default function CartPage() {
  const { items, updateQuantity, removeItem, totals, toggleGiftWrap, setGiftMessage, giftWrapFee } = useCart();

  const hasItems = items.length > 0;

  return (
    <div className="container-responsive">
      <h1 className="text-3xl font-semibold">Your Cart</h1>
      {!hasItems && (
        <div className="mt-10 text-center">
          <p className="text-gray-600">Your cart is empty.</p>
          <Link href="/products" className="btn-primary mt-6 inline-flex">Browse Candles</Link>
        </div>
      )}

      {hasItems && (
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr,360px]">
          <div className="space-y-6">
            {items.map((it) => {
              const product = findById(it.productId);
              if (!product) return null;
              const lineTotal = it.quantity * product.price + (it.giftWrap ? giftWrapFee * it.quantity : 0);
              return (
                <div key={it.productId + it.addedAt} className="card p-4 sm:p-6">
                  <div className="grid grid-cols-[96px_1fr] gap-4">
                    <div className="relative h-24 w-24 overflow-hidden rounded-md">
                      <Image src={product.image} alt={product.name} fill className="object-cover" />
                    </div>
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-medium">{product.name}</h3>
                          <p className="text-sm text-gray-600">{formatCurrency(product.price)} each</p>
                        </div>
                        <button onClick={() => removeItem(it.addedAt)} className="text-sm text-gray-500 hover:text-gray-900">Remove</button>
                      </div>
                      <div className="mt-3 flex flex-wrap items-center gap-4">
                        <QuantitySelector value={it.quantity} onChange={(q) => updateQuantity(it.addedAt, q)} />
                        <label className="flex items-center gap-2 text-sm">
                          <input
                            type="checkbox"
                            checked={it.giftWrap}
                            onChange={(e) => toggleGiftWrap(it.addedAt, e.target.checked)}
                          />
                          Add gift wrap (+{formatCurrency(giftWrapFee)} per candle)
                        </label>
                      </div>
                      {it.giftWrap && (
                        <div className="mt-3">
                          <textarea
                            className="input"
                            placeholder="Gift message (optional)"
                            value={it.giftMessage || ''}
                            onChange={(e) => setGiftMessage(it.addedAt, e.target.value)}
                            rows={2}
                          />
                          <p className="mt-1 text-xs text-gray-500">We'll include a handwritten note.</p>
                        </div>
                      )}
                      <div className="mt-3 text-sm text-gray-700">Line total: {formatCurrency(lineTotal)}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <aside className="card h-fit p-6">
            <h2 className="text-lg font-medium">Order Summary</h2>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between"><span>Subtotal</span><span>{formatCurrency(totals.subtotal)}</span></div>
              <div className="flex justify-between"><span>Gift wrap</span><span>{formatCurrency(totals.gift)}</span></div>
              <div className="flex justify-between text-gray-500"><span>Shipping</span><span>Calculated at checkout</span></div>
              <div className="hr my-2" />
              <div className="flex justify-between font-medium text-base"><span>Total</span><span>{formatCurrency(totals.total)}</span></div>
            </div>
            <button className="btn-primary mt-6 w-full">Checkout</button>
            <p className="mt-2 text-center text-xs text-gray-500">Demo only — no payment is processed.</p>
          </aside>
        </div>
      )}
    </div>
  );
}
