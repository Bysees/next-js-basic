import Heading from "../../components/Heading"
import Head from 'next/head'
import Link from 'next/link'
import { FC } from "react"
import { PostType } from "../../types"
import { GetStaticProps } from "next"

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
  const posts = await response.json()

  if (!posts) {
    return { notFound: true }
  }

  return {
    props: { posts }
  }
}

interface IPosts {
  posts: PostType[]
}

const Posts: FC<IPosts> = ({ posts }) => {

  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading tag='h2' text='Posts List:' />
      <ul>
        {posts && posts.map(({ title, id }) => {
          return (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{id}: {title}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Posts