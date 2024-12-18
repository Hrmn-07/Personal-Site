"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { Separator } from "@/components/ui/separator";
import AboutMe from "@/components/About";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground"
    >
      <Hero />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Experience />
      <Testimonials />
      <Separator />
      <Contact />
    </motion.main>
  );
}
