import React, { useState } from 'react'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { ThemeProvider } from 'styled-components'
import { GlobalProvider } from '@/context/GlobalContext'
import { GlobalStyle, ToastStyledContainer, lightTheme, darkTheme } from '@/styles/globalStyles'

function MyApp({ Component, pageProps, token }) {
  const [theme, setTheme] = useState('light')

  // Apollo client configuration
  const httpLink = createHttpLink({
    uri: 'https://example-url.com/graphql',
  })
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    }
  })
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  })

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Head>
        <title>NextJS Template</title>
        <meta name="description" content="NextJS Template developed by Lucas Koval" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <GlobalProvider themeStyle={theme} setThemeStyle={setTheme}>
        <ApolloProvider client={client}>
          <NextNprogress />
          <Component {...pageProps} />
        </ApolloProvider>
      </GlobalProvider>
      <ToastStyledContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
      />
    </ThemeProvider>
  )
}

export default MyApp

MyApp.getInitialProps = async function ({ Component, ctx }) {
  const token = process.env.TOKEN || ''
  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = Component.getInitialProps(ctx)
  }
  return { pageProps, token }
}
