import { createGlobalStyle } from "styled-components"

const lightColors = {
  background: "#FCF5F2",   
  primary: "#4F5FF2",
  light: "#FCF5F2"
}

const darkColors = {
  background: "#4F5FF2",
  primary: "#FCF5F2",
  light: "#4F5FF2"
}

const lightThemeColors = Object.assign({}, lightColors)
const darkThemeColors = Object.assign({}, darkColors)

const theme = {
  isDark: false, // Overwritten in Object.assign
  colors: {}, // Overwritten in Object.assign
  fontSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    md: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.5rem", // 24px
    xxl: "2rem" // 32px
  },
  breakpoints: {
    xs: "320px",
    sm: "414px",
    md: "768px",
    lg: "1024px",
    xl: "1440px"
  },
  variables: {
    maxPageWidth: "1504px", // xl breakpoint (1440px) + 72px (2rem padding on each side)
    navHeight: "4.75rem",
    navBannerHeightDesktop: "134px", // 76px + 58px
    navBannerHeightTablet: "159px", // 76px + 83px
    navBannerHeightMobile: "184px", // 76px + 108px
    navSubNavHeightDesktop: "134px", // 76px + 58px
    navSideNavHeightMobile: "140px", // 76px + 64px
  },
}

export const lightTheme = Object.assign(
  {},
  theme,
  { isDark: false },
  { colors: lightThemeColors }
)
export const darkTheme = Object.assign(
  {},
  theme,
  { isDark: true },
  { colors: darkThemeColors }
)

// Dynamic global styles
// Unfortunately Prettier doesn't format `createGlobalStyle`
// TODO external link styles no longer working...
// Seemingly nothing that doesn't involve a theme variable?
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => props.theme.fontSizes.md};
  }

  main {
    width: 90%;
    max-width: 1440px;
    margin: 1rem auto auto;
  }

  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: underline;
  }
  mark {
    background: ${(props) => props.theme.colors.markBackground};
    box-shadow: inset 0 -2px 0 0 rgba(69,142,225,.8);
  }

  .anchor.before {
    fill: ${(props) => props.theme.colors.text};
  }

  hr {
    background: ${(props) => props.theme.colors.lightBorder};
  }



  /* YouTube embeds */
  iframe {
    display: block;
    max-width: 560px;
    margin: 32px 0;
  }
  
  h1 {
    font-size: 3rem;
    line-height: 1.4;
    margin: 2rem 0;
    font-weight: 700;
    scroll-margin-top: ${theme.variables.navHeight};
    scroll-snap-margin: ${theme.variables.navHeight};
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: 2.5rem;
    }
  }
  
  h2 {
    font-size: 2rem;
    line-height: 1.4;
    margin: 2rem 0;
    margin-top: 3rem;
    font-weight: 600;
    scroll-margin-top: ${theme.variables.navHeight};
    scroll-snap-margin: ${theme.variables.navHeight};
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: 1.5rem;
    }
  }
  
  h3 {
    font-size: 1.5rem;
    line-height: 1.4;
    margin: 2rem 0;
    margin-top: 2.5rem;
    font-weight: 600;
    scroll-margin-top: ${theme.variables.navHeight};
    scroll-snap-margin: ${theme.variables.navHeight};
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: 1.25rem;
    }
  }
  
  h4 {
    font-size: 1.25rem;
    line-height: 1.4;
    font-weight: 500;
    margin: 2rem 0;
    scroll-margin-top: ${theme.variables.navHeight};
    scroll-snap-margin: ${theme.variables.navHeight};
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: 1rem;
    }
  }
  
  h5 {
    font-size: 1rem;
    line-height: 1.4;
    font-weight: 450;
    margin: 2rem 0;
    scroll-margin-top: ${theme.variables.navHeight};
    scroll-snap-margin: ${theme.variables.navHeight};
  }

  h6 {
    font-size: 0.9rem;
    line-height: 1.4;
    font-weight: 400;
    text-transform: uppercase;
    margin: 2rem 0;
    scroll-margin-top: ${theme.variables.navHeight};
    scroll-snap-margin: ${theme.variables.navHeight};
  } 
`
