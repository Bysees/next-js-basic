import { useRouter } from "next/router"
import { useEffect } from "react"
import Heading from "../components/Heading"

const Error = () => {

  const router = useRouter()

  useEffect(() => {
    setTimeout(() => router.push('/'), 2000)
  }, [router])

  return (
    <>
      <Heading text='404' />
      <Heading tag='h2' text='Something went wrong...' />
    </>
  )
}

export default Error