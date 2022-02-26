import * as React from 'react'
import styled from 'styled-components';
import Layout from '../components/Layout'

const Container = styled.section`
  display: flex;
  flex-direction: row;
`

const AboutPage = () => {
  return (
    <Layout pageTitle="About Victor">
      <Container>
        <h1>about <br/>victor luna</h1>
        <p>Throughout my career I have maintained the importance of having a strong foundation in the basics, before delving into various programming languages &amp; frameworks.<br/>
        Once I developed a solid understanding of Object Oriented Programming, Model View Controller, workflows, coding styles and learning the best practices of each, I was able to pick up frameworks and programming languages without issue. I have been coding now for 7 years, &amp; as I continue to discover new techniques and build on others, I am committed to being a lifelong learner in programming.</p>
      </Container>
    </Layout>
  )
}

export default AboutPage
