import Head from 'next/head'
import type { NextPage } from 'next'

const Home: NextPage = (): React.ReactElement => {
  return (
    <main id="dashboard"> 
      <Head>
      <title>Club Berlin | Dashboard</title>
      </Head>

      <article>
        Dashboard
      </article>
    </main>
  )
}

export default Home
