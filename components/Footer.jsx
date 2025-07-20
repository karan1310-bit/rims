'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-20 pt-16 pb-10 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-20">
        {/* Logo Section */}
        <div className="md:col-span-1 flex flex-col space-y-6">
          <div className="w-[170px] md:w-[220px] h-auto">
            <Image
              src="/hero.png" // Replace with your real logo file
              alt="Panesar Motorsports Logo"
              width={200}
              height={80}
              className="object-contain"
            />
          </div>

          <div className="flex space-x-4 text-gray-400 text-xl">
            <a href="https://wa.me/917225928721" target="_blank" rel="noopener noreferrer"><BsWhatsapp /></a>
            <a href="https://instagram.com/panesarmotorsports" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://facebook.com/panesarmotorsports" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://youtube.com/@panesarmotorsports" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>

          <div className="text-xs md:text-sm text-gray-400 md:pt-6">© 2025 Panesar Motorsports. All rights reserved.</div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-sm font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="//wheels">Wheels</Link></li>
            <li><Link href="/rims">Rims</Link></li>
            <li><Link href="/steerings">Racing Seats</Link></li>
            <li><Link href="/tyres">Tyres</Link></li>
            <li><Link href="/others">Others</Link></li>
          </ul>
        </div>

        {/* Information */}
        <div className="hidden md:block">
          <h3 className="text-sm font-semibold mb-4">Info</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/">About Us</Link></li>
            <li><Link href="/wheels">Collections</Link></li>
            <li><Link href="/">FAQs</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div className="">
          <h3 className="text-sm font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/contact">236-880-5446</Link></li>
            <li><Link href="/careers">Surrey, BC, Canada</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="hidden md:block">
          <h3 className="text-sm font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
            <li><Link href="/refund">Refund Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="md:mt-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div className="text-sm text-gray-400"></div>
        <div className="text-sm text-gray-400">
          Built by Racers, for Racers
        </div>
      </div>
    </footer>
  )
}
