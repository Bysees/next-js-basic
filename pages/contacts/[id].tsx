import { GetServerSideProps } from 'next'
import Head from 'next/head'
import ContactInfo from "../../components/ContactInfo"

//! Это SSR, то есть я формирую HTML по запросу.
export const getServerSideProps: GetServerSideProps = async (context) => {

  const { id } = context.params

  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const user = await response.json()

  if (!user) {
    return { notFound: true }
  }

  return {
    props: { contact: user }
  }
}

const Contact = ({ contact }) => {

  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactInfo contact={contact} />
    </>
  )
}

export default Contact