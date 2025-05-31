import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import LogoCarousel from '@/components/LogoCarousel'
import Navbar from '@/components/Navbar'
import React from 'react'



const page = () => {
  return (
    <div className="flex flex-col items-center bg-slate-50 text-slate-950 overflow-hidden">
      <Navbar />
      <Hero />
      <LogoCarousel />
      <Intro />
    </div>
  )
}

export default page