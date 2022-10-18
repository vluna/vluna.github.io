import React from 'react'
import styled from 'styled-components';

const Header = styled.h1`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 4px;
`
const SubHeader = styled.h2`
  text-align: center;
`
const Paragraph = styled.p``

const SimpleTitleBlock = ({ content, className }) => {
  return (
    <Header className={className}>{content}</Header>
  )
}

const SimpleSubtitleBlock = ({ content, className }) => {
  return (
    <SubHeader className={className}>{content}</SubHeader>
  )
}

const SimpleTextBlock = ({ content }) => {
  return (
    <Paragraph>{content}</Paragraph>
  )
}

export { SimpleTextBlock, SimpleSubtitleBlock, SimpleTitleBlock }
