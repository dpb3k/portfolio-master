import React from 'react'
import Section from './higherOrderComponent/Section'

export const About = () => {
  return (
    <Section>
      <section className='sectionMargin'>
        <div>
          <p className="sectionSubText dark:text-pink-200 light-mode-text-color">About me</p>
          <h2 className="sectionHeadText dark:text-rose-400 light-mode-text-color">Overview.</h2>
        </div>

        <p
          className="sectionContent"
        >
          My passion is to bring my unique talents to the field of data science and software development. I want to be a part of a team that is making a difference to the community. I have always found projects in analytics and mathematics to be the most fun and comes natural. Making my natural skills into my career is an exciting path to do what I love.
        </p>
      </section> 
    </Section>
  )
}
