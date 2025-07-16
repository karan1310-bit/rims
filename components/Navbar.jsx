'use client';

export default function Navbar() {
  return (
    <nav className="w-full absolute top-0 left-0 z-50 px-4 md:px-12 py-6">
      <div className="max-w-9xl mx-auto flex justify-between items-center">
        {/* Brand Text */}
        <h1 className="text-lg md:text-xl text-white font-bold">
          Panesar Motorsports
        </h1>

        {/* Menu Button */}
        <button className="text-base md:text-lg text-white font-medium hover:text-gray-200 transition">
          Menu
        </button>
      </div>
    </nav>
  );
}
