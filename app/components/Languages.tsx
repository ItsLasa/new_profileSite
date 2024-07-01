import { BorderBeam } from "./magicui/border-beam";
import IconCloud from "./magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export default function IconCloudDemo() {
  return (
    <div className="relative mt-4 bg-gradient-to-br from-zinc-50 to-gray-50 flex h-auto shadow-lg  w-full max-w-[28rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-16 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );
}
