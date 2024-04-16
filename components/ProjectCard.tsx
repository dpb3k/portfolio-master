"use client"
import Image from 'next/image'
import React from 'react'
import { project } from '../assets'
import Section from './higherOrderComponent/Section'
export const ProjectCard = ({
    name,
    description,
    tags,
    porject_link,
    image,
  }:any) => {
  return (
    <Section>
    <div
        className="nav-light-color dark:bg-slate-800 bg-opacity-60 backdrop-filter backdrop-blur-lg border-slate-500  p-5 rounded-2xl w-full"
      >
        <div className="relative w-full mb-10">
          <Image
            src={image}
            alt="project_image"
            className="w-full h-full object-contain rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(porject_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                src={project}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-gray-600 dark:text-white font-bold text-[26px]">{name}</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-200 text-[16px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag:any) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[16px] text-rose-800 dark:text-rose-400`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
      </Section>
  )
}
