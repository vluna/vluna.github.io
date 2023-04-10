import React from 'react'
import { SimpleTable } from '../content/SimpleTable';
import styled from 'styled-components';
import languageSkills from '../../content/language_skills';


const Section = styled.section`
`

const Skills = () => {
  const headers = ['Language', 'YOE', 'Frameworks'];

  return (
    <Section id="skills">
      <SimpleTable 
        id="skills"
        headers={headers}
        data={languageSkills}
      />
    </Section>
  )
}

export default Skills
