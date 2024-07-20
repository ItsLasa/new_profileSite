import Image from "next/image";
import React from "react";

function aboutMe() {
  return (
    <main className="bg-gradient-to-bl from-blue-50 to-lime-50 p-8 rounded-xl border shadow-lg">
      <div className="flex justify-center items-center gap-8">
        <Image
          src={"/profile-1.jpeg"}
          alt={""}
          width={300}
          height={200}
          className=" rounded-3xl"
        />
        <div className="content font-poppins  text-xl">
          <h1 className=" font-semibold text-4xl py-4">
            Hi, I'm Manoj Lasantha
          </h1>
          <p className="  text-pretty font-light text-lg pb-4">
            I expanded my skills into programming languages like HTML,CSS,
            JavaScript,Java,Python,C++, and C#. To deepen my understanding and I
            follow information technolgy dgree course from univercity of jaffna.{" "}
            <br />
            <br />
            I further developed my expertise through certifications and courses
            from industry leaders like IBM, and Google, alongside resources like
            FreeCodeCamp. I have extensively studied JavaScript and React
            documentation. And i love to read documentations. <br />
            Currently, I'm passionate about GoLang and fascinated by the
            advancements in artificial intelligence and its potential for
            positive impact. I have a strong desire and aptitude for continuous
            learning.
          </p>
          <button className=" border text-lg font-poppins transition-all duration-300 hover:scale-110 hover:bg-blue-400 hover:text-black  border-blue-500 px-5 text-blue-500 py-1  rounded-lg ">See Work</button>
        </div>
        
      </div>
     
    </main>
  );
}

export default aboutMe;
