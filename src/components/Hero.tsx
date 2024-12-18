"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[radial-gradient(#2f7df4_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="container mx-auto px-7 py-16 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 ml-7"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 hover:scale-105 transition-all">
            Hi! I'm,
          </h1>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 hover:scale-105 transition-all">
            Hermanus Rumapea
          </h1>
          <div className="p-2 bg-white rounded-xl bg-opacity-70 mb-5 hover:scale-105 transition-all">
            <p
              className="text-xl md:text-2xl mb-6 font-medium text-justify"
              style={{ wordSpacing: "5px" }}
            >
              <span className="text-blue-600 text-2xl font-bold">
                Passionate
              </span>{" "}
              web developer specializing in high-performance, scalable
              applications and modern user interfaces. I craft{" "}
              <span className="text-green-600 text-2xl font-bold">Digital</span>{" "}
              experiences that are not only visually stunning but also intuitive
              and user-friendly. Let's convert your Idea into something{" "}
              <span className="text-pink-600 text-2xl font-bold">Amazing</span>
            </p>
          </div>
          <Link to="contact" smooth={true} duration={800}>
            <Button
              size="lg"
              id="contact"
              title="Contact Me"
              className="hover:scale-105 transition-all w-4/12 text-xl hover:bg-blue-400"
            >
              Contact Me
            </Button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex pl-40"
        >
          <Image
            src="/hero-img.jpg"
            alt="Profile"
            width={350}
            height={350}
            className="rounded-full object-cover hover:scale-105 transition-all"
          />
        </motion.div>
      </div>
    </section>
  );
}
