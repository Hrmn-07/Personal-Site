import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutMe() {
  return (
    <section className="pt-16 pb-28 bg-muted bg-[radial-gradient(#2f7df4_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold mb-8 pl-40">About Me...</h2>
        <div className="space-y-8 px-20">
          <div className="p-2 bg-white rounded-3xl bg-opacity-70 mb-5">
            <p
              className="text-xl md:text-xl mb-6 font-medium text-center"
              style={{ wordSpacing: "10px" }}
            >
              Hi, I’m{" "}
              <span className="text-blue-600 text-2xl font-bold">Herman</span>.
              I’m a web developer born and raised in Batam, Indonesia. With a
              passion for crafting sleek, responsive, and user-friendly web
              applications. I specialize in using Next.js and modern framework
              like Tailwind to bring ideas to life.
            </p>
            <p
              className="text-xl md:text-xl mb-6 font-medium text-center"
              style={{ wordSpacing: "10px" }}
            >
              My journey into web development started with a curiosity to
              understand how websites work, and it quickly grew into a
              full-fledged passion for building beautiful digital experiences.
              Currently enrolling in{" "}
              <span className="text-green-600 text-2xl font-bold">
                Purwadhika Digital School
              </span>
              , I aim to write clean, efficient code and deliver solutions that
              leave a lasting impact.
            </p>
            <p
              className="text-xl md:text-xl mb-6 font-medium text-center"
              style={{ wordSpacing: "10px" }}
            >
              When I’m not coding, you’ll probably find me exploring new
              technologies, learning new skills, or enjoying a good cup of
              coffee. Let’s connect and create something{" "}
              <span className="text-pink-600 text-2xl font-bold">Amazing</span>{" "}
              together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
