import Providers from "providers"
import type { AppProps } from 'next/app'
import 'styles/globals.css'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}

export default App
