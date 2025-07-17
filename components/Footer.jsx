'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaSlack } from 'react-icons/fa';
import { BsX } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-20 pt-16 pb-10 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-20">
        {/* Logo Section */}
        <div className="md:col-span-1 flex flex-col space-y-6">
          <div className="w-[120px] h-auto">
            <img
              src="https://get-jpn.com/cdn/shop/files/GETJAPANLLC.png?v=1737314620" // Replace with your logo path
              alt="Mintlify Logo"
              width={120}
              height={30}
              className="object-contain"
            />
          </div>
          <div className="flex space-x-4 text-gray-400 text-xl">
            <BsX />
            <FaLinkedin />
            <FaGithub />
            <FaSlack />
          </div>
          <div className="text-xs text-gray-400 pt-6">© 2025 Panersar Motosports, Inc.</div>
        </div>

        {/* Documentation */}
        <div>
          <h3 className="text-sm font-semibold mb-4">Documentation</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#">Getting Started</Link></li>
            <li><Link href="#">Components</Link></li>
            <li><Link href="#">API playground</Link></li>
            <li><Link href="#">Pricing</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div className='hidden md:block'>
          <h3 className="text-sm font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#">Customers</Link></li>
            <li><Link href="#">Enterprise</Link></li>
            <li><Link href="#">Request Preview</Link></li>
            <li><Link href="#">Integrations</Link></li>
            <li><Link href="#">Guides</Link></li>
            <li><Link href="#">Templates</Link></li>
            <li><Link href="#">Wall of Love</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div className="hidden md:block">
          <h3 className="text-sm font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Security</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-sm font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms of Service</Link></li>
            <li><Link href="#">Responsible Disclosure</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mt-10 hidden md:flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xs text-gray-400">All systems normal</div>
        <div className="flex items-center space-x-2 text-white text-sm">
          <button
            aria-label="Toggle dark mode"
            className="bg-[#1e1e1e] border border-gray-700 rounded-full p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.485-8.485h-1M4.515 12.515H3m15.364 4.95l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M12 5a7 7 0 000 14v-1a6 6 0 010-12V5z" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
