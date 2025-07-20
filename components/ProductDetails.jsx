'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [activeImg, setActiveImg] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const query = `*[_type == "product" && slug.current == $slug][0] {
         title,
  price,
  images,
  category,
  conditionRating,
  descriptionPoints,
      }`;
      const data = await client.fetch(query, { slug });
      setProduct(data);
      setActiveImg(data?.images?.[0]);
    }
    if (slug) fetchProduct();
  }, [slug]);

  if (!product) return <div className="text-white p-10">Loading...</div>;

  return (
    <section className="w-full bg-black text-white min-h-screen px-4 md:px-16 pt-20 md:py-24">
      <div className="max-w-8xl mx-auto space-y-10">
        <nav className="text-base md:text-lg text-gray-400">
          Home / {product.category} /{' '}
          <span className="text-white">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="order-1 w-full space-y-6">
            <div className="relative w-full h-[300px] md:h-[400px] rounded-md overflow-hidden border border-gray-700">
              {activeImg && (
                <Image src={urlFor(activeImg).url()} alt={product.title} fill className="object-cover" />
              )}
            </div>

            <div className="grid grid-cols-6 sm:grid-cols-6 gap-2">
              {product.images?.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(img)}
                  className={`relative aspect-square rounded overflow-hidden border ${
                    activeImg === img ? 'border-white' : 'border-gray-700'
                  }`}
                >
                  <Image src={urlFor(img).url()} alt={`Thumbnail ${i + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="order-2 space-y-4">
            <h1 className="text-2xl md:text-3xl font-medium tracking-tight leading-snug">
              {product.title}
            </h1>

            <ul className="space-y-1 text-base md:text-lg text-gray-300 capitalize leading-relaxed max-w-xl">
              {product.descriptionPoints?.map((line, i) => (
                <li key={i}>★ {line}</li>
              ))}
              <li>
                ★ Condition: <span className="text-white font-medium">{product.conditionRating}</span>
              </li>
            </ul>

            <p className="text-2xl md:text-3xl font-medium text-white">$ {product.price}</p>

            <div className="pt-2 md:pt-4 flex gap-4 flex-col md:flex-row">
  {/* SMS Button */}
  <a
    href={`sms:+12368805446?body=${encodeURIComponent(
      `Hey, I'm interested in buying "${product.title}" listed for ${product.price}. Is it available?`
    )}`}
    className="w-full block text-center bg-gray-100 text-black font-semibold py-3 text-base md:text-lg rounded transition-all duration-300 hover:bg-black hover:text-white hover:scale-101 border border-white"
  >
    Order Now
  </a>

  {/* Email Button */}
  <a
    href={`mailto:guggspaji12@hotmail.com?subject=${encodeURIComponent(
      `Inquiry about ${product.title}`
    )}&body=${encodeURIComponent(
      `Hi, I'm interested in purchasing "${product.title}" listed for ${product.price}. Please let me know if it's available.`
    )}`}
    className="w-full block text-center bg-gray-100 text-black font-semibold py-3 text-base md:text-lg rounded transition-all duration-300 hover:bg-black hover:text-white hover:scale-101 border border-white"
  >
    Inquire Now
  </a>
</div>

          </div>
        </div>
      </div>
    </section>
  );
}