export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  description: string;
  notes: string[];
  image: string;
  gallery?: string[];
};

export const products: Product[] = [
  {
    id: 'yosemite-8oz',
    slug: 'yosemite',
    name: 'Yosemite',
    price: 28,
    description: 'Granite cliffs at golden hour. Fresh pine, cool river air, and sun-warmed cedar.',
    notes: ['Pine', 'Cedar', 'River Mist', 'Moss'],
    image:
      'https://images.unsplash.com/photo-1509644851169-2acc08aa25b8?q=80&w=2069&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1464823063530-08f10ed1a2dd?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1508261303786-0e3b4e58c4dc?q=80&w=2069&auto=format&fit=crop'
    ]
  },
  {
    id: 'zion-8oz',
    slug: 'zion',
    name: 'Zion',
    price: 28,
    description: 'Canyon walls and desert bloom. Red sandstone, sagebrush, and a hint of juniper.',
    notes: ['Sage', 'Juniper', 'Sandstone', 'Desert Bloom'],
    image:
      'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=2069&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1516306580123-e6e52b1b7bff?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2069&auto=format&fit=crop'
    ]
  },
  {
    id: 'acadia-8oz',
    slug: 'acadia',
    name: 'Acadia',
    price: 28,
    description: 'Coastal pines and sea spray. Brisk ocean air, balsam fir, and wild blueberry.',
    notes: ['Sea Salt', 'Balsam Fir', 'Blueberry', 'Coastal Pine'],
    image:
      'https://images.unsplash.com/photo-1466220666686-90bdba318c16?q=80&w=2069&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1477512076069-d48f8f517f12?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464013778555-8e723c2f01f8?q=80&w=2069&auto=format&fit=crop'
    ]
  }
];

export function findBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function findById(id: string) {
  return products.find((p) => p.id === id);
}
