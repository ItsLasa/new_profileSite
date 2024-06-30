import Link from 'next/link'
import React from 'react'
import { useScroll } from "framer-motion"
import Image from 'next/image'
import mark from '@/public/mark.gif'

function NavBar() {


  return (
    <div className='bg-[#c7daec49] shadow-gray-300 shadow-md transition-all duration-300 ml-[50rem] mt-6 fixed font-manrope rounded-xl gap-6 w-[420px] py-2 flex  justify-center items-center'>
        <Link href={'/'} className='hover:font-medium'>Home</Link>
        <Link href={'/projects'} className='hover:font-medium'>Projects</Link>
        <Link href={''} className='hover:font-medium'>About Me</Link>
        <Link href={''} className='py-2 bg-white px-6 transition-all duration-300 rounded-lg hover:scale-105 hover:font-medium'><span className=' transition-all duration-300 animate-ping'>🟢</span> Hire Me</Link>
    </div>


  )
}

export default NavBar