import React from "react";
import { Code2, Database, Cpu, Globe } from "lucide-react";
import Image from "next/image";

const About = () => {
  const skills = [
    {
      icon: <Code2 className="text-green-400" size={24} />,
      title: "Frontend Development",
      description:
        "Creating responsive and interactive user interfaces with modern frameworks and tools.",
    },
    {
      icon: <Database className="text-green-400" size={24} />,
      title: "Backend Development",
      description:
        "Building robust and scalable server-side applications and APIs.",
    },
    {
      icon: <Cpu className="text-green-400" size={24} />,
      title: "DevOps",
      description:
        "Implementing CI/CD pipelines and managing cloud infrastructure.",
    },
    {
      icon: <Globe className="text-green-400" size={24} />,
      title: "Web Performance",
      description: "Optimizing applications for speed, accessibility, and SEO.",
    },
  ];

  return (
    <section id="about" className="py-10 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,220,130,0.05),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary gradient-text bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            With over 5 years of experience in full-stack development, I&apos;ve
            successfully delivered 25+ projects, combining technical expertise
            with a passion for creating exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div data-aos="fade-right" className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10">
              <Image
                src="/dev-setup.avif"
                alt="Rodrigo working"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div data-aos="fade-left" className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-primary gradient-text bg-clip-text text-transparent">
              My Journey
            </h3>
            <p className="text-gray-400 mb-6">
              I specialize in building modern web applications using
              cutting-edge technologies. My experience spans from frontend
              development with React and Next.js to backend systems with Node.js
              and PostgreSQL.
            </p>
            <p className="text-gray-400">
              I&apos;m passionate about creating clean, efficient code and
              staying up-to-date with the latest industry trends and best
              practices.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:border-primary/30 transition-all"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {skill.title}
              </h3>
              <p className="text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
