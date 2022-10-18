import React from 'react';
import styled from 'styled-components';
import Timeline from '../content/Timeline';
import { SimpleTitleBlock } from '../content/SimpleContentBlock';
import workHistory from '../../content/work_history';


const Section = styled.section``

const WorkHistory = () => {
  return (
    <Section id="work-history">
      <SimpleTitleBlock content="[ Work History ]" />
      <Timeline 
        data={workHistory}
      />
    </Section>
  )
}

export default WorkHistory
