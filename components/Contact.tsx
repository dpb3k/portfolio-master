import React from "react";
import Image from "next/image";
import Link from "next/link";

import contact from "../public/contact.png"
import Section from "./higherOrderComponent/Section";
export const Contact = () => {
  return (
    <Section>
      <section className="sectionMargin text-white" id="contact">
        <p className="sectionSubText dark:text-pink-200 light-mode-text-color">Want to connect?</p>
        <h2 className="sectionHeadText dark:text-rose-400 light-mode-text-color">Contact.</h2>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-lg lg:text-lg text-gray-600 dark:text-gray-400">
            Shoot me an email (bandavong1@gmail.com) if you want to connect! <br className=""/>
            You can also find me on{" "}
            <span className="dark:text-rose-400 light-mode-text-color hover:underline">
              <Link href="https://www.linkedin.com/in/dennis-bandavong-b3981325b/" target="_blank">
                Linkedin
              </Link>{" "}
              
            </span>
            if that&apos;s more your speed.
          </p>
          <Image src={contact} alt="contact" width={350} height={300}/>
        </div>
      </section>      
    </Section>
  );
};
