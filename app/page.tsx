import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=2070&auto=format&fit=crop"
            alt="Morning light over a national park valley"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="container-responsive py-32 sm:py-44 text-white">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">Bring the Parks Home</h1>
          <p className="mt-5 max-w-xl text-lg sm:text-xl text-white/90">
            Hand-poured soy candles inspired by America's National Parks. Layered scent notes, nature-forward design, and gift-ready packaging.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/products" className="btn-primary">Shop Candles</Link>
            <a href="#about" className="btn-secondary">Our Story</a>
          </div>
        </div>
      </section>

      <section id="about" className="container-responsive mt-16 grid gap-12 md:grid-cols-2 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl font-semibold">Inspired by wild places</h2>
          <p className="mt-4 text-gray-600">
            Each Park & Ember candle is blended in small batches with premium fragrance oils to capture the essence of beloved National Parks — pine-lined trails, sun-warmed sandstone, and misty coastal mornings.
          </p>
          <p className="mt-3 text-gray-600">
            Every candle ships in recyclable, gift-ready packaging. Add a handwritten note at checkout to make it extra special.
          </p>
          <div className="mt-6">
            <Link href="/products" className="btn-primary">Explore Scents</Link>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1520357456833-8a9a4a7a7aa2?q=80&w=2070&auto=format&fit=crop"
              alt="Candle on a wooden table with greenery"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
