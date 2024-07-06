import React from 'react'

function WhatCanCard() {
  return (
    <div className=' bg-gradient-to-r mb-6 from-slate-50 to-stone-100 border shadow-lg rounded-md font-manrope w-full h-auto p-8'>
        <div className=' text-2xl lg:text-5xl font-semibold font-manrope'>What I can do for you</div> <br />
        <div className=' flex justify-center items-center
        gap-5 '>
            <div>
                <h1 className=' text-xl lg:text-2xl'>For businesses</h1> <br />
                <p className=' text-sm lg:text-xl text-gray-500'>I design interfaces that are friendly and valuable for customers and easy to implement for engineers.</p>
            </div>

            <div>
                <h1 className=' text-xl lg:text-2xl'>For startups</h1> <br />
                <p className=' text-sm lg:text-xl text-gray-500'>I help to identify the problem and design an MVP. I will advise on tools for building if you don't have an engineer or development resources.</p>
            </div>

            <div>
                <h1 className='text-xl lg:text-2xl'>For product teams</h1> <br />
                <p className=' text-sm lg:text-xl text-gray-500'>I design growth experiments and help your team look at the challenges differently to build a better product</p>
            </div>

            
        </div>
    </div>
  )
}

export default WhatCanCard