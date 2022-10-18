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

const NotFoundPage = () => {
  return (
    <Layout pageTitle="404 - Not Found">
      <H1>&#129488; Error 404!</H1>
      <HeaderHRRight />
      <IntroSection>
        <Paragraph>Hmm... this is weird! Let's start over from <a href='/home' title='the home page' ariaLabel=''>the home page</a></Paragraph>
      </IntroSection>
    </Layout>
  )
}

export default NotFoundPage
