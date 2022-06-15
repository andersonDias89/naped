import type { NextPage } from 'next'
import { FeedNews } from '../components/FeedNews'
import { Footer } from '../components/Footer'

import { Header } from '../components/Header'
import { InitialPage } from '../components/InitialPage'
import { RecentNews } from '../components/RecentNews'



const Home: NextPage = () => {
  return (
    <>
      <Header />
      <InitialPage />
      <FeedNews />
      <RecentNews />
      <Footer />
    </>
  )
}

export default Home
