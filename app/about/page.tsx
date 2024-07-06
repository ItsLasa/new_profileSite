'use client'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Nav from "@/app/components/Nav";
import CoolClickMe from "@/app/components/CoolClickMe";
import CardNew from "@/app/components/CardNew";
import HoverCard from "@/app/components/HoverCard";
import GoToTopButton from "@/app/components/GoToTopButton";
import { useTheme } from "next-themes";
import { TabsDemo } from "../components/Tabs";
import Footer from "../components/Footer";

function Page() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");
 
  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <main>
      <Nav />

      <div className="py-10 mt-10">
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
                <p className="text-xs md:text-xl lg:text-4xl underline underline-offset-4 decoration-dashed">
                  About Me
                </p>
              </div>
              <h1 className="text-xl  tracking-normal lg:text-2xl font-light text-gray-500 md:text-2xl font-garamond text-justify">
              I expanded my skills into programming languages like HTML,CSS,JavaScript,Java,Python,C++, and C#. To deepen my understanding,and I follow information technolgy dgree course from univercity of jaffna. <br />
              <br />
              I further developed my expertise through certifications and courses from industry leaders like  IBM, and Google, alongside resources like FreeCodeCamp. I have extensively studied JavaScript and React documentation. And i love to read documentations. <br />
              Currently, I'm passionate about GoLang and fascinated by the advancements in artificial intelligence and its potential for positive impact. I have a strong desire and aptitude for continuous learning. 

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

        <TabsDemo/>

       <div className="end py-20  px-10">
        <div className="flex-col font-manrope flex px-10 py-8 mt-8 justify-center items-center gap-4 border bg-gradient-to-bl from-pink-50 to-blue-100 rounded-lg">
          <div className="text-center text-xl lg:text-4xl ">Get in Touch</div>
          <h1 className="text-justify text-gray-500 text-sm lg:text-xl">
          I'm eager to join a collaborative team where I can contribute my skills and learn from others. If you have an exciting project, lets discuss how I can be a valuable asset. I'm actively seeking a new opportunity to apply my skills and continue growing!
          </h1>
          <button className="border text-sm lg:text-xl shadow-lg bg-black text-white px-4 py-1 rounded-xl hover:bg-white hover:text-black hover:scale-110 hover:rounded-md hover:border-b transition-all duration-300">Say Hello</button>
        </div>
        </div>
       
      
      </div>
      <GoToTopButton/>
      <Footer/>
    </main>
  );
}

export default Page;
