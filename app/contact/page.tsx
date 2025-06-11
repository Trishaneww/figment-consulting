import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Navbar2 from '@/components/Navbar2'
import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col items-center bg-slate-200">
        <Navbar2 />
        <ContactForm />
        <Footer />
    </div>
  )
}

export default Contact