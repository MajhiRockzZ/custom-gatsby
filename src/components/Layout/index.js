import React, { useContext } from "react"
import { ThemeProvider } from "styled-components"
// Hooks
import { useMetaDataQuery } from "hooks/useMetaDataQuery"

// Components
import Header from "components/Header"

// Context
import { ModeContext } from "context/ModeProvider"

// Styles
import { GlobalStyles, lightTheme, darkTheme } from "styles/GlobalStyles"

const Layout = ({ children }) => {
  const data = useMetaDataQuery()
  const [darkMode] = useContext(ModeContext)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header siteTitle={data.title} />
      {children}
    </ThemeProvider>
  )
}

export default Layout
