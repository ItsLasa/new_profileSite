import Link from 'next/link'
import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaCodepen, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <div className='bg-black p-8 w-full h-auto text-white'>
        <div className='flex flex-col justify-center items-center gap-4'>
            <h1 className=''>Let’s
            Connect.</h1>

            <div className="mail">
                Manojlasantha306@Gmail.com
            </div>
            <div className='flex justify-center font-manrope items-center gap-4'>
                <Link href={''}><FaGithub className=' transition-all duration-300 scale-110' /></Link>
                <Link href={''}><FaLinkedin  className=' transition-all duration-300 scale-110'/></Link>
                <Link href={''}><FaInstagram  className=' transition-all duration-300 scale-110'/></Link>
                <Link href={''}><FaTwitter  className=' transition-all duration-300 scale-110'/></Link>
                <Link href={''}><FaCodepen  className=' transition-all duration-300 scale-110'/></Link>
            </div>
        </div>
    </div>
  )
}

export default Footer