import type { AppProps } from 'next/app'
import '../styles/theme.css'
import '../styles/grid.css'
import '../styles/grid-mobile.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
