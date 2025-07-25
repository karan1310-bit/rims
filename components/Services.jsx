import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Services = () => {
  return (
    <section className="w-full bg-black text-white px-6 md:px-16 pt-6 md:pt-10 pb-8 md:pb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-center mb-8 md:mb-10 uppercase z-10 relative">
            Custom <span className="text-red-600">Imported </span>
          </h2>
      <div className="flex flex-col md:flex-row gap-4 md:gap-4 justify-center items-stretch">

        

        {/* Custom Forged Wheels Block */}
        <div className="w-full md:w-1/2 aspect-[1/1] md:aspect-[4/3] relative rounded-2xl overflow-hidden shadow-lg group">
          <img
            src="/5.jpg"
            alt="Custom Forged Wheels"
            fill
            className="object-cover object-bottom md:object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 p-4 md:p-8 flex flex-col justify-end">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-1 md:mb-2">
                Custom Forged Wheels
              </h3>
              <p className="text-sm md:text-lg max-w-3xs md:max-w-md leading-tight md:leading-normal mb-2 md:mb-3">
             We specialize in fully custom, made-to-order forged wheels that are tailored to your exact needs.
              </p>
               <Link href="/custom">
  <button className="px-4 md:px-6 py-2 md:py-3 bg-white text-black font-semibold text-sm md:text-base rounded hover:bg-gray-200 transition cursor-pointer">
    Explore Wheels
  </button>
</Link>
            </div>
          </div>
        </div>

        {/* JDM Import Service Block */}
        <div className="w-full md:w-1/2 aspect-[1/1] md:aspect-[4/3] relative rounded-2xl overflow-hidden shadow-lg group">
          <Image
            src="/8.jpg"
            alt="JDM Import Service"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60 p-4 md:p-8 flex flex-col justify-end">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-1 md:mb-2">
                JDM Import Service
              </h3>
              <p className="text-sm md:text-lg max-w-2xs md:max-w-sm leading-tight md:leading-normal mb-2 md:mb-3">
                Looking to import a JDM car from Japan? We’ve got you covered — end to end.
              </p>
              <Link href="/import">
  <button className="px-4 md:px-6 py-2 md:py-3 bg-white text-black font-semibold text-sm md:text-base rounded hover:bg-gray-200 transition cursor-pointer">
    Start Import Process
  </button>
</Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;

