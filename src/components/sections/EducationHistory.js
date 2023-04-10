import React from 'react';
import styled from 'styled-components';
import Timeline from '../content/Timeline';
import { SimpleTitleBlock } from '../content/SimpleContentBlock';
import educationHistory from '../../content/education_history';

const Section = styled.section``

const EducationHistory = () => {
  return (
    <Section id="education">
      <SimpleTitleBlock content="[ Education ]" />
      <Timeline 
        id="education"
        data={educationHistory}
      />
    </Section>
  )
}

export default EducationHistory
