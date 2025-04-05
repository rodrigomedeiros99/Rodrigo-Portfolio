import React from "react";
import { ExternalLink, Github, Star } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Gym Web App",
    description:
      "A modern gym booking platform with real-time appointment scheduling and automated email notifications.",
    image: "/gym-photo.png",
    technologies: ["React", "Next.js", "Tailwindcss", "Supabase"],
    stats: {
      stars: 128,
      downloads: "2.3k",
      rating: 4.8,
    },
    liveUrl: "https://express-gym-azure.vercel.app/",
    githubUrl: "https://github.com",
  },
  {
    title: "Barbershop Web App",
    description:
      "A modern barbershop platform with online appointment scheduling, stylist selection and a seamless user experience.",
    image: "/barbershop-photo.png",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    stats: {
      stars: 245,
      downloads: "5.1k",
      rating: 4.9,
    },
    liveUrl: "https://modern-cuts-ki2l.vercel.app/",
    githubUrl: "https://github.com",
  },
  {
    title: "Pizza Web app",
    description:
      "A modern pizza ordering platform with real-time order tracking, dynamic menu customization, and responsive design for seamless user experience.",
    image: "/hot-pizza.png",
    technologies: ["React", "Next.js", "Tailwindcss", "Supabase"],
    stats: {
      stars: 189,
      downloads: "3.7k",
      rating: 4.7,
    },
    liveUrl: "https://hot-pizza.vercel.app/",
    githubUrl: "https://github.com",
  },
  {
    title: "Space-X Web App",
    description:
      "A real-time SpaceX mission tracking platform with detailed launch updates, mission schedules, and space exploration news.",
    image: "/space-x-photo.png",
    technologies: ["React", "GraphQL", "Node.js", "Redis"],
    stats: {
      stars: 312,
      downloads: "6.2k",
      rating: 4.9,
    },
    liveUrl: "https://space-x-three-theta.vercel.app/index.html",
    githubUrl: "https://github.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(54,228,218,0.05),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my expertise in
            full-stack development and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="glass-effect rounded-xl overflow-hidden group hover:border-primary/30 transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-200 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold  mb-1 text-white">
                    {project.title}
                  </h3>
                  <div className="flex  items-center space-x-4 text-sm text-gray-300">
                    <span className="flex items-center">
                      <Star size={16} className="text-yellow-500 mr-1" />
                      {project.stats.rating}
                    </span>
                    <span>⬇️ {project.stats.downloads}</span>
                    <span>⭐ {project.stats.stars}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white hover:text-primary transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
