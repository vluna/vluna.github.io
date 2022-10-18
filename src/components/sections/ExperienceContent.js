import React from 'react';
import { SimpleTitleBlock, SimpleTextBlock } from '../content/SimpleContentBlock';
import styled from 'styled-components';


const Section = styled.section`
`

const ExperienceContent = () => {
  return (
    <Section id="experience">
      <SimpleTitleBlock content="[ Skills & Experience ]" />
      <SimpleTextBlock content="Throughout my career I have maintained the importance of having a strong foundation in the basics, before delving into various programming languages & frameworks." />
      <SimpleTextBlock content=" Once I developed a solid understanding of Object Oriented Programming, Model View Controller, workflows, coding styles and learning the best practices of each, I was able to pick up frameworks and programming languages without issue. I have been coding now for 7 years, & as I continue to discover new techniques and build on others, I am committed to being a lifelong learner in programming." />
    </Section>
  )
}

export default ExperienceContent
