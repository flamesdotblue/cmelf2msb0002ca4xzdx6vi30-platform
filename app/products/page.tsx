import { products } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';

export default function ProductsPage() {
  return (
    <div className="container-responsive">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Candles</h1>
          <p className="text-gray-600 mt-2">Hand-poured scents inspired by National Parks</p>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
