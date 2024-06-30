// components/ProjectCard.tsx
import Image from "next/image";
import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4">
      <Image src={project.image} alt={project.title} width={300} height={200} className="rounded-t-lg" />
      <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
    </div>
  );
};

export default ProjectCard;
