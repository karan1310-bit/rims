'use client'

import React, { useEffect } from 'react';
import Others from '@/components/Extras'
import Lenis from '@studio-freight/lenis'

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
      <Others />
    </main>
  )
}

export default page