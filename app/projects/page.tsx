import React from 'react'
import NavBar from '../components/NavBar'
import ProjectCard from '../components/ProjectsCards'
import projects from '../data/projects'

function page() {
  return (
    <main>

        <NavBar/>

        <div className="main flex-col justify-start items-center gap-4 py-16 px-10 ">

        <div className=' font-manrope '>
            <h1 className='text-8xl mb-6 font-cormorant'>projects.</h1>
            <p className=' text-gray-400 text-xl'>I like building things. Here are a few things I've built thus far that I'm pretty pleased with. Most, if not all of them, were built for fun.</p>
        </div>

        <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
        

        </div>

    </main>
  )
}

export default page