import React from "react";
import NavBar from "./NavBar";

function Home() {
  return (
    <main>
      <NavBar />
      <div className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-teal-500 via-cyan-600 to-blue-700 rounded-3xl w-auto h-auto">
        <div className="flex flex-col gap-4 font-manrope justify-start  px-10 py-40 lg:">
          <p className="text-sm md:text-xl lg:text-2xl">Freelancer Desingner Based Sri Lanka</p>
          <h1 className=" text-4xl lg:text-8xl  md:text-6xl">
            Building digital <br /> products, brands, & <br />
            experiences.
          </h1>
        </div>
      </div>
    </main>
  );
}

export default Home;
