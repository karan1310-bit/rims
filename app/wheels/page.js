'use client'

import ProductGrid from '@/components/Wheels'
import Lenis from '@studio-freight/lenis'
import React, { useEffect } from 'react'

const page = () => {
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
          <ProductGrid />
       </main>
  )
}

export default page