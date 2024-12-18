"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Company Profile",
    description:
      "A sleek, professional company profile webpage showcasing the brand’s vision, services, and team. Developed with Next.js for fast performance and scalability, paired with elegant Shadcn UI components to ensure a polished look. Key Features: Responsive design, service highlights, team showcase, and contact integration for streamlined client engagement.",
    image: "/company-profile.png",
    technologies: ["Next.js", "TypeScript", "Shadcn UI"],
    link: "https://company-profile-ashy.vercel.app/",
    github: "https://github.com/Hrmn-07/company-profile",
  },
  {
    title: "Travel Blog",
    description:
      "A modern, responsive travel blog designed to share stories and experiences from around the globe. Built with Next.js and styled with Shadcn UI, the platform features dynamic content, clean layouts, and a focus on readability. Key Features: Interactive blog pages, image galleries, and optimized performance for a seamless user experience across devices.",
    image: "/travel-blog.png",
    technologies: ["React", "Next.js", "Typescript"],
    link: "https://travel-blog-herman.netlify.app/",
    github: "https://github.com/Hrmn-07/travel-blog",
  },
];

export default function Portfolio() {
  return (
    <section className="py-16 bg-[radial-gradient(#2f7df4_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center mb-8">
          Portfolio Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="px-6">
      <Card className="hover:scale-105 transition-all shadow-current">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            {project.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={200}
            className="mb-4 rounded-md place-self-center border-2 border-slate-400"
          />
          <p className="mb-4 text-justify text-slate-600">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 justify-end">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-black text-white"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Link
            href={project.link}
            target="_blank"
            className="text-black hover:text-blue-400 hover:scale-110 transition-all"
          >
            ✧ Preview
          </Link>
          <Link
            href={project.github}
            target="_blank"
            className="text-black hover:text-blue-400 hover:scale-110 transition-all pl-5"
          >
            {"</>"} Code
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
