import Head from 'next/head'
import Layout from '../components/Layout/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1'></meta>
    </Head>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
