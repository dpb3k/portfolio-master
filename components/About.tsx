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
          My passion is to bring my unique talents to my field of data science. I want to be a part of a team that is making a difference to the everyday average joe. I have always found a comfort in analytics and mathematics, it is a built in talent. I actually enjoy budgeting for fun. Making my natural skills into my career is an exciting path to do what I love.
        </p>
      </section> 
    </Section>
  )
}
