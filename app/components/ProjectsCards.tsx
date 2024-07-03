// components/ProjectCard.tsx
import Image from "next/image";
import { Project } from "../data/projects";
import { FaGithub, FaLink } from "react-icons/fa";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="border rounded-lg shadow-lg p-8 hover:border-2 hover:border-violet-400 transition-all duration-300">
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={200}
        className="rounded-t-lg shadow-lg transition-all duration-300 hover:scale-105 hover:rounded-b-lg cursor-pointer "
      />

      <div className=" border-gray-300 pt-4 border-b-[1px] "></div>

      <div className="flex justify-between items-center px-2">
        <h3 className=" text-lg mt-4 mb-4">{project.title}</h3>
        <div className="flex gap-4 items-center">
        <a href={project.link}>
          <FaGithub className="hover:scale-125  transition-all duration-300" />
        </a>
        <a href={project.link}>
          <FaLink className="hover:scale-125  transition-all duration-300" />
        </a>
        </div>
      </div>
      
      <div className="flex text-sm text-zinc-500 font-manrope justify-start items-center px-2">{project.details}</div>
    </div>
  );
};

export default ProjectCard;
