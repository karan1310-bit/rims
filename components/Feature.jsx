'use client';

import Image from 'next/image';

const mockProducts = [
  {
    id: 1,
    title: 'Bride Bucket Seat',
    price: '$895.00',
    image: 'https://images.unsplash.com/photo-1637979911446-87945573d43c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',    
  },
  {
    id: 2,
    title: 'Recaro Sport Seat',
    price: '$720.00',
    image: 'https://images.unsplash.com/photo-1613771750144-9f2177c60fb0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: 'Racing Steering Wheel',
    price: '$259.00',
    image: 'https://images.unsplash.com/photo-1713716767383-27f39a85255a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    title: 'JDM Wheel Set',
    price: '$1,195.00',
    image: 'https://images.unsplash.com/photo-1596923220081-3ed95f568a8f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    title: 'Nardi Classic Wheel',
    price: '$399.00',
    image: 'https://images.unsplash.com/photo-1505061816977-cb75f14ea48e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    title: 'Performance Coilovers',
    price: '$620.00',
    image: 'https://images.unsplash.com/photo-1705442198571-a58b8ae35ebb?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 7,
    title: 'Custom Shift Knob',
    price: '$95.00',
    image: 'https://images.unsplash.com/photo-1709722393765-fe78276dbde7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 8,
    title: 'Sparco Seat Pair',
    price: '$999.00',
    image: 'https://images.unsplash.com/photo-1611251953880-611e66e904e9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    image: 'https://images.unsplash.com/photo-1593941707884-1114a5870487?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 11,
    title: 'Custom Shift Knob',
    price: '$95.00',
    image: 'https://images.unsplash.com/photo-1611633235555-45e252fe48c8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 12,
    title: 'Sparco Seat Pair',
    price: '$999.00',
    image: 'https://images.unsplash.com/photo-1635748513933-710b66cc20cd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];


export default function FeaturedSection() {
  return (
    <section className="flex min-h-screen text-white">
      {/* Main Content */}
      <main className="flex-1 px-4 md:px-8 py-10">
        <h2 className="text-xl md:text-2xl font-light text-gray-200 mb-6">Featured Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <article key={product.id} className="text-white">
              <div className="w-full h-fit relative">
                <img
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover w-full h-32 md:h-56 rounded-sm"
                />
              </div>
              <h3 className="mt-2 text-xs font-light md:font-semibold leading-snug">{product.title}</h3>
              <p className="text-xs text-gray-300">{product.price}</p>
            </article>
          ))}
        </div>
      </main>
    </section>
  );
}
