import '../styles/globals.css'
import Head from 'next/head';
import Layout from '../components/Layout'
import Login from '../components/Login';
import { useState } from 'react';
function MyApp({ Component, pageProps }) {
  const [login , setLogin] = useState(true);

  if(login === false){
    return (
      <div>
        <Head>
          <title>Spindle</title>
        </Head>
        <Login />
      </div>
    )
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
