import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Tech } from "@/components/Tech";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";
import { Education } from "@/components/Education";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-14">
      <Navbar />
      <Hero />
      <div id="about" className="h-8" />
      <About />
      <div id="edu" className="h-8" />
      <Education />
      <div id="skills" className="h-8" />
      <Tech />
      <div id="projects" className="h-8" />
      <Projects />
      <div id="contact" className="h-8" />
      <Contact />
      <div className="mx-auto px-4 text-black dark:text-white text-sm flex items-center justify-center pb-10">
        <p>
          Copywrite &copy; 2024{" "}
          <span className="font-bold dark:text-rose-400 light-mode-text-color">Dennis Bandavong</span> All rights
          reserved
        </p>
      </div>
    </main>
  );
}
