import { Html, Head, NextScript, Main } from 'next/document'

const Document: React.FC = (): React.ReactElement => {
  return (
    <Html>
      <Head>
        <meta name="description" content="Dashboard Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
