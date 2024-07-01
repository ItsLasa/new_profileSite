'use client'
import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectsCards";
import projects from "../data/projects";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

function Page() {
  return (
    <main>
      <NavBar />

      <div className="main flex-col justify-start items-center gap-4 py-16 px-10">
        <motion.div
          className="font-manrope"
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          <motion.h1
            className="text-8xl mb-6 font-cormorant"
            variants={textVariants}
          >
            projects.
          </motion.h1>
          <motion.p
            className="text-gray-500 text-xl"
            variants={textVariants}
          >
            I like building things. Here are a few things I've built thus far that I'm pretty pleased with. Most, if not all of them, were built for fun.
          </motion.p>
        </motion.div>

        <motion.div
          className="container mx-auto p-4"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default Page;
