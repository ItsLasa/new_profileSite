import Link from 'next/link'
import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaCodepen, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <div className='bg-black p-8 mt-4 w-full font-manrope rounded-t-3xl  h-auto text-white'>
        <div className='flex flex-col justify-center items-center gap-8'>
            <h1 className='text-6xl font-franunce '>Let’s
            Connect.</h1>

            <div className="mail">
                Manojlasantha306@Gmail.com
            </div>
            <div className='flex justify-center font-manrope items-center gap-4'>
                <Link href={''} passHref><FaGithub   className=' text-xl transition-all duration-300 hover:scale-110' /></Link>
                <Link href={''}><FaLinkedin  className=' text-xl  transition-all duration-300 hover:scale-110'/></Link>
                <Link href={''}><FaInstagram  className=' text-xl  transition-all duration-300 hover:scale-110'/></Link>
                <Link href={''}><FaTwitter  className=' text-xl  transition-all duration-300 hover:scale-110'/></Link>
                <Link href={''}><FaCodepen  className=' text-xl  transition-all duration-300 hover:scale-110'/></Link>
            </div>
        </div>
    </div>
  )
}

export default Footer