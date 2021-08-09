import Head from 'next/head'
import Header from '../components/Header';
import Form from '../components/Form';



export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <main>
        <Form/>
      </main>
    </div>
  )
}
