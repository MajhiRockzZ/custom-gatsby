import React from "react"
import { ThemeProvider } from "styled-components"
// Hooks
import { useMetaDataQuery } from "hooks/useMetaDataQuery"

// Components
import Header from "components/Header"

// Styles
import { GlobalStyles, lightTheme, darkTheme } from "styles/GlobalStyles"

const Layout = ({ children }) => {
  const data = useMetaDataQuery()
  console.log(data)

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Header siteTitle={data.title} />
      {children}
    </ThemeProvider>
  )
}

export default Layout
