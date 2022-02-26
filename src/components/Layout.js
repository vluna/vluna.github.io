import React, { useState } from 'react'
import Nav from './Nav'
import * as layoutStyle from './layout.module.css'
import { lightTheme, darkTheme, GlobalStyle } from "../theme"
import { ThemeProvider } from "styled-components"
import styled from 'styled-components';

const Main = styled.main``

const SkipLink = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.primary};
`

const SkipLinkAnchor = styled.a`
  line-height: 2rem;
  position: absolute;
  top: -3rem;
  margin-left: 0.5rem;
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;

  &:focus {
    position: static;
  }
`

const Footer = styled.footer`
  text-align: center;
  padding: 1em;
  background: blue;
`

const Layout = ({ pageTitle, children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const switchTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  const theme = isDarkTheme ? darkTheme : lightTheme;
  const currentYear = new Date().getFullYear();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle isDarkTheme={isDarkTheme} />
      <SkipLink>
        <SkipLinkAnchor href='#main-content'>Skip to main content</SkipLinkAnchor>
      </SkipLink>
      <title>{pageTitle} | Victor Luna's Portfolio</title>
      <header>
        <Nav />
      </header>
      <Main id="main-content">
        <button
          onClick={switchTheme}
          className="App-link"
        >Hellllo</button>
        Learn React {theme === 'light' ? 'Dark' : 'Light'}
        {children}
      </Main>
      <Footer>
        <p>&copy; {currentYear} Victor Luna</p>
        <ul>
          <li>Skills</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </Footer>
    </ThemeProvider>
  )
}

export default Layout
