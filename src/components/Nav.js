import React from 'react'
import navigation from '../content/navigation'
import NavLink from './NavLink'
import styled from 'styled-components';


const Navigation = styled.nav`
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
`

const NavigationList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
`

const NavigationListItem = styled.li`
  list-style: none;
  padding: 1rem;
`

const Nav = () => {
  return (
    <Navigation>
      <NavigationList>
        {navigation.map((el) => {
          return (
            <NavigationListItem>
              <NavLink url={el.url} title={el.title} image={el.image}/>
            </NavigationListItem>
          )
        })}
      </NavigationList>
    </Navigation>
  )
}

export default Nav
