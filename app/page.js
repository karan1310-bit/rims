import PoetrySection from '@/components/About'
import FeaturedSection from '@/components/Feature'
import Footer from '@/components/Footer'
import HeroSlipstream from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <main className="min-h-screen w-full bg-black text-white">

      <HeroSlipstream />
      <FeaturedSection />
      <PoetrySection />

    </main>
  )
}

export default page