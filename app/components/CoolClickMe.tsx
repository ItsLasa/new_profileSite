import { CoolMode } from "@/app/components/magicui/cool-mode";
import React from "react";

export default function CoolModeDemo() {
  return (
    <div className="relative justify-center">
      <CoolMode>
        <button className="bg-black animate-bounce animate-infinite animate-ease-in-out animate-delay-100 rounded-lg transition-all duration-300 text-white text-xs px-4 py-2 md:text-sm lg:px-4 lg:py-2 hover:scale-105">
          Click me👻
        </button>
      </CoolMode>
    </div>
  );
}
