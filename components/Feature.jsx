'use client';

import Image from 'next/image';

const mockProducts = [
  {
    id: 1,
    title: 'Bride Bucket Seat',
    price: '$895.00',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',    
  },
  {
    id: 2,
    title: 'Recaro Sport Seat',
    price: '$720.00',
    image: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    title: 'Racing Steering Wheel',
    price: '$259.00',
    image: 'https://plus.unsplash.com/premium_photo-1686730540270-93f2c33351b6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    title: 'JDM Wheel Set',
    price: '$1,195.00',
    image: 'https://images.pexels.com/photos/10074166/pexels-photo-10074166.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 5,
    title: 'Nardi Classic Wheel',
    price: '$399.00',
    image: 'https://plus.unsplash.com/premium_photo-1686730540270-93f2c33351b6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    title: 'Performance Coilovers',
    price: '$620.00',
    image: 'https://plus.unsplash.com/premium_photo-1683134240084-ba074973f75e?q=80&w=1295&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 7,
    title: 'Custom Shift Knob',
    price: '$95.00',
    image: 'https://images.pexels.com/photos/11246018/pexels-photo-11246018.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 8,
    title: 'Sparco Seat Pair',
    price: '$999.00',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 0,
    title: 'Nardi Classic Wheel',
    price: '$399.00',
    image: 'https://plus.unsplash.com/premium_photo-1686730540270-93f2c33351b6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 10,
    title: 'Performance Coilovers',
    price: '$620.00',
    image: 'https://plus.unsplash.com/premium_photo-1683134240084-ba074973f75e?q=80&w=1295&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 11,
    title: 'Custom Shift Knob',
    price: '$95.00',
    image: 'https://images.pexels.com/photos/11246018/pexels-photo-11246018.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 12,
    title: 'Sparco Seat Pair',
    price: '$999.00',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];


export default function FeaturedSection() {
  return (
    <section className="flex min-h-screen text-white">
      {/* Main Content */}
      <main className="flex-1 bg-neutral-950 px-4 md:px-8 py-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">Featured</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <article key={product.id} className="text-white">
              <div className="w-full h-fit relative">
                <img
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover w-full h-48 md:h-56 rounded-lg"
                />
              </div>
              <h3 className="mt-2 text-sm font-semibold leading-snug">{product.title}</h3>
              <p className="text-sm text-gray-300">{product.price}</p>
            </article>
          ))}
        </div>
      </main>
    </section>
  );
}
