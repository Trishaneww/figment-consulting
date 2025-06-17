import { Instagram, X } from 'lucide-react'
import React from 'react'

const Footer2 = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 items-center justify-between px-6 lg:px-32 w-full py-6">
        <p className="lg:w-1/3">Copyright © Wize Templates. All rights reserved.</p>

        <div className="flex items-center justify-center gap-2 lg:w-1/3">
            <div className="h-[30px] w-[30px] border-[1px] border-gray-400 bg-white rounded-full flex items-center justify-center p-2">
                <Instagram />
            </div>

            <div className="h-[30px] w-[30px] border-[1px] border-gray-400 bg-white rounded-full flex items-center justify-center p-2">
                <X />
            </div>
        </div>

         <p className="lg:w-1/3 lg:text-right">Privacy Policy</p>

    </div>
  )
}

export default Footer2