'use client'
import React from "react";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import CoolClickMe from "../components/CoolClickMe";
import CardNew from "../components/CardNew";
import HoverCard from "../components/HoverCard";

function Page() {
  return (
    <main>
      <Nav />

      <div className="py-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="aboutContent px-14 lg:flex gap-10 justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="shadow-lg border rounded-3xl lg:w-[760px] w-[440px] h-auto bg-gradient-to-bl from-zinc-50 to-lime-100"
          >
            <div className="flex flex-col gap-4 font-manrope justify-start px-10 py-20">
              <div className="flex justify-between items-center mb-8 gap-2">
                <p className="text-xs md:text-xl lg:text-2xl">
                  Freelancer Designer Based in Sri Lanka
                </p>
              </div>
              <h1 className="text-xl tracking-tighter lg:text-4xl font-light text-gray-500 md:text-2xl font-franunce text-justify">
                Hey there, I’m{" "}
                <span className="text-black text-xl lg:text-4xl md:text-2xl">
                  Manoj
                </span>{" "}
                <span className="animate-pulse"> 👋 </span> Welcome to my{" "}
                <span className="underline decoration-dotted">
                  digital garden
                </span>{" "}
                🌱 I like building things, learning new things, and taking on new challenges.
                <br />
                <br /> In my free time, I enjoy listening to{" "}
                <span className="text-black cursor-pointer transition-all duration-300 hover:underline decoration-wavy decoration-violet-500">
                  music
                </span>
                , watching{" "}
                <span className="text-black cursor-pointer underline-offset-4 transition-all duration-300 hover:underline decoration-dashed decoration-blue-500">
                  movies, blogs
                </span>
                , and playing cricket.
                <br />
                <br />
              </h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex-col justify-center flex gap-10 mt-2"
          >
            <CardNew />
            <HoverCard />
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}

export default Page;
