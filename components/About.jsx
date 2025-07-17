'use client';

import Image from 'next/image';

export default function PoetrySection() {
  return (
    <section className="w-full bg-black text-white px-6 md:px-20 pt-8 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12">
        {/* Title */}
        <div className="relative">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight uppercase z-10 relative">
            WHERE <span className="text-red-600">STYLE</span> MEETS SPEED
          </h2>

          {/* Large faded background text */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <h1 className="text-[20vw] font-bold opacity-5 leading-none mt-32 select-none hidden md:block">
              ABOUT
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
        <div className="max-w-3xl text-sm md:text-base leading-relaxed text-gray-300 pt-0">
          <p>
            Precision meets passion in every build. From hand-picked performance parts to expert tuning, our gear is engineered for those who live life in the fast lane.
          </p>
  
        </div>
      </div>
    </section>
  );
}
