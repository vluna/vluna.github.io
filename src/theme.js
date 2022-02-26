import { createGlobalStyle } from "styled-components"

const background = "#FCFBF5"
const white = "#FFFFFF"
const black = "#000000"

const primaryLight = "#0072B2"
const primaryDark = "rgb(255, 115, 36)"
const success = "#009E73"
const fail = "#DC3220"
const turquoise = "#CCFCFF"
const turquoiseDark = "rgb(41,50,51,1)"
const yellow = "#FFF8DF"
const mint = "#E1FEFA"
const mintDark = "rgb(45,51,50,1)"
const codeBoxDark = "#2a2734"
const codeBoxLight = "#fafafa"

// purple and orangeDark introduced for dark mode alts for homepage boxes
const purpleDark = "rgb(33,33,49,1)"
const orangeDark = "rgb(51,40,33,1)"
const pink = "#FFE5F9"
const pinkDark = "rgb(51,32,39,1)"
const gridYellow = "#FFE78E"
const gridRed = "#EF7D7D"
const gridBlue = "#A7D0F4"
const gridPink = "#FFA1C3"


const black500 = black


const baseColors = {
  white,
  black,
  black500,
  boxShadow: "rgba(0,0,0,0.12)",
  boxShadowHover: "rgba(0,0,0,0.24)",
  secondary: "#b2b2b2", // TODO replace
  success,
  fail,
  tagTurqouise: turquoise,
  tagYellow: yellow,
  tagMint: mint,
  tagPink: pink,
  yellow,
  gridYellow,
  gridRed,
  gridBlue,
  gridPink
}

// TODO replace random variables w/ baseColor variables
const lightColors = {
  buttonColor: white,
  upgradesGradient:
    "linear-gradient(285.24deg, #F7CBC0 0%, #F4B1AB 29.8%, #8476D9 49.78%, #85ACF9 54.14%, #1C1CE1 61.77%, #000000 69.77%)",
  runNodeGradient:
    "linear-gradient(0deg, rgba(153, 157, 244, 0.1) 0%, rgba(153, 157, 244, 0) 100%), linear-gradient(270.72deg, #FDF0FF 0.62%, rgba(236, 195, 195, 0.557292) 32.61%, rgba(207, 189, 230, 0.296875) 49.67%, rgba(196, 196, 196, 0) 72.88%);",
  runNodeGradient2:
    "linear-gradient(135deg, rgba(79, 113, 235, 0.2) 9.8%, rgba(232, 79, 235, 0.2) 92.84%);",
  ghostCardBackground: white,
  primary: primaryLight,
  primaryHover: "rgba(28, 28, 225, 0.8)",
  lightBorder: "#ececec",
  priceCardBackgroundPositive:
    "linear-gradient( 0, rgba(207, 236, 224, 0.6) 0%, rgba(207, 236, 224, 0) 100%)",
  priceCardBackgroundNegative:
    "linear-gradient(180deg, rgba(241, 204, 204, 0.4) 0%, rgba(241, 204, 204, 0) 100%)",
  priceCardBorder: "#ececec",
  priceCardBorderNegative: "#ececec",
  searchBorder: "#7f7f7f",
  searchBackground: white,
  searchBackgroundEmpty: "#f2f2f2",
  searchResultText: "#33363d",
  searchResultBackground: "#f1f3f5",
  dropdownBackground: white,
  dropdownBackgroundHover: "#f2f2f2",
  dropdownBorder: "#e5e5e5",
  markBackground: "rgba(143,187,237,.1)",
  markUnderline: "rgba(143,187,237,.5)",
  modalBackground: "hsla(0, 0%, 69.8%, 0.9)",
  text: "#000000",
  text200: "#666",
  text300: "#4c4c4c",
  textTableOfContents: "#7f7f7f",
  background: background,
  tableBoxShadow:
    "0 14px 66px rgba(0,0,0,.07), 0 10px 17px rgba(0,0,0,.03), 0 4px 7px rgba(0,0,0,.05)",
  tableItemBoxShadow: "rgba(0, 0, 0, 0.1)",
  tableBackgroundHover: "#f2f2f2",
  preBackground: "#f2f2f2",
  preBorder: "rgba(0,0,0,.05)",
  homeDivider: "#a4a4f3",
  displayDark: "none",
  displayLight: "block",
  grayBackground: "#fcfcfc",
  cardGradient:
    "radial-gradient(46.28% 66.31% at 66.95% 58.35%, #e6e6f7 0%, #e7edfa 50%, #e9fbfa 100%)",
  upgradeStatusBackground:
    "linear-gradient(180deg,rgba(0, 240, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), #1c1ce1",
  upgradeStatusShippedBackground:
    "linear-gradient(180deg,rgba(0, 240, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),#109e62",
  upgradeStatusBorder: "none",
  upgradeStatusShippedBorder: "none",
  tagMint: mint,
  beaconchain: turquoise,
  cardBoxShadow: "4px 4px 0px 0px #D2D2F9",
  homeBoxMint: mint,
  homeBoxTurquoise: turquoise,
  homeBoxPink: pink,
  codeBackground: codeBoxLight,
  beta: "radial-gradient(25.56% 133.51% at 28.36% 45.54%, rgba(28, 28, 225, 0) 0%, rgba(28, 28, 225, 0.06) 100%)"
}

