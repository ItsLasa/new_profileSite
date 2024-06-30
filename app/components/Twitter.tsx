import Image from 'next/image'
import React from 'react'
import { SlSocialTwitter } from 'react-icons/sl'

function Twitter() {
  return (
    <div className=' shadow-lg rounded-lg p-8'>
        <div className='flex justify-between items-center px-2'>
           <Image src={'https://pbs.twimg.com/profile_images/1361782884558729216/Sm-FPj4w_400x400.jpg'} width={100} height={100} alt={''}/>
           <div>
           <SlSocialTwitter />
           </div>
        </div>
    </div>
  )
}

export default Twitter