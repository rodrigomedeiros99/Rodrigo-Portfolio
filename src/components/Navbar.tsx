import React, { useState, useEffect } from "react";
import { X, Github, Linkedin, Terminal } from "lucide-react";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["Home", "About", "Projects", "Contact"];

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-1 left-1/2 transform -translate-x-1/2 w-full  rounded-4xl max-w-[85rem] z-50 px-4 transition-all duration-300 ${
        hasScrolled ? "glass-effect" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto scroll-smooth px-4 sm:px-6 lg:px-1">
        <div className="flex items-center h-12">
          <a href="#home">
            <div className="flex-shrink-0 flex justify-center items-center">
              <Terminal size={48} className=" sm:flex sm:text-primary " />
              <h1 className="text-4xl font-bold gradient-text">Rodrigo</h1>
            </div>
          </a>

          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 cursor-pointer hover:text-[#00DC82] transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/rodrigomedeiros99"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#00DC82]"
            >
              <Github size={26} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#00DC82]"
            >
              <Linkedin size={26} />
            </a>
          </div>

          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-[#00DC82]"
            >
              {isOpen ? <X size={24} /> : <FaBarsStaggered size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          data-aos="fade-down"
          className="md:hidden rounded-xl  glass-effect"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full px-3 py-2 text-gray-100 hover:text-[#00DC82] transition-colors text-center"
              >
                {item}
              </button>
            ))}
            <div className="flex items-center justify-center space-x-4 px-3 py-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-[#00DC82]"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#00DC82]"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
