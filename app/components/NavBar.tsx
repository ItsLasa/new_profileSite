import Link from "next/link";
import React from "react";
import { useScroll } from "framer-motion";
import Image from "next/image";
import mark from "@/public/mark.gif";

function NavBar() {
  return (
    <div className="flex justify-end  px-6">
      <div className="bg-[#eff6fc3f] border shadow-gray-300 text-gray-800 shadow-md gap-2 transition-all duration-300 py-2 mt-4 fixed font-manrope rounded-xl  w-auto px-4  flex text-xs md:text-sm lg:text-base   justify-center items-center">
        <Link href={"/"} className="hover:text-black rounded-md hover:bg-slate-100 px-4 ">
          Home
        </Link>
        <Link href={"/projects"} className="hover:text-black rounded-md hover:bg-slate-100 px-4 ">
          Projects
        </Link>
        <Link href={"/about"} className="hover:text-black rounded-md hover:bg-slate-100 px-4">
          About Me
        </Link>
        <Link
          href={""}
          className=" bg-white border px-4 transition-all duration-300 rounded-lg hover:text-black  hover:scale-105"
        >
          <span className=" transition-all duration-300 animate-ping">🟢</span>{" "}
          Hire Me
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
