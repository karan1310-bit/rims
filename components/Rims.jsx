'use client';

import Image from 'next/image';

const mockProducts = [
  {
    id: 1,
    title: 'Bride Bucket Seat',
    price: '$895.00',
    image: 'https://images.unsplash.com/photo-1637979911446-87945573d43c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    id: 2,
    title: 'Recaro Sport Seat',
    price: '$720.00',
    image: 'https://images.unsplash.com/photo-1613771750144-9f2177c60fb0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    id: 3,
    title: 'Racing Steering Wheel',
    price: '$259.00',
    image: 'https://images.unsplash.com/photo-1713716767383-27f39a85255a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    id: 4,
    title: 'JDM Wheel Set',
    price: '$1,195.00',
    image: 'https://images.unsplash.com/photo-1596923220081-3ed95f568a8f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    id: 5,
    title: 'Nardi Classic Wheel',
    price: '$399.00',
    image: 'https://images.unsplash.com/photo-1505061816977-cb75f14ea48e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    id: 6,
    title: 'Performance Coilovers',
    price: '$620.00',
    image: 'https://images.unsplash.com/photo-1705442198571-a58b8ae35ebb?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    id: 7,
    title: 'Custom Shift Knob',
    price: '$95.00',
    image: 'https://images.unsplash.com/photo-1709722393765-fe78276dbde7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    id: 8,
    title: 'Sparco Seat Pair',
    price: '$999.00',
    image: 'https://images.unsplash.com/photo-1611251953880-611e66e904e9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    id: 9,
    title: 'Nardi Classic Wheel',
    price: '$399.00',
    image: 'https://plus.unsplash.com/premium_photo-1686730540270-93f2c33351b6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    id: 10,
    title: 'Performance Coilovers',
    price: '$620.00',
    image: 'https://images.unsplash.com/photo-1593941707884-1114a5870487?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    id: 11,
    title: 'Custom Shift Knob',
    price: '$95.00',
    image: 'https://images.unsplash.com/photo-1611633235555-45e252fe48c8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    id: 12,
    title: 'Sparco Seat Pair',
    price: '$999.00',
    image: 'https://images.unsplash.com/photo-1635748513933-710b66cc20cd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
];

export default function Rims() {
  return (
    <section className="bg-black text-white w-full min-h-screen">
      <div className="max-w-9xl mx-auto px-4 md:px-16 pt-20 md:pt-24 md:py-12">
        <div className="text-sm md:text-lg text-gray-400 mb-4">
          Home / Collections / <span className="text-white">Rims</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center  mb-6 gap-4">
          <h1 className="text-2xl font-semibold">Rims</h1>

          <div className="flex gap-2 text-xs">
            <select className="bg-black border border-gray-700 text-white px-3 py-2 rounded">
              <option>Availability</option>
            </select>
            <select className="bg-black border border-gray-700 text-white px-3 py-2 rounded">
              <option>Price</option>
            </select>
            <select className="bg-black border border-gray-700 text-white px-3 py-2 rounded">
              <option>Newest</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {mockProducts.map((product) => (
            <article
              key={product.id}
              className="bg-black p-2 rounded-sm hover:shadow-md transition duration-300 text-center"
            >
              <div className="w-full h-fit relative">
                <img
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover w-full h-24 md:h-48 rounded-sm"
                />
              </div>
              <h3 className="text-sm font-light mt-4 md:font-medium leading-tight">
                {product.title}
              </h3>
              <p className="text-xs text-gray-400 mt-1">{product.price}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
