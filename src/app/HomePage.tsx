"use client";
import Hero from "@/components/Hero";
import Header from "./Header";
import About from "@/components/About";
import Skills from "@/components/skills/Skills";
import Experiences from "@/components/experiences/Experiences";
import Projects from "@/components/projects/Projects";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experiences />
    </>
  );
};

export default HomePage;
