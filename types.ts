export type AddressType = {
  city: string,
  street: string,
  suite: string
}

export type ContactType = {
  id: number
  name: string
  phone: string
  address: AddressType
}

export type PostType = {
  id: number
  title: string
  body: string
}