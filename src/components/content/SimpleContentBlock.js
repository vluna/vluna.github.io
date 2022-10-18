import React from 'react'
import styled from 'styled-components';

const Header = styled.h1`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 4px;
`
const Paragraph = styled.p``

const SimpleTitleBlock = ({ content }) => {
  return (
    <Header>{content}</Header>
  )
}

const SimpleTextBlock = ({ content }) => {
  return (
    <Paragraph>{content}</Paragraph>
  )
}

export { SimpleTextBlock, SimpleTitleBlock }
