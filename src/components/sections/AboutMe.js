import React from 'react';
import { SimpleTitleBlock, SimpleTextBlock } from '../content/SimpleContentBlock';
import styled from 'styled-components';


const Section = styled.section``

const ExperienceContent = () => {
  return (
    <Section id="about-me">
      <SimpleTitleBlock content="[ About Victor ]" />
      <SimpleTextBlock content="My name is Victor Luna and I am a full stack developer currently based in Toronto, ON. I have a B.Sc. in Interactive Arts & Technology (SIAT), a pogram that combines technology, art and design to create and innovate in a collaborative team setting." />
      <SimpleTextBlock content="For the past several years I have been working in building reliable, scalable and interesting web applications. Some of the applications I have built include intranets, content management systems, costumer relationship management systems, motor management systems, among others. These application were coded using current web technologies such as PHP, Ruby on Rails, Javascript, CSS, HTML, MySQL and APIs. I have a passion for technology and what I do with it. I try to solve today’s complex problems and bridge the gap between technology and what it can do for people." />
    </Section>
  )
}

export default ExperienceContent
