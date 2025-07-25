'use client'

import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import HeroSlipstream from '@/components/Hero'
import FeaturedSection from '@/components/Feature'
import PoetrySection from '@/components/About'
import Services from '@/components/Services'

const Page = () => {
  useEffect(() => {
    const lenis = new Lenis()

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <main className="min-h-screen w-full bg-black text-white">
      <HeroSlipstream />
      <FeaturedSection />
           <Services />
      <PoetrySection />
 
    </main>
  )
}

export default Page
