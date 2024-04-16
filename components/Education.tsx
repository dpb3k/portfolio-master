import { educationList } from "@/constants";
import React from "react";
import { EducationCard } from "./EducationCard";
import Section from "./higherOrderComponent/Section";

export const Education = () => {
  return (
    <Section>
      <section className="sectionMargin">
        <div>
          <p className="sectionSubText dark:text-pink-200 light-mode-text-color">Background</p>
          <h2 className="sectionHeadText dark:text-rose-400 light-mode-text-color">Education.</h2>
        </div>
        <div className="flex flex-col mt-10">
          {educationList.map((education, index) => (
            <EducationCard key={index} education={education} />
          ))}
        </div>
      </section>
    </Section>
  );
};
