import Image from 'next/image'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import { SlSocialTwitter } from 'react-icons/sl'

function Twitter() {
  return (
    <div className='shadow-lg rounded-lg w-[350px] px-4 py-4 h-auto bg-[#F5F5F5] border   mt-4'>
        <div className='flex justify-between items-center px-2 py-4'>
           <Image src={'https://pbs.twimg.com/profile_images/1361782884558729216/Sm-FPj4w_400x400.jpg'} width={50} height={50} alt={''} className=' rounded-full'/>
           <div className='px-4 py-4 rotate-3 bg-blue-400 rounded-lg '>
           <SlSocialTwitter className='text-xl font-medium animate-pulse' />
           </div>
        </div>
        <div className='px-2  font-manrope text-2xl'>
        i get computers ‘puting ✸ ai design <span className='text-orange-700'>@figma</span> ✸ prev @diagram
        </div>
        <div className='group mt-4 px-2 py-2 gap-2 flex justify-center items-center last: shadow-lg border-[1px] border-black rounded-xl transition-all duration-700 cursor-pointer'>
            <button>Read my tweets </button>
            <MdArrowOutward className=' group-hover:rotate-45 group-hover:scale-125 ' />
        </div>
    </div>
  )
}

export default Twitter