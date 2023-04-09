import * as React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { SimpleTitleBlock, SimpleSubtitleBlock, SimpleTextBlock } from '../components/content/SimpleContentBlock';
import ExperienceContent from '../components/sections/ExperienceContent'
import SkillsContent from '../components/sections/SkillsContent'
import WorkHistory from '../components/sections/WorkHistory'
import EducationHistory from '../components/sections/EducationHistory'
import AboutMe from '../components/sections/AboutMe'


const TitleBlock = styled(SimpleTitleBlock)`
  margin: 0;
  padding: 0;
`
const SubtitleBlock = styled(SimpleSubtitleBlock)`
  margin: 0;
  padding: 0!important;
`

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <TitleBlock content="Victor Luna" />
      <SubtitleBlock content="Full Stack Developer" />
      <SimpleTextBlock content="I am a full stack developer with a passion for education, web accessibility, sustainable development and security." />
      <ExperienceContent />
      <SkillsContent />
      <WorkHistory />
      <AboutMe />
      <EducationHistory />
    </Layout>
  )
}

export default IndexPage
