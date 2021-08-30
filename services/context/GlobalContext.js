import React, { useState, useEffect, createContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BodyContainer } from '@/styles/mainStyles'

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)

  const values = {}

  return (
    <GlobalContext.Provider value={values}>
      <ThemeProvider theme={theme}>
        <BodyContainer className="BodyContainer">
          <Header />
          {children}
          <Footer />
        </BodyContainer>
      </ThemeProvider>
    </GlobalContext.Provider>
  )
}
