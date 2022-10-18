import React, { useState } from 'react'
import { lightTheme, darkTheme, GlobalStyle } from "../theme"
import { ThemeProvider } from "styled-components"
import styled from 'styled-components';

const Main = styled.main``

const ThemeButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.primary};
`

const Footer = styled.footer`
  text-align: center;
  padding: 1em;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.light};
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
      <title>{pageTitle} | Victor Luna's Portfolio</title>
      <Main id="main-content">
        <ThemeButton 
          onClick={switchTheme}
          className="App-link"
        >{isDarkTheme ? <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="css-38lpna e1p6yfdy0" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"></path></svg> : <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="css-38lpna ejzo28p20" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"></path></svg>}</ThemeButton>
        {children}
      </Main>
      <Footer>
        <p>&copy; {currentYear} Victor Luna</p>
      </Footer>
    </ThemeProvider>
  )
}

export default Layout
