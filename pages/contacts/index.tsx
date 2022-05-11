import Heading from "../../components/Heading"
import Link from 'next/link'
import Head from 'next/head'
import { GetStaticProps } from "next"
import { ContactType } from "../../types"
import { FC } from "react"

interface IConctacts {
  contacts: [ContactType]
}

//! Таким образом запрос происходит через сервер, а после с сервера приходит html
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()

  if (!users) {
    return { notFound: true }
  }

  return {
    props: { contacts: users }
  }
}

const Contacts: FC<IConctacts> = ({ contacts }) => {

  return (
    <>
      <Head>
        <title>Conctacts</title>
      </Head>
      <Heading text='Все контакты:' />
      <ul>
        {contacts && contacts.map(user => (
          <li key={user.id}>
            <Link href={`/contacts/${user.id}`}>
              <a><strong>{user.name}</strong></a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

{/* <li>
<Link href="contacts/contact"> 
  <a>Jack</a>
</Link>
</li> */}

export default Contacts