'use client';

import { useState } from 'react';
import Link from 'next/link';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white px-4 md:px-12 py-4 md:py-3 flex justify-between items-center">
        <Link href="/">
        <img
    src="/hero.png" // Replace with your actual logo path
    alt="Panesar Motorsports Logo"
    width={36}
    height={36}
    className="object-fill w-24 h-12 md:w-44 md:h-20"
  /></Link>
        <button
          onClick={toggleMenu}
          className="text-3xl focus:outline-none z-[999] cursor-pointer"
          aria-label="Toggle menu"
        >
          <IoMdMenu />
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-700 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />

      {/* Sidebar Panel */}
      <aside
        className={`fixed top-0 right-0 h-screen bg-[#111] text-white z-50 shadow-2xl px-8 py-10 flex flex-col transition-transform duration-[800ms] ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ width: '70vw', maxWidth: '500px' }}
      >
        {/* ✕ Close Icon Inside Panel */}
        <div className="flex justify-between items-center">
          <img
            src="/hero.png"
            alt="Logo"
            width={56}
            height={56}
            className="object-fill h-20 w-36 md:h-32 md:w-60"
          />
          <button
            onClick={closeMenu}
            className="text-base md:text-2xl hover:text-gray-400 transition"
            aria-label="Close menu"
          >
            <IoMdClose />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="mt-10 flex flex-col gap-4 text-sm md:text-base font-extralight uppercase">
          <Link href="/wheels" onClick={closeMenu} className="hover:text-gray-400 transition border-b border-gray-900 pb-2">Wheels</Link>
          <Link href="/seats" onClick={closeMenu} className="hover:text-gray-400 transition border-b border-gray-900 pb-2">Racing Seats</Link>
          <Link href="/steerings" onClick={closeMenu} className="hover:text-gray-400 transition border-b border-gray-900 pb-2">Steerings Wheels</Link>
          <Link href="/accessories" onClick={closeMenu} className="hover:text-gray-400 transition border-b border-gray-900 pb-2">Accessories</Link>
          <Link href="/extras" onClick={closeMenu} className="hover:text-gray-400 transition border-b border-gray-900 pb-2">Extras</Link>
        </nav>
      </aside>
    </>
  );
}
