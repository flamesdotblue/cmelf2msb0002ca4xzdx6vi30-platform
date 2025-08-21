"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from './CartProvider';

export function Header() {
  const pathname = usePathname();
  const { items } = useCart();
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      className={`px-3 py-2 rounded-md text-sm font-medium hover:text-forest-700 ${pathname === href ? 'text-forest-700' : 'text-gray-700'}`}
    >
      {children}
    </Link>
  );

  return (
    <header className="sticky top-0 z-30 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="container-responsive flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block h-7 w-7 rounded bg-forest-700" />
          <span className="font-semibold tracking-tight">Park & Ember</span>
        </Link>
        <nav className="hidden md:flex items-center">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/products">Products</NavLink>
          <NavLink href="/cart">Cart</NavLink>
        </nav>
        <Link href="/cart" className="md:hidden relative px-3 py-2 rounded-md text-sm font-medium text-gray-700">
          Cart
          {count > 0 && (
            <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-forest-700 px-1 text-xs text-white">{count}</span>
          )}
        </Link>
        <div className="hidden md:block">
          <Link href="/cart" className="btn-secondary relative">
            View Cart
            {count > 0 && (
              <span className="ml-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-forest-700 px-1 text-xs text-white">{count}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
