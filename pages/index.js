import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="Description">
         <a href="https://www.datekno.com">DaTekno</a>
    <br/>
         <a href="https://toplist.eu.org">TopList</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
