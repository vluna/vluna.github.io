import React from 'react'
import styled from 'styled-components';

const Span = styled.span`
  border-radius: 10px;
  font-size: 12px;
  padding: 4px 16px;
  border: .2em solid;
  color: ${(props) => props.theme.colors.primary};
  margin: 0 5px 5px 0;
`

const Badge = ({ content }) => {
  return (
    <Span>{content}</Span>
  )
}

export default Badge
