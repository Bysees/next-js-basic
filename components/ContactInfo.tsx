import { FC } from "react"
import { ContactType } from "../types"
import Heading from "./Heading"

interface IContactInfo {
  contact: ContactType
}

const ContactInfo: FC<IContactInfo> = ({ contact }) => {
  const { name, phone, address } = contact || {}
  const { city, street, suite } = address || {}

  if (!contact) {
    return <Heading text={'emtpy contact'} />
  }

  return (
    <ul>
      <Heading tag='h2' text={name} />
      <li>
        <p><strong>phone:</strong> {phone}</p>
      </li>
      <li>
        <p><strong>Adress:</strong> city - {city}, st - {street}, suite - {suite}</p>
      </li>
    </ul>
  )
}

export default ContactInfo