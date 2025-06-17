import { CloudLightning } from 'lucide-react'
import React from 'react'

const AmazonHeader = () => {
  return (
    <div className="flex flex-col items-center text-center py-32 gap-2 px-6">
        <p className="text-3xl lg:text-6xl font-semibold lg:w-[40%]">Unlock the <span className="italic">Full Potential</span> of Your Business</p>
        <p className="lg:w-[40%]">Our SaaS solution is designed to provide you with the tools and insights you need to drive growth and efficiency. Here’s how we can help you achieve your business goals.</p>

        <section className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:w-[75%] mt-12">
            <div className="gap-2 w-full lg:w-1/3 flex flex-col items-start text-left  bg-white border-[1px] border-gray-200 rounded-lg px-4 py-6">
                <CloudLightning size={30}/>
                <p className="text-xl lg:text-3xl font-semibold mt-12">Seamless Integration</p>
                <p className="text-base">Easily integrate with your existing systems and workflows, reducing downtime and ensuring a smooth transition.</p>
            </div>

             <div className="gap-2 w-full lg:w-1/3 flex flex-col items-start text-left bg-white  border-[1px] border-gray-200 rounded-lg px-4 py-6">
                <CloudLightning size={30}/>
                <p className="text-xl lg:text-3xl font-semibold mt-12">Seamless Integration</p>
                <p className="text-base">Easily integrate with your existing systems and workflows, reducing downtime and ensuring a smooth transition.</p>
            </div>

             <div className="gap-2 w-full lg:w-1/3 flex flex-col items-start text-left bg-white  border-[1px] border-gray-200 rounded-lg px-4 py-6">
                <CloudLightning size={30}/>
                <p className="text-xl lg:text-3xl font-semibold mt-12">Seamless Integration</p>
                <p className="text-base">Easily integrate with your existing systems and workflows, reducing downtime and ensuring a smooth transition.</p>
            </div>
        </section>
    </div>
  )
}

export default AmazonHeader