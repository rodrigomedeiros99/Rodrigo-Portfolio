import React from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const TechStack = () => {
  const technologies1 = [
    {
      name: "Next.js",
      logo: "/icons/nextjs-icon.svg",
    },
    {
      name: "React",
      logo: "/icons/react-icon.svg",
    },
    {
      name: "Docker",
      logo: "/icons/docker-icon.svg",
    },
    {
      name: "PostgreSQL",
      logo: "/icons/postgresql-icon.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "/icons/tailwindcss-icon.svg",
    },
    {
      name: "Node.js",
      logo: "/icons/nodejs-icon.svg",
    },
  ];

  const technologies2 = [
    {
      name: "TypeScript",
      logo: "/icons/typescript-icon.svg",
    },
    {
      name: "JavaScript",
      logo: "/icons/javascript-icon.svg",
    },
    {
      name: "Express",
      logo: "/icons/express-icon.svg",
    },
    {
      name: "Mongodb",
      logo: "/icons/mongodb-icon.svg",
    },
    {
      name: "Prisma",
      logo: "/icons/prisma-icon.svg",
    },
    {
      name: "Supabase",
      logo: "/icons/supabase-icon.svg",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="overflow-hidden whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <div className="flex space-x-8 animate-scroll">
          {[...technologies1, ...technologies1].map((tech, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center h-12 px-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-full"
            >
              <div className="flex items-center justify-center gap-3">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={24}
                  height={24}
                  className=""
                />
                <span className="text-gray-300 font-medium">{tech.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <div className="flex space-x-8 animate-scroll-reverse">
          {[...technologies2, ...technologies2].map((tech, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center h-12 px-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-full"
            >
              <div className="flex items-center justify-center gap-3">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={24}
                  height={24}
                  className=""
                />
                <span className="text-gray-300 font-medium">{tech.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,220,130,0.1),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(54,228,218,0.1),transparent_60%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:mt-28 sm:px-6 lg:px-8 h-full flex flex-col">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-12 flex-1">
          <div data-aos="fade-right" className="w-full md:w-1/2 text-left">
            <h1 className="flex justify-center sm:block text-4xl md:text-5xl font-bold mb-4">
              Hi, Welcome.
            </h1>
            <h1 className="flex justify-center  text-4xl md:text-[56px] font-bold mb-4">
              I&apos;m
              <span className="flex justify-center  ml-1 bg-gradient-primary bg-clip-text text-transparent  gradient-text">
                Rodrigo Medeiros
              </span>
            </h1>
            <h2 className="flex justify-center   text-xl sm:text-2xl md:text-3xl text-gray-400 mb-2 sm:mb-8">
              Full-Stack Developer & Tech Enthusiast
            </h2>
            <p className="flex justify-center  text-sm sm:text-lg text-gray-300 mb-8 max-w-xl">
              Building cutting-edge digital solutions with over 5 years of
              expertise in full-stack development and cloud architecture.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex justify-center mx-auto sm:mx-0 px-8 py-3 cursor-pointer rounded-full bg-[#00FF94] text-black font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all transform  duration-300 hover:text-gray-800  ease-in-out hover:scale-110"
            >
              Let&apos;s Build Something Amazing
            </button>
          </div>

          <div
            data-aos="fade-left"
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-primary/20 rounded-full blur-3xl"></div>
              <Image
                src="/prof-pic-rodd.png"
                alt="Rodrigo"
                width={384}
                height={384}
                className="w-full h-full object-cover rounded-full border-2  border-green-400 bg-gradient-to-t from-stone-950 via-stone-900 to-stone-950 "
                priority
              />
            </div>
          </div>
        </div>

        <div className="py-12 sm:mt-14">
          <TechStack />
        </div>

        <div className="flex justify-center pb-8 sm:pt-8 animate-bounce">
          <ChevronDown
            size={45}
            className="text-primary cursor-pointer"
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
