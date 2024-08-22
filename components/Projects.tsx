import React from "react";
import { projects } from "../constants";
import { ProjectCard } from "./ProjectCard";
import Section from "./higherOrderComponent/Section";

export const Projects = () => {
  return (
      <section className="sectionMargin">
        <div>
          <p className="sectionSubText dark:text-pink-200 light-mode-text-color">My work</p>
          <h2 className="sectionHeadText dark:text-rose-400 light-mode-text-color">Projects.</h2>
        </div>

        <div className="w-full flex">
          <p className="sectionContent">
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos in it. Feel free to explore. Click the
            arrows to take you to each project.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} {...project} />
          ))}
        </div>
      </section>      
  );
};
