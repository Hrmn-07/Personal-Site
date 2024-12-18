"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    title: "Backend Developer",
    company: "Tech Corp",
    timeline: "Jan 2022 - Present",
    responsibilities: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    ],
  },
  {
    title: "Junior Developer",
    company: "Startup Inc",
    timeline: "Jun 2021 - Dec 2022",
    responsibilities: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-16 bg-muted bg-[radial-gradient(#2f7df4_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center mb-8">Experience</h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  experience,
}: {
  experience: (typeof experiences)[0];
}) {
  return (
    <div className="px-20">
      <Card className="hover:scale-105 transition-all shadow-current">
        <CardHeader>
          <CardTitle className="text-xl">{experience.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-semibold">{experience.company}</p>
          <p className="text-sm text-muted-foreground mb-4">
            {experience.timeline}
          </p>
          <ul className="list-disc pl-5">
            {experience.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
