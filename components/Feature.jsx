'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

export default function FeaturedSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      const res = await client.fetch(`*[_type == "product" && featured == true]{
        _id,
        title,
        price,
          "image": images[0],
        slug
      }`);
      setProducts(res);
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <section className="flex min-h-fit text-white">
      <main className="flex-1 px-4 md:px-8 py-10">
        <h2 className="text-xl md:text-2xl font-light text-gray-200 mb-6">Featured Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product._id} href={`/product/${product.slug.current}`}>
              <article className="text-white cursor-pointer hover:opacity-90 transition">
                <div className="w-full h-fit relative">
                  <img
                    src={urlFor(product.image).width(600).height(400).url()}
                    alt={product.title}
                    className="object-cover w-full h-28 md:h-56 rounded-sm"
                  />
                </div>
                <h3 className="mt-2 text-sm md:text-lg capitalize font-light md:font-semibold leading-snug">
                  {product.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300">$ {product.price}</p>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </section>
  );
}
