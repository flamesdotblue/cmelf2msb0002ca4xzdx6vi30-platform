import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container-responsive py-10 grid gap-8 sm:grid-cols-2">
        <div>
          <h3 className="font-semibold">Park & Ember</h3>
          <p className="mt-2 text-sm text-gray-600">Hand-poured in small batches. Inspired by National Parks.</p>
        </div>
        <div className="text-sm text-gray-600">
          <ul className="space-y-1">
            <li><Link className="hover:text-forest-700" href="/products">Shop</Link></li>
            <li><a className="hover:text-forest-700" href="#">Shipping & Returns</a></li>
            <li><a className="hover:text-forest-700" href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">© {new Date().getFullYear()} Park & Ember</div>
    </footer>
  );
}
