import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products, findBySlug } from '@/lib/products';
import { AddToCart } from '@/components/AddToCart';
import { formatCurrency } from '@/lib/currency';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = findBySlug(params.slug);
  if (!product) return notFound();

  return (
    <div className="container-responsive">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <div className="relative aspect-square w-full overflow-hidden rounded-xl">
            <Image src={product.image} alt={product.name} fill className="object-cover" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 text-sm text-gray-600">
            {product.gallery?.map((img, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-md">
                <Image src={img} alt={`${product.name} ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <p className="mt-2 text-xl text-forest-700 font-medium">{formatCurrency(product.price)}</p>
          <p className="mt-4 text-gray-700">{product.description}</p>
          <div className="mt-6">
            <h3 className="font-medium">Scent notes</h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {product.notes.map((n) => (
                <li key={n} className="badge">{n}</li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <AddToCart product={product} />
          </div>
          <div className="mt-8 text-sm text-gray-600">
            <p>• 8 oz natural soy wax • 45+ hr burn • Cotton wick</p>
            <p className="mt-1">• Gift-ready recyclable packaging</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}
