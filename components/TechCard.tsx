"use client"
import Image from 'next/image'
import React from 'react'
import { Tilt } from 'react-tilt'
import Section from './higherOrderComponent/Section'
export const TechCard = ({name, icon}:any) => {
  return (
   <Section>
     <Tilt className="">
        <div
          className="w-full p-[1px] rounded-[20px] shadow-card"
          >
          <div
            className="nav-light-color dark:bg-slate-800 bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-lg py-4 px-6 flex justify-evenly items-center flex-row gap-2"
            >
            <Image
              src={icon}
              alt="web-development"
              className="w-8 h-8 object-contain"
              />

            <h3 className="text-gray-600 dark:text-slate-200 text-md font-bold text-center">{name}</h3>
          </div>
        </div>
      </Tilt>
   </Section>
  )
}
