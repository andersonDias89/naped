import type { NextPage } from 'next'
import Head from 'next/head'

import { FeedNews } from '../components/FeedNews'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { InitialPage } from '../components/InitialPage'
import { RecentNews } from '../components/RecentNews'



const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Naped Desafio | Home</title>
        <meta name="description" content="Desafio Naped - Blog para com conteúdo nerd" />
      </Head>

      <Header />
      <main>
        <InitialPage />
        <FeedNews />
        <RecentNews />
      </main>
      <Footer />
    </>
  )
}

export default Home
