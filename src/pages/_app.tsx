import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { useRouter } from 'next/router'
import { themes, GlobalStyles } from '@aleph-front/core'
import { GlobalStylesOverride } from '@/styles/global'
import NotificationProvider from '@/components/NotificationProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
        {!fullScreen && <Footer />}
      </NotificationProvider>
    </ThemeProvider>
  )
}
