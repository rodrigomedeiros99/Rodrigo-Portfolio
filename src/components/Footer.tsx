import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" py-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-300 mb-4 md:mb-0">
            © {new Date().getFullYear()} Rodrigo Medeiros. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-emerald-600 transition-colors"
            >
              <Github size={26} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-emerald-600 transition-colors"
            >
              <Linkedin size={26} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
