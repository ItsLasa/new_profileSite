import Image from 'next/image'
import React from 'react'
import { FaLinkedin } from 'react-icons/fa6'

function CardNew() {
  return (
    // <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-4 sm:py-4">
    <div
        className="group  relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-16 w-16 shadow-lg rounded-lg bg-[#4A99E9] transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto max-w-md">
            <div className='flex justify-between items-center'>
            <span className="grid h-16 w-16 place-items-center rounded-lg bg-[#4A99E9] transition-all duration-300 group-hover:bg-[#4A99E9]">
                <FaLinkedin className="h-10 w-10 shadow-lg   text-white transition-all"/>
            </span>

            <Image src={'https://pbs.twimg.com/profile_images/1361782884558729216/Sm-FPj4w_400x400.jpg'} width={50} height={50} alt={''} className=' rounded-full'/>

            </div>
            <div
                className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share
                    online.</p>
            </div>
            <div className="pt-5 text-base font-semibold leading-7">
                <p>
                    <a href="#" className="text-sky-500 transition-all duration-300 group-hover:text-white">Read the docs
                        &rarr;
                    </a>
                </p>
            </div>
        </div>
    </div>
// </div>

  )
}

export default CardNew