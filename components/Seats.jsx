'use client';

import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

export default function SeatsProductGrid() {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState('newest');

  useEffect(() => {
    const fetchProducts = async () => {
      let orderQuery = '';

      switch (sortOption) {
        case 'price_low':
          orderQuery = '| order(price desc)';
          break;
        case 'price_high':
          orderQuery = '| order(price asc)';
          break;
        case 'rating':
          orderQuery = '| order(conditionRating desc)';
          break;
        case 'newest':
        default:
          orderQuery = '| order(_createdAt desc)';
          break;
      }

      const query = `*[_type == "product" && category == "seats"] ${orderQuery} {
        _id,
        title,
        price,
        conditionRating,
        "image": images[0],
        slug
      }`;

      const data = await client.fetch(query);
      setProducts(data);
    };

    fetchProducts();
  }, [sortOption]);

  return (
    <section className="bg-black text-white w-full min-h-screen">
      <div className="max-w-9xl mx-auto px-4 md:px-16 pt-20 md:pt-24 md:py-12">
        <div className="text-sm md:text-lg text-gray-400 mb-4">
          Home / Collections / <span className="text-white">Racing Seats</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <h1 className="text-2xl font-semibold">Racing Seats</h1>

          <div className="flex items-center gap-2 text-xs md:text-sm">
            <label htmlFor="sort" className="text-gray-300 font-medium">
              Sort by:
            </label>

            <select
              id="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-zinc-900 text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200 appearance-none"
            >
              <option value="newest">Newest</option>
              <option value="price_low">Price: Low to High</option>
              <option value="price_high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {products.map((product) => (
            <Link key={product._id} href={`/product/${product.slug.current}`}>
              <article className="bg-black p-2 rounded-sm hover:shadow-md transition duration-300">
                <div className="w-full h-fit relative">
                  <img
                    src={urlFor(product.image).width(600).height(400).url()}
                    alt={product.title}
                    className="object-cover w-full h-24 md:h-48 rounded-sm"
                  />
                </div>
                <h3 className="text-sm md:text-lg capitalize font-light mt-3 md:font-medium leading-tight">
                  {product.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400">$ {product.price}</p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
