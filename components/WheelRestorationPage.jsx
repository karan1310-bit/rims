// app/(site)/wheel-restoration/page.tsx  (or wherever you want to place it)
import Image from "next/image";
import Link from "next/link";

export default function WheelRestorationPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20 md:pt-28 px-2 md:px-10">

      <main className="">
        {/* Breadcrumbs */}
        <div className="max-w-8xl px-4 sm:px-6 pt-6">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm md:text-lg text-white/60">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li>/</li>
              <li className="text-white">Custom Forged Wheels</li>
            </ol>
          </nav>
        </div>

        {/* Title */}
        <section className="px-4 sm:px-6 pt-6">
          <h1 className="text-2xl font-semibold">
            Custom Forged Wheels by Panesar Motorsports
          </h1>
        </section>

        {/* Hero Image */}
        <section className=" px-4 sm:px-6 mt-8">
          <div className="relative aspect-[16/6] md:aspect-[16/4] w-full overflow-hidden rounded">
            <Image
              src="/3.png" // replace with your real image
              alt="Wheel Restoration Hero"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute md:bottom-4 bottom-1 left-2 md:left-4 text-xs sm:text-base md:text-lg">
             From concept to street – your wheels, your way.
            </div>
          </div>
        </section>

        {/* ==== Custom Forged Wheels Copy (replaces the 3 old sections) ==== */}
<section
  aria-labelledby="forged-wheels"
  className="px-4 sm:px-6 mt-12"
>
  <h2
    id="forged-wheels"
    className="text-xl sm:text-2xl md:text-3xl font-semibold"
  >
    Fully Custom, Made‑to‑Order Forged Wheels
  </h2>

  <p className="mt-6 text-sm sm:text-lg leading-relaxed">
    Looking for wheels that actually fit your car and your vision? We
    specialize in fully custom, made-to-order forged wheels that are tailored to
    your exact needs.
  </p>

  <p className="mt-4 text-sm sm:text-lg leading-relaxed">
    We design wheels to your exact specs — width, offset, bolt pattern, brake
    clearance, and lip depth — with a variety of finish options (chrome,
    brushed, anodized, polish, multi-tone, etc.). Whether you're going for{" "}
    <strong>deep dish stance, flush fitment, or track performance</strong>, we’ll
    get it done right.
  </p>

  <h3 className="mt-8 text-base sm:text-lg font-semibold">
    Why our forged wheels stand out:
  </h3>
  <ul className="mt-4 space-y-2 text-sm sm:text-lg leading-relaxed">
    <li className="flex gap-2">
      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
      <span>6061-T6 aerospace-grade aluminum</span>
    </li>
    <li className="flex gap-2">
      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
      <span>Monoblock, 2-piece, and 3-piece options</span>
    </li>
    <li className="flex gap-2">
      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
      <span>Built-to-order for your car, not mass-produced</span>
    </li>
    <li className="flex gap-2">
      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
      <span>Load-rated, street safe, and aggressively styled</span>
    </li>
    <li className="flex gap-2">
      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
      <span>CAD fitment verification &amp; 3D preview available</span>
    </li>
  </ul>

  <p className="mt-6 text-sm sm:text-lg leading-relaxed">
    You pick the size, finish, and vibe—we build the wheels.{" "}
    <strong>No compromises.</strong>
  </p>

  {/* Optional CTA */}
  <div className="mt-4 md:mt-8">
    <a
  href={`mailto:guggspaji12@hotmail.com?subject=${encodeURIComponent(
    "Hi, I'm interested in purchasing custom wheels. can you provide more details?"
  )}`}
  className="inline-flex items-center justify-center text-center bg-gray-100 text-black font-semibold px-6 capitalize py-3 text-sm md:text-lg rounded transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 border border-white"
  aria-label="Send email inquiry about custom wheels"
>
  inquire about custom wheels
</a>
  </div>
</section>


        {/* Gallery */}
        <section
          aria-labelledby="gallery"
          className="px-4 sm:px-6 mt-12 md:mt-16 pb-4 md:pb-16"
        >
          <h2 id="gallery" className="sr-only">Gallery</h2>

          {/* Masonry-ish grid (simple responsive grid) */}
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

/* -------------------------- Small helpers & data -------------------------- */

function NavLink({
  href,
  children,
  mobile = false,
}) {
  const base =
    "block hover:text-white transition-colors";
  return (
    <Link
      href={href}
      className={
        mobile
          ? `${base} text-sm`
          : `${base}`
      }
    >
      {children}
    </Link>
  );
}

const GALLERY_IMAGES = [
  // Replace all of these with real image paths/sizes you have in /public
  { src: "/images/1.jpg", alt: "Wheel 1", w: 800, h: 600 },
  { src: "/images/2.jpg", alt: "Wheel 2", w: 800, h: 600 },
  { src: "/images/3.jpg", alt: "Wheel 10", w: 800, h: 600 },
  { src: "/images/4.jpg", alt: "Wheel 4", w: 800, h: 600 },
  { src: "/images/5.jpg", alt: "Wheel 5", w: 800, h: 600 },
  { src: "/images/6.jpg", alt: "Wheel 6", w: 800, h: 600 },
  { src: "/images/7.jpg", alt: "Wheel 7", w: 800, h: 600 },
  { src: "/images/8.jpg", alt: "Wheel 8", w: 800, h: 600 },
  { src: "/images/9.jpg", alt: "Wheel 9", w: 800, h: 600 },
  { src: "/images/10.jpg", alt: "Wheel 10", w: 800, h: 600 },
  { src: "/images/11.jpg", alt: "Wheel 11", w: 800, h: 600 },
  { src: "/images/12.jpg", alt: "Wheel 12", w: 800, h: 600 },
  { src: "/images/13.jpg", alt: "Wheel 1", w: 800, h: 600 },
  { src: "/images/14.jpg", alt: "Wheel 2", w: 800, h: 600 },
  { src: "/images/15.jpg", alt: "Wheel 3", w: 800, h: 600 },
  { src: "/images/1.webp", alt: "Wheel 4", w: 800, h: 600 },
  { src: "/images/1.png", alt: "Wheel 5", w: 800, h: 600 },
  { src: "/images/2.png", alt: "Wheel 6", w: 800, h: 600 },
  { src: "/images/3.png", alt: "Wheel 7", w: 800, h: 600 },
  { src: "/images/4.png", alt: "Wheel 8", w: 800, h: 600 },
  { src: "/images/5.png", alt: "Wheel 9", w: 800, h: 600 },
  { src: "/images/6.png", alt: "Wheel 10", w: 800, h: 600 },
  { src: "/images/7.png", alt: "Wheel 11", w: 800, h: 600 },
  { src: "/images/8.png", alt: "Wheel 12", w: 800, h: 600 },
  { src: "/images/9.png", alt: "Wheel 12", w: 800, h: 600 },
  { src: "/images/10.png", alt: "Wheel 12", w: 800, h: 600 },
];
