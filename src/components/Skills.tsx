"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Atom as ReactIcon,
  CodepenIcon as NextJs,
  FileTypeIcon as FileTypeTypescript,
  Paintbrush2,
  Hexagon as NodeJs,
  Server,
  Database,
  FileJsonIcon as FileTypeJson,
} from "lucide-react";

const frontendSkills = [
  { name: "React", icon: ReactIcon },
  { name: "Next.js", icon: NextJs },
  {
    name: "TypeScript",
    icon: FileTypeTypescript,
  },
  { name: "Tailwind CSS", icon: Paintbrush2 },
];

const backendSkills = [
  { name: "Node.js", icon: NodeJs },
  { name: "Express", icon: Server },
  { name: "MongoDB", icon: Database },
  { name: "PostgreSQL", icon: FileTypeJson },
];

export default function Skills() {
  return (
    <section className="py-16 bg-muted bg-[radial-gradient(#2f7df4_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center mb-8">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <SkillCard title="Frontend" skills={frontendSkills} />
          <SkillCard title="Backend" skills={backendSkills} />
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  title,
  skills,
}: {
  title: string;
  skills: { name: string; icon: React.ElementType }[];
}) {
  return (
    <div className="px-16">
      <Card className="hover:scale-105 transition-all shadow-current">
        <CardHeader>
          <CardTitle className="text-2xl font-extrabold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="flex items-center space-x-2">
                <skill.icon className="h-6 w-6 text-blue-600" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
