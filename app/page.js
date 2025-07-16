import FeaturedSection from '@/components/Feature'
import HeroSlipstream from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <main className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <HeroSlipstream />
      <FeaturedSection />
    </main>
  )
}

export default page