import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

const NavigationLink = styled(Link)`
  text-decoration: none;
`

const NavLink = ({ url, title, image }) => {
  console.log(url);
  return (
    <NavigationLink to={url}>{title}</NavigationLink>
  )
}

export default NavLink
