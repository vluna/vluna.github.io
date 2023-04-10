import React from 'react'
import styled from 'styled-components';

const A = styled.a`
  text-decoration: none;
`

const Link = ({ href, title, className }) => {
  return (
    <A href={href} className={className}>{title}</A>
  )
}

export default Link
