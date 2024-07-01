'use client'
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Twitter from "./Twitter";
import Languages from "./Languages";
import Dock from "./Dock";
import CoolClickMe from "./CoolClickMe";
import { useTheme } from "next-themes";
import Particles from "./magicui/particles";
import Nav from "./Nav";
import { BorderBeam } from "./magicui/border-beam";
import GoToTopButton from "./GoToTopButton";

function Home() {
 
  
    const { theme } = useTheme();
    const [color, setColor] = useState("#ffffff");
   
    useEffect(() => {
      setColor(theme === "dark" ? "#ffffff" : "#000000");
    }, [theme]);

  return (
    <main>
      {/* <NavBar /> */}
      <Nav/>
      <div className="   lg:flex gap-2 py-12 px-4 ">
      <div className=" shadow-lg border rounded-3xl lg:w-[760px] w-[440px] h-auto bg-gradient-to-bl from-zinc-50 to-lime-100">
        <div className="flex flex-col gap-4 font-manrope justify-start  px-10 py-20 ">
          <div className="flex justify-between items-center mb-8 gap-2 ">
          <p className="text-xs md:text-xl lg:text-2xl ">
            Freelancer Desingner Based Sri Lanka
          </p>
          <div>
            <CoolClickMe/>
          </div>
          </div>
          <h1 className=" text-xl tracking-tighter  lg:text-4xl font-light text-gray-500  md:text-2xl font-franunce text-justify ">
            Hey there, I’m{" "}
            <span className="   text-black  text-xl  lg:text-4xl  md:text-2xl">
              Manoj
            </span>{" "}
            <span className=" animate-pulse">{" "}👋{" "}</span> Welcome to my{" "}
            <span className=" underline decoration-dotted">digital garden</span>{" "}
            🌱 I like building things, and Learning new things and to take on new challenges. .
            <br />
            <br /> In my free time, I enjoy listing{" "}
            <span className=" text-black cursor-pointer transition-all duration-300 hover:underline decoration-wavy decoration-violet-500">music</span> watching{" "}
            <span className="text-black cursor-pointer underline-offset-4 transition-all duration-300 hover:underline  decoration-dashed decoration-blue-500 ">movies,blogs </span>
            and playing cricket. <br /><br />
          </h1>
        </div>
        
        
      </div>
       <div className="ml-6 py-2">

 
      <Dock />
      <Languages />

      </div>
   

      </div>
     

      <div className="flex justify-start gap-8 items-center">
        <Twitter />
        
      </div>

      <GoToTopButton/>

      
    </main>
  );
}

export default Home;
