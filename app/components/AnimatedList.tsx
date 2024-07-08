"use client";

import { cn } from "@/app/lib/utils";
import { AnimatedList } from "@/app/components/magicui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  
}

let notifications = [
  {
    name: "Payment received",
    description: "Magic UI",
   

    icon: "💖",
    color: "#00C9A7", 
  },
  {
    name: "User signed up",
    description: "Magic UI",
    
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "Magic UI",
   
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "Magic UI",
    
    icon: "🗞️",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 15 }, () => notifications).flat();

const Notification = ({ name, description, icon, color}: Item) => {
  return (
    
    <figure
      className={cn(
        "relative mx-auto font-manrope shadow-lg  min-h-fit w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        " [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
       
      )}
    >  
      <div className="flex flex-row items-center gap-3">
        
        <div
          className="flex h-10 w-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium  ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            {/* <span className="text-xs text-black">{time}</span> */}
          </figcaption>
          <p className="text-sm font-normal ">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export default function AnimatedListDemo() {
  return (
    <div className="relative flex max-h-[400px] min-h-[400px] w-full max-w-[32rem] flex-col overflow-hidden rounded-lg border bg-background p-6 shadow-lg">
      <div className="flex justify-center text-xl underline decoration-wavy underline-offset-4 font-manrope py-2 mb-2">
            <h1>Media I Follow</h1>
        </div>
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
