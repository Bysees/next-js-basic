import Heading from "../components/Heading"
import styles from '../styles/Home.module.scss'
import Head from 'next/head'
import Socials from "../components/Socials"


export const getStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/socials`)
    const socials = await response.json()

    if (!socials) {
      return { notFound: true }
    }

    return {
      props: { socials }
    }

  } catch {
    return {
      props: { socials: null }
    }
  }
}


const Home = ({ socials }) => (
  <div className={styles.wrapper}>
    <Head>
      <title>Home</title>
    </Head>
    <Heading text='Next js application' />
    <Socials socials={socials} />
  </div>
)


export default Home