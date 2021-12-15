import Head from 'next/head'
import { Cards } from '../components/Cards/card'
import { Navbar } from '../components/Navbar/navbar'

export default function Home() {
  return (
    <div className='font-poppins'>
      <Head>
        <title>Crypto Mate</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />

      <Cards/>

    </div>
  )
}
