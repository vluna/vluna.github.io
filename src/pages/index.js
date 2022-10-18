import * as React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import ExperienceContent from '../components/sections/ExperienceContent'
import SkillsContent from '../components/sections/SkillsContent'
import WorkHistory from '../components/sections/WorkHistory'
import EducationHistory from '../components/sections/EducationHistory'
import AboutMe from '../components/sections/AboutMe'

const IntroSection = styled.section`
  margin: 2em 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flew-grow: 1;
`

const H1 = styled.h1`
  width: 95%;
  margin: auto;
  font-size: 4rem;
  line-height: 0.95em;
  text-transform: uppercase;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 6.5em;
    margin: 0;
    padding: 0.5em 0 0.2em;
  }
`

const H2 = styled.h2`
  font-size: 3rem;
  line-height: 0.95em;
  margin: 0;
  flex: 1 1 0%;
  margin-left: 0.5rem;
`

const Paragraph = styled.p`
  font-size: ${(props) => props.theme.fontSizes.lg};
  margin: 0;
  flex: 1 1 0%;
  line-height: 1.25em;
  text-transform: none;
  margin-right: 0.5rem;
`

const HeaderHr = styled.hr`
  height: .65em;
  background-color: ${(props) => props.theme.colors.text};
  margin: .65em 0 0;
  border: none;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 42em;
    margin: .5em 0;
  }
`

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <H1>Victor Luna Full Stack Developer</H1>
      <HeaderHr />
      <Paragraph>&#128075; I am a full stack developer with a passion for education, web accessibility, sustainable development and security.</Paragraph>
      <ExperienceContent />
      <SkillsContent />
      <WorkHistory />
      <AboutMe />
      <EducationHistory />
    </Layout>
  )
}

export default IndexPage
