import React from 'react'
import { technologies } from "../constants"
import { TechCard } from './TechCard'

export const Tech = () => {
  return (
    <section className='sectionMargin'>
        <div>
          <p className="sectionSubText dark:text-pink-200 light-mode-text-color">What I have implemented so far</p>
          <h2 className="sectionHeadText dark:text-rose-400 light-mode-text-color">My Skills.</h2>
        </div>

        <p
          className="sectionContent"
        >
          These are the skills that I developed so far. I have used diferent
          combinations of these technologies in my projects. Some of in the
          real-world projects and some in my personal projects. 
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          {technologies.map((technology) => (
            <TechCard key={technology.name} {...technology} />
          ))}
        </div>
      </section>
  )
}
