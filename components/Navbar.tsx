"use client";

import React from "react";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import 'styles/custom.css'; 

export const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`w-full flex items-center py-5 sticky top-2 z-20 nav-light-color dark:bg-slate-800 bg-opacity-50 backdrop-filter backdrop-blur-lg px-6 md:px-8 md:py-4 rounded-[20px]`}
    >
      <div className="w-full flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="dark:text-white light-mode-text-color font-poppins text-[18px] font-bold cursor-pointer flex underline pr-4">
            Portfolio
           </p>
        </Link>

        <div className="flex items-center space-x-3">
          <ModeToggle/>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-rose-800 dark:text-white font-semibold" : "text-rose-500 dark:text-rose-300"
                } text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
                <div
                  className={`${active === nav.title && "h-[2px] bg-rose-400"}`}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="w-[18px] h-[18px] object-contain light-mode-text-color dark:text-white"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } w-full -mr-0 p-6 nav-light-color dark:bg-slate-900 bg-opacity-90 backdrop-filter backdrop-blur-lg absolute top-20 right-0 mx-4 my-2  z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins fonnt-bold cursor-pointer text-[18px] ${
                    active === nav.title ? "text-rose-800 dark:text-white font-semibold" : "text-rose-500 dark:text-rose-300"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
