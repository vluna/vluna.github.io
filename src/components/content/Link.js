import React from 'react'
import styled from 'styled-components';

const A = styled.a`
  text-decoration: none;
`

const Link = ({ href, title }) => {
  return (
    <A href={href}>{title}</A>
  )
}

export default Link
