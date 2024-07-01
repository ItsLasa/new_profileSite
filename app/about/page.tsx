import React from "react";
import Nav from "../components/Nav";
import CoolClickMe from "../components/CoolClickMe";
import CardNew from "../components/CardNew";
import HoverCard from "../components/HoverCard";

function page() {
  return (
    <main>
      <Nav />

      <div className="py-10 ">
        <div className="aboutContent  px-14  lg:flex  gap-10 justify-center ">
          <div className=" shadow-lg border rounded-3xl lg:w-[760px] w-[440px] h-auto bg-gradient-to-bl from-zinc-50 to-lime-100">
            <div className="flex flex-col gap-4 font-manrope justify-start  px-10 py-20 ">
              <div className="flex justify-between items-center mb-8 gap-2 ">
                <p className="text-xs md:text-xl lg:text-2xl ">
                  Freelancer Desingner Based Sri Lanka
                </p>
              </div>
              <h1 className=" text-xl tracking-tighter  lg:text-4xl font-light text-gray-500  md:text-2xl font-franunce text-justify ">
                Hey there, I’m{" "}
                <span className="   text-black  text-xl  lg:text-4xl  md:text-2xl">
                  Manoj
                </span>{" "}
                <span className=" animate-pulse"> 👋 </span> Welcome to my{" "}
                <span className=" underline decoration-dotted">
                  digital garden
                </span>{" "}
                🌱 I like building things, and Learning new things and to take
                on new challenges. .
                <br />
                <br /> In my free time, I enjoy listing{" "}
                <span className=" text-black cursor-pointer transition-all duration-300 hover:underline decoration-wavy decoration-violet-500">
                  music
                </span>{" "}
                watching{" "}
                <span className="text-black cursor-pointer underline-offset-4 transition-all duration-300 hover:underline  decoration-dashed decoration-blue-500 ">
                  movies,blogs{" "}
                </span>
                and playing cricket. <br />
                <br />
              </h1>
            </div>
          </div>

          <div className="flex-col justify-center flex gap-10 mt-2 ">
          <CardNew />
          <HoverCard/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
