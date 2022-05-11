import { FC } from "react"

interface IHeading {
  tag?: 'h2' | 'h2' | 'h3' | 'h4' | 'h5',
  text: string
}

const Heading: FC<IHeading> = ({ tag, text }) => {
  const Tag = tag || 'h1'

  return <Tag>{text}</Tag>

}

export default Heading
