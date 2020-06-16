import React, { useState } from "react"

export const ModeContext = React.createContext([])

const ModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <ModeContext.Provider value={[darkMode, setDarkMode]}>
      {children}
    </ModeContext.Provider>
  )
}

export default ModeProvider
