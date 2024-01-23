import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { themes, GlobalStyles, Footer } from '@aleph-front/core'

import { GlobalStylesOverride } from '@/styles/global'
import Header from '@/components/Header'
import NotificationProvider from '@/components/NotificationProvider'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const fullScreen = router.pathname === '/countdown'

  return (
    <ThemeProvider theme={themes.twentysix}>
      <GlobalStyles />
      <GlobalStylesOverride />
      <NotificationProvider>
        {!fullScreen && <Header />}
        <main>
          <Component {...pageProps} />
        </main>
        {!fullScreen && <Footer small={true} />}
      </NotificationProvider>
    </ThemeProvider>
  )
}
