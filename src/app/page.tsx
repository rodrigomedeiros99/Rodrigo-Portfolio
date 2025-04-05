"use client";

import { useEffect } from "react";
import AOS from "aos";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";

import Footer from "@/components/Footer";
import Contact from "@/components/contact";
import ScrollToTop from "@/components/Scroll-To-Top";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 400,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <main className="min-h-screen bg-dark-200 bg-grid-pattern bg-grid bg-fixed">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
