import { Dock, DockIcon } from "@/app/components/magicui/dock";
import Image from "next/image";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn, FaMedium, FaStackOverflow } from "react-icons/fa6";
import { BorderBeam } from "./magicui/border-beam";
import Link from "next/link";

export type IconProps = React.HTMLAttributes<SVGElement>;

export default function DockDemo() {
  return (
    <div className="relative mt-0 bg-gradient-to-br from-zinc-50 to-gray-50 flex h-[180px] w-full max-w-[30rem] flex-col items-center justify-center overflow-hidden rounded-2xl border bg-background md:shadow-xl">
      <div className="flex justify-center items-center gap-4">
        <span className="pointer-events-none  whitespace-pre-wrap font-manrope lg:text-2xl dark:from-white dark:to-slate-900/10">
          My Socials Networks
        </span>
        <Image src={"/earth.gif"} alt={"earth"} width={40} height={40} />
      </div>

      <Dock>
        <DockIcon>
          <Link href="https://www.linkedin.com/in/manoj-illangasinghe/" passHref>
            <FaLinkedinIn className="h-6 w-6 text-blue-700" />
          </Link>
        </DockIcon>

        <DockIcon>
          <Link href="https://github.com/ItsLasa" passHref>
            <Icons.gitHub className="h-6 w-6" />
          </Link>
        </DockIcon>

        <DockIcon>
          <Link href="https://codepen.io/itslasa" passHref>
            <Icons.codepen className="h-6 w-6" />
          </Link>
        </DockIcon>

        <DockIcon>
          <Link href="https://twitter.com/ItxLasa" passHref>
            <FaTwitter className="h-6 w-6 text-blue-500" />
          </Link>
        </DockIcon>

        <DockIcon>
          <Link href="https://stackoverflow.com/users/20635236/manoj-illangasinghe" passHref>
            <FaStackOverflow className="h-6 w-6 text-orange-600" />
          </Link>
        </DockIcon>

        <DockIcon>
          <Link href="https://medium.com/@manojlasantha306" passHref>
            <FaMedium className="h-6 w-6" />
          </Link>
        </DockIcon>
      </Dock>
    </div>
  );
}

const Icons = {
  codepen: (props: IconProps) => (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        fill="currentColor"
        d="M502.285 159.603L277.718 4.708c-4.937-3.292-11.5-3.292-16.438 0L9.715 159.603c-4.647 3.104-7.47 8.281-7.47 13.827v164.14c0 5.545 2.823 10.723 7.47 13.827l225.567 154.894c2.469 1.693 5.319 2.54 8.168 2.54s5.699-.847 8.168-2.54l225.567-154.894c4.647-3.104 7.47-8.281 7.47-13.827v-164.14c0-5.545-2.823-10.723-7.47-13.827zM250.681 51.902L419.648 165.53 352.716 207.98 250.681 145.51V51.902zM261.319 51.902v93.608l-102.035 62.469-66.932-42.45L261.319 51.902zM32 186.631l52.375 33.204-52.375 33.204v-66.408zM239.466 460.098L70.5 346.471l66.932-42.451 102.035 62.469v93.609zM250.681 292.685l-84.398-51.641 84.398-51.641 84.398 51.641-84.398 51.641zM272.534 460.098v-93.609l102.035-62.469 66.932 42.451-168.967 113.627zM480 286.64l-52.375-33.204 52.375-33.204v66.408z"
      ></path>
    </svg>
  ),

  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  stackOverflow: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 291" {...props}>
      <path
        fill="#BCBBBB"
        d="M30.167 196.667H0v94.5h189v-94.5h-30.167v64.333h-128.666v-64.333z"
      />
      <path
        fill="#F48024"
        d="M55.017 195.983l118.333 23.333-5.833 29.167-118.333-23.333 5.833-29.167zm33.833-62.667l105.5 54.333-13.167 25.5-105.5-54.333 13.167-25.5zm67.667-73.167l84.333 76-20.167 22.5-84.333-76 20.167-22.5zm63.333-57.667l45.167 91.333-27 14-45.167-91.333 27-14zm-137.667 266v-30.167h128.667v30.167h-128.667z"
      />
      <path fill="#BCBBBB" d="M104.5 231.833h94.833v-30.167h-94.833z" />
    </svg>
  ),

  whatsapp: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 175.216 175.552"
      {...props}
    >
      <defs>
        <linearGradient
          id="b"
          x1="85.915"
          x2="86.535"
          y1="32.567"
          y2="137.092"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#57d163" />
          <stop offset="1" stopColor="#23b33a" />
        </linearGradient>
        <filter
          id="a"
          width="1.115"
          height="1.114"
          x="-.057"
          y="-.057"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="3.531" />
        </filter>
      </defs>
      <path
        fill="#b3b3b3"
        d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
        filter="url(#a)"
      />
      <path
        fill="#fff"
        d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
      />
      <path
        fill="url(#linearGradient1780)"
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
      />
      <path
        fill="url(#b)"
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
      />
    </svg>
  ),
};
