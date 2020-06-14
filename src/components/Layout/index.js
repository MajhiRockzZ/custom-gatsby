import React from "react"
import { ThemeProvider } from "styled-components"
// Hooks
import { useMetaDataQuery } from "hooks/useMetaDataQuery"

// Styles
import { GlobalStyles, lightTheme, darkTheme } from "styles/GlobalStyles"

const Layout = ({ children }) => {
  const data = useMetaDataQuery()
  console.log(data)

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      Layout components
      {children}
    </ThemeProvider>
  )
}

export default Layout
