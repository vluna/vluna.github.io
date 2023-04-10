import React from 'react'
import styled from 'styled-components';
import Badge from './Badge';

const TimelineContainer = styled.ul`
  margin: 4em auto;
  position: relative;
  padding: 0;

  &:before {
    background-color: ${(props) => props.theme.colors.primary};
    content: '';
    margin-left: -1px;
    position: absolute;
    top: 0;
    left: 2em;
    width: 2px;
    height: 100%;
  }
`

const TimelineElementContainer = styled.li`
  position: relative;
  padding: 0;
  list-style: none;
`

const TimelineElement = styled.div`
  padding: 2em 0 0;
  position: relative;
  top: -1.875em;
  left: 4em;
  width: 80%;

  h3 {
    font-size: 1.75em;
    margin: 0;
  }

  h4 {
    font-size: 1.2em;
    margin: 0;
  }
  
  h5 {
    font-size: 1em;
    margin: 5px 0 0;
  }

  p:not(:first-child) {
    padding-bottom: 1.2em;
  }

  p:first-child {
    color: ${(props) => props.theme.colors.light};
    font-size: 0.75em;
    background-color: ${(props) => props.theme.colors.primary};
    display: inline-block;
    margin: 0;
    padding: 0.25em 1em 0.2em 1em;
  }
`

const TimelineElementIcon = styled.label`
  -moz-transition: -moz-transform 0.2s ease-in;
  -o-transition: -o-transform 0.2s ease-in;
  -webkit-transition: -webkit-transform 0.2s ease-in;
  transition: transform 0.2s ease-in;
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  background-color: ${(props) => props.theme.colors.primary};
  outline: 10px solid ${(props) => props.theme.colors.light};
  display: block;
  margin: 0.5em 0.5em 0.5em -0.5em;
  position: absolute;
  top: 0;
  left: 2em;
  width: 1em;
  height: 1em;
`

const BadgeContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`

const Timeline = ({ id, data }) => {
  const timelineRender = data.map((el, idx) =>
    <TimelineElementContainer key={`${id}-${idx}`}>
      <TimelineElementIcon />
      <TimelineElement>
        <p>{el.start_date} - {el.end_date}</p>
        <h3>{el.title}</h3>
        <h4>{el.company}</h4>
        <h5>{el.subtitle}</h5>
        <BadgeContainer>
          {el.tags.map((item, jdx) =>
            <Badge
              key={`${id}-badge-${jdx}`}
              content={item}
            />
          )}
        </BadgeContainer>
        {el.description ? <p>{el.description}</p> : null}
      </TimelineElement>
    </TimelineElementContainer>
  )

  return (
    <TimelineContainer>
      {timelineRender}
    </TimelineContainer> 
  )
}

export default Timeline
