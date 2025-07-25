// app/(site)/wheel-restoration/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Import() {
  return (
    <div className="min-h-screen bg-black text-white pt-20 md:pt-28 px-2 md:px-10">
      <main>
        {/* Breadcrumbs */}
        <div className="max-w-8xl px-4 sm:px-6 pt-6">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm md:text-lg text-white/60">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li>/</li>
              <li className="text-white">JDM Import Service</li>
            </ol>
          </nav>
        </div>

        {/* Title */}
        <section className="px-4 sm:px-6 pt-6">
          <h1 className="text-2xl font-semibold">
            JDM Import Service by Panesar Motorsports
          </h1>
        </section>

        {/* Hero Image */}
        <section className="px-4 sm:px-6 mt-8">
          <div className="relative aspect-[16/6] md:aspect-[16/4] w-full overflow-hidden rounded">
            <Image
              src="/japan/7.png" // Replace with your actual hero image
              alt="JDM Import Service Hero"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute md:bottom-4 bottom-1 left-2 md:left-4 text-xs sm:text-base md:text-lg">
              From gallery to your driveway – stress-free JDM imports.
            </div>
          </div>
        </section>

        {/* ==== JDM Import Service Copy ==== */}
        <section
          aria-labelledby="jdm-import"
          className="px-4 sm:px-6 mt-10 md:mt-12"
        >
          <h2
            id="jdm-import"
            className="text-xl sm:text-2xl md:text-3xl font-semibold"
          >
            Looking to import a JDM car from Japan? We’ve got you covered—end to end.
          </h2>

          <p className="mt-6 text-sm sm:text-lg leading-relaxed">
            From auction bidding to shipping, customs clearance, and final delivery,
            we handle the full import process so you don’t have to stress. Whether
            it’s a Skyline, Chaser, Silvia, or a VIP build like the Crown or Alphard,
            we work directly with trusted Japanese exporters and auction houses to
            source clean titles, verify condition, and avoid hidden issues.
          </p>

          <h3 className="mt-8 text-base sm:text-lg font-semibold">
            What’s included:
          </h3>
          <ul className="mt-4 space-y-2 text-sm sm:text-lg leading-relaxed">
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
              <span>Access to dealer-only auctions across Japan</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
              <span>Full translation and auction sheet review</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
              <span>Export prep and inland transport in Japan</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
              <span>Reliable container or RoRo shipping</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
              <span>Canada customs clearance and Form 1 handling</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
              <span>Pickup or delivery to your door</span>
            </li>
          </ul>

          <p className="mt-6 text-sm sm:text-lg leading-relaxed">
            We make importing simple, safe, and transparent.
          </p>

          {/* Optional CTA */}
          <div className="mt-4 md:mt-8">
            <a
              href={`mailto:guggspaji12@hotmail.com?subject=${encodeURIComponent(
                "Hi, I'm interested in your JDM import service. Can you provide more details?"
              )}`}
              className="inline-flex items-center justify-center text-center bg-gray-100 text-black font-semibold px-6 capitalize py-3 text-sm md:text-lg rounded transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 border border-white"
              aria-label="Send email inquiry about JDM import service"
            >
              inquire about JDM import
            </a>
          </div>
        </section>

        {/* Gallery */}
        <section
          aria-labelledby="gallery"
          className="px-4 sm:px-6 mt-12 md:mt-16 pb-4 md:pb-16"
        >
          <h2 id="gallery" className="sr-only">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
            {GALLERY_IMAGES.map((img, i) => (
              <figure key={i} className="relative aspect-square w-full overflow-hidden rounded">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.w}
                  height={img.h}
                  className="h-full w-full object-cover"
                />
              </figure>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

const GALLERY_IMAGES = [
  { src: "/japan/8.png", alt: "JDM Car 1", w: 800, h: 600 },
  { src: "/japan/2.jpg", alt: "JDM Car 2", w: 800, h: 600 },
  { src: "/japan/6.png", alt: "JDM Car 3", w: 800, h: 600 },
  { src: "/japan/5.jpg", alt: "JDM Car 4", w: 800, h: 600 },
];
