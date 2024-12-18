"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
  {
    name: "Clarissa",
    testimony:
      "Kerja bareng Herman bener-bener bikin puas! Web yang dia bikin gak cuma kelihatan keren, tapi juga cepat dan responsif di semua perangkat. Pokoknya recommended banget buat yang butuh developer handal!",
    image: "/testimonial-1.jpg",
  },
  {
    name: "Eduardo",
    testimony:
      "Hasilnya melebihi ekspektasi! Profil perusahaan jadi jauh lebih profesional dan elegan berkat sentuhan desain dari Herman. Komunikasinya juga lancar dan super responsif. Gak nyesel deh kolaborasi sama dia!",
    image: "/testimonial-2.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-[radial-gradient(#2f7df4_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center mb-8">
          Testimonials
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="px-6">
      <Card className="hover:scale-105 transition-all shadow-current">
        <CardHeader className="flex flex-row items-center gap-4">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={50}
            height={50}
            className="rounded-full"
          />
          <CardTitle>{testimonial.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{testimonial.testimony}</p>
        </CardContent>
      </Card>
    </div>
  );
}
