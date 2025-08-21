import './globals.css';
import { ReactNode } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CartProvider } from '@/components/CartProvider';

export const metadata = {
  title: 'Park & Ember — National Park Inspired Candles',
  description: "Hand-poured candles inspired by America's National Parks. Rich scent notes, nature photography, and gift-ready packaging.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main className="min-h-[70vh] pb-20 pt-6">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
