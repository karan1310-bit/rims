'use client'

import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'
import ProductDetail from '@/components/ProductDetails'

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
          <ProductDetail />
        </main>
  )
}

export default page