import Heading from "./Heading"



const PostInfo = ({ post }) => {

  const { id, body } = post || {}

  if (!post) {
    return <Heading text={'emtpy post'} />
  }

  return (
    <>
      <Heading tag='h2' text={'Текст поста: '} />
      <p>{id}: {body}</p>
    </>
  )
}

export default PostInfo