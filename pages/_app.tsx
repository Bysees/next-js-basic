import Layout from "../components/Layout"
import '../styles/globals.scss'
import bridge from '../public/bridge.jpg'
import Image from "next/image"
import Head from "next/head"
import { AppProps } from "next/app"

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@1,300&display=swap" />
    </Head>
    <main>
      <Component {...pageProps} />
    </main>

    <Image
      src={bridge}
      width={500}
      height={350}
      alt="bridge"
      placeholder="blur"
    />
  </Layout>
)

export default MyApp
