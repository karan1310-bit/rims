'use client';

import Image from 'next/image';

export default function HeroSlipstream() {
  return (
    <section className="relative w-full min-h-screen bg-white">
      <div className="relative w-full h-screen">
        <Image
          src="/2.jpg" // Replace this with actual image path in /public
          alt="Red car with Slipstream wheels"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute top-[52%] md:top-[60%] left-4 md:left-20 -translate-y-1/2 text-white z-10 max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            DRIVE WITH DISTINCTION
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-100 max-w-md">
             Premium wheels and accessories built for performance, precision, and style.
          </p>
          <button className="mt-6 px-4 md:px-6 py-2 md:py-3 bg-white text-black font-semibold text-base rounded hover:bg-gray-200 transition">
            Explore Collections
          </button>
        </div>
      </div>
    </section>
  );
}
