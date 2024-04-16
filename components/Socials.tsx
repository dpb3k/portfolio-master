"use client";
import React from "react";
import { socials } from "../constants";
import Image from "next/image";

export const Socials = () => {
  return (
    <div className="flex flex-wrap gap-2 md:justify-normal justify-center pt-4">
      {socials.map(({ icon, link }, i) => (
        <div
          key={i}
          onClick={() => window.open(link, "_blank")}
          className="p-1  rounded-full bg-rose-800 hover:cursor-pointer"
        >
          <Image
            src={icon}
            alt="web-development"
            className="w-14 h-14 object-contain"
          />
        </div>
      ))}
    </div>
  );
};