// TODO replace random variables w/ baseColor variables
const darkColors = {
  upgradesGradient:
    "linear-gradient(285.24deg, #F7CBC0 0%, #FBEAE3 17.81%, #F4B1AB 29.8%, #8476D9 49.78%, #8DB4FF 69.77%);",
  runNodeGradient:
    "linear-gradient(0deg, rgba(153, 157, 244, 0.35) 0%, rgba(153, 157, 244, 0) 100%), linear-gradient(89.24deg, rgba(253, 240, 255, 0.7) -64.3%, rgba(212, 119, 119, 0.390104) -7.43%, rgba(188, 163, 220, 0.207813) 46.66%, rgba(196, 196, 196, 0) 99.16%);",
  runNodeGradient2:
    "linear-gradient(135deg, rgba(79, 113, 235, 0.2) 9.8%, rgba(232, 79, 235, 0.2) 92.84%);",
  primary: primaryDark,
  lightBorder: "#404040",
  priceCardBackground: "transparent",
  searchBorder: "#b2b2b2",
  searchBackground: "#4c4c4c",
  searchBackgroundEmpty: "#333",
  searchResultText: "#f1f3f5",
  searchResultBackground: "#33363d",
  dropdownBackground: "#191919",
  dropdownBackgroundHover: "#000",
  dropdownBorder: "#333",
  markBackground: "rgb(255, 115, 36, .1)",
  markUnderline: "rgb(255, 115, 36, .5)",
  modalBackground: "rgba(25,25,25,0.8)",
  text: "#f2f2f2",
  text200: "#b2b2b2",
  text300: "#ccc",
  textTableOfContents: "hsla(0,0%,69.8%,.8)",
  background: "#222222",
  tableBoxShadow:
    "0 14px 66px hsla(0,0%,96.1%,.07), 0 10px 17px hsla(0,0%,96.1%,.03), 0 4px 7px hsla(0,0%,96.1%,.05)",
  tableItemBoxShadow: "hsla(0,0%,100%,.1)",
  tableBackgroundHover: "rgba(255,115,36,.013)",
  preBackground: "#191919",
  preBorder: "hsla(0,0%,100%,.05)",
  homeDivider: "#ffc7a7",
  displayDark: "block",
  displayLight: "none",
  grayBackground: "#272627",
  upgradeStatusBackground: "#222222",
  upgradeStatusShippedBackground: "#222222",
  tagMint: mint,
  mainnet: "#222222",
  beaconchain: "#222222",
  beaconchainBorder: pink,
  shard: "#222222",
  cardBoxShadow: "4px 4px 0px 0px #FFAB7C",
  homeBoxMint: mintDark,
  homeBoxTurquoise: turquoiseDark,
  homeBoxOrange: orangeDark,
  homeBoxPurple: purpleDark,
  homeBoxPink: pinkDark,
  codeBackground: codeBoxDark,
  beta: "background: radial-gradient(25.56% 133.51% at 28.36% 45.54%, rgba(255, 143, 80, 0.72) 0%, rgba(255, 143, 80, 0.22) 100%)",
  cardGradient:
    "linear-gradient(49.21deg, rgba(127, 127, 213, 0.2) 19.87%, rgba(134, 168, 231, 0.2) 58.46%, rgba(145, 234, 228, 0.2) 97.05% )",
}

const lightThemeColors = Object.assign({}, baseColors, lightColors)
const darkThemeColors = Object.assign({}, baseColors, darkColors)

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
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSizes.md};
  }

  main {
    width: 90%;
    max-width: 1440px;
    margin: auto;
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
