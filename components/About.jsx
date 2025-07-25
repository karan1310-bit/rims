'use client';

import Image from 'next/image';

export default function PoetrySection() {
  return (
    <section className="w-full bg-black text-white px-6 md:px-20 pt-8 md:pt-20 md:pb-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-8 md:space-y-12">
        {/* Title */}
        <div className="relative">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight uppercase z-10 relative">
            WHERE <span className="text-red-600">STYLE</span> MEETS SPEED
          </h2>

          {/* Large faded background text */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <h1 className="text-[28vw] md:text-[20vw] font-bold opacity-5 md:opacity-7 leading-none mt-28 md:mt-32 select-none block">
              DRIFT
            </h1>
          </div>
        </div>

        {/* Images + Description */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full justify-center items-start">
          {/* Left Image */}
          <div className="w-full md:w-1/2 aspect-[4/3] relative rounded-4xl overflow-hidden">
            <Image
              src="/3.jpg"
              alt="Workshop discussion"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            {/* Right Image */}
            <div className="w-full aspect-[4/3] relative rounded-4xl overflow-hidden">
              <Image
                src="/4.jpg"
                alt="Team admiring car"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Centered Description */}
        <div className="md:max-w-4xl text-base md:text-lg leading-tight text-gray-300">
          <h2>Panesar Motorsports is built by car enthusiasts—for car enthusiasts.</h2>
          <p className='text-sm md:text-lg pt-2 max-w-xs md:max-w-3xl'>
            Based in Surrey, BC, we specialize in custom forged wheels, racing seats, steering wheels, and JDM vehicle import services. Whether you're chasing the perfect fitment, hunting for a clean Skyline or Chaser, or building your dream stance setup—we’re here to make it happen.
          </p>
        </div>
      </div>
    </section>
  );
}
