'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSlipstream() {
  return (
    <section className="relative w-full min-h-screen">
      <div className="relative w-full h-screen">
        <Image
          src="/6.jpg" 
          alt="Red car with Slipstream wheels"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute top-[80%] md:top-[72%] left-6 md:left-14 -translate-y-1/2 text-white z-10 max-w-lg">
          <h1 className="text-5xl md:text-7xl font-bold leading-tighter uppercase">
            Elevate Your Drive
          </h1>
          <p className="mt-2 md:mt-3 text-[16px] md:text-xl text-gray-100 max-w-xs md:max-w-md">
             Premium forged wheels, flow formed wheels and much more
          </p>
          <Link href="/wheels">
  <button className="mt-4 md:mt-4 px-4 md:px-6 py-2 md:py-3 bg-white text-black font-semibold text-sm md:text-base rounded hover:bg-gray-200 transition cursor-pointer">
    Explore Collections
  </button>
</Link>
        </div>
      </div>
    </section>
  );
}
