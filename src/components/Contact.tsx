"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Mail } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("loading");

    // bukan real API call, hanya simulasi
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitMessage("Thanks for your message! I'll get back to you soon");
  };
  return (
    <section id="contact" className="pt-10 pb-11 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center mb-8">Contact Me</h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-4 " onSubmit={handleSubmit}>
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <Textarea placeholder="Your Message" required />
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors disabled:bg-blue-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
            {submitMessage && (
              <p className="mt-4 text-blue-500 pl-8" role="status">
                {submitMessage}
              </p>
            )}
          </form>
          <div className="flex justify-center mt-11">
            <Button
              variant="outline"
              size="lg"
              className="hover:scale-105 shadow-xl bg-black text-white hover:bg-blue-500 hover:text-white"
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/u/0/#inbox?compose=new"
                )
              }
            >
              <Mail className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:scale-105 shadow-xl bg-black text-white hover:bg-blue-500 hover:text-white"
              onClick={() => window.open("https://github.com/Hrmn-07")}
            >
              <Github className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
