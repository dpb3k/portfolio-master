"use client";

import React from "react";
import { styles } from "../styles";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import 'styles/custom.css'; 
import { Socials } from "./Socials";
import Section from "./higherOrderComponent/Section";

export const Hero = () => {
  return (
    <Section>
      <section
        className={`relative h-full top-32 mb-32 grid grid-cols-1 md:grid-cols-2`}
      >
        <div
          className={`paddingX flex flex-row items-center justify-center gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-rose-300" />
            <div className="w-1 sm:h-80 h-40 pink-gradient" />
          </div>

          <div className="flex flex-col gap-3 lg:gap-4 justify-start items-start">
            <h1 className="text-black dark:text-white text-xl md:text-3xl font-extrabold">
                Hi, I&apos;m
                <br />
                <span className="light-mode-text-color dark:text-rose-300">
                  Dennis Bandavong
                </span>
            </h1>
            <p className="text-md text-gray-500 dark:text-rose-100 md:text-xl mt-4">
                skilled developer in transforming complex <br className="sm:block hidden" />
                data into actionable insights. <br className="sm:block hidden"/>
                <span>
                <Typewriter
                  words={['Welcome to my portfolio!']}
                  loop={1}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
            <a href="#contact" className="px-4 py-2 font-semibold rounded-lg bg-rose-800 text-white hover:cursor-pointer">Contact me</a>
            <a href="#notion" className="px-4 py-2 font-semibold rounded-lg bg-rose-800 text-white hover:cursor-pointer">Data Visualizations</a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Image className="rounded-full drop-shadow-lg w-1/2 md:w-1/2" src="/profile.webp" alt="hero image" width={350} height={300} />
          <h1 className="text-xl md:text-xl mt-2 light-mode-text-color dark:text-red-300">Dennis Bandavong</h1>
          <div>
            <Socials />
          </div>
        </div>
      </section>      
    </Section>
  );
};
