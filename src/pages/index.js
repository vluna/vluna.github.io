import * as React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'

const IntroSection = styled.section`
  margin: 4em 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flew-grow: 1;
`

const H1 = styled.h1`
  width: 95%;
  margin: auto;
  font-size: 7rem;
  line-height: 0.95em;

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

const HeaderHRRight = styled.hr`
  height: 1em;
  background-color: ${(props) => props.theme.colors.text};
  width: 95%;
  margin: auto;
  border: none;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 42em;
    margin: .5em 0;
  }
`

const HeaderHRLeft = styled(HeaderHRRight)`
  margin-left: 40%;
`


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <H1>Victor Luna Full Stack Developer</H1>
      <HeaderHRRight />
      <IntroSection>
        <Paragraph>&#128075; I am a full stack developer with a passion for education, web accessibility and sustainable development.</Paragraph>
        <H2>Looking to change the world, but I can't find the source code.</H2>
      </IntroSection>
      <HeaderHRLeft />
      <IntroSection>
        <H2>Looking to change the world, but I can't find the source code.</H2>
        <Paragraph>&#128075; Full stack developer with more than 5 years of experience. Dedicated self-starter with a background working in web development, user interface and user experience design. Domain expertise includes Ruby on Rails, Javascript, PHP, SQL, AngularJS, HTML, CSS, and Java. Passionate about using technology to solve today’s complex problems, and drive social change. Collaborative, detail-oriented, curious, and empathetic leader.</Paragraph>
      </IntroSection>
    </Layout>
  )
}

export default IndexPage
