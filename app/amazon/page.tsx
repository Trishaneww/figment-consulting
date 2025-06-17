import AmazonBenefits from '@/components/AmazonBenefits'
import AmazonHeader from '@/components/AmazonHeader'
import BlogPosts from '@/components/BlogPosts'
import CTA1 from '@/components/CTA1'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import Footer2 from '@/components/Footer2'
import Hero from '@/components/Hero'
import Navbar2 from '@/components/Navbar2'
import React from 'react'

const Amazon = () => {
  return (
    <div className="flex flex-col items-center bg-[#FAFAFA] text-slate-950 overflow-hidden">
        <Navbar2 />
        <Hero />
        <AmazonHeader />
        <AmazonBenefits />



        <CTA1 />

        <Faq />
        <BlogPosts />
        <Footer />
        <Footer2 />

    </div>
  )
}

export default Amazon