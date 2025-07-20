'use client'

import Rims from '@/components/Rims'
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
      <Rims />
    </main>
  )
}

export default page