import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { themes, GlobalStyles, Footer } from '@aleph-front/core'

import { GlobalStylesOverride } from '@/styles/global'
import Header from '@/components/Header'
import NotificationProvider from '@/components/NotificationProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes.twentysix}>
      <GlobalStyles />
      <GlobalStylesOverride />
      <NotificationProvider>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer small={true} />
      </NotificationProvider>
    </ThemeProvider>
  )
}
