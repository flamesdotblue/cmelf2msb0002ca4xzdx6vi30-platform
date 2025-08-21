import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/products';
import { formatCurrency } from '@/lib/currency';

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="card overflow-hidden">
      <div className="relative aspect-square w-full">
        <Image src={product.image} alt={product.name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">{product.name}</h3>
          <span className="text-forest-700 font-medium">{formatCurrency(product.price)}</span>
        </div>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{product.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {product.notes.slice(0, 3).map((n) => (
            <span key={n} className="badge">{n}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
