import React from "react"
import { ThemeProvider } from "styled-components"

// Styles
import { GlobalStyles, lightTheme, darkTheme } from "styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      Layout components
      {children}
    </ThemeProvider>
  )
}

export default Layout;
