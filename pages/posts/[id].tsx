import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import PostInfo from "../../components/PostInfo"

//! Это SSG, то есть у нас на каждый пост уже готова страница. типа
export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
  const posts = await response.json()

  const paths = posts.map(({ id }) => {
    return { params: { id: `${id}` } }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const post = await response.json()

  if (!post) {
    return { notFound: true }
  }

  return {
    props: { post }
  }
}


const Post = ({ post }) => {

  return (
    <>
      <Head>
        <title>Post: №{post.id}</title>
      </Head>
      <PostInfo post={post} />
    </>
  )
}

export default Post