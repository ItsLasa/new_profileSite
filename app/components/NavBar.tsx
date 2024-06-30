import Link from 'next/link'
import React from 'react'
import { useScroll } from "framer-motion"
import Image from 'next/image'
import mark from '@/public/mark.gif'

function NavBar() {


  return (
    <div className='flex justify-end px-6'>
      <div className='bg-[#dcebf83f] shadow-gray-300 text-gray-800 shadow-md transition-all duration-300  mt-4 fixed font-manrope rounded-xl gap-5 w-auto px-4 py-2 flex text-xs md:text-sm lg:text-base   justify-center items-center'>
        <Link href={'/'} className='hover:text-black '>Home</Link>
        <Link href={'/projects'} className='hover:text-black'>Projects</Link>
        <Link href={''} className='hover:text-black'>About Me</Link>
        <Link href={''} className='py-2 bg-white px-6 transition-all duration-300 rounded-lg hover:text-black  hover:scale-105'><span className=' transition-all duration-300 animate-ping'>🟢</span> Hire Me</Link>
    </div>

    </div>

  )
}

export default NavBar