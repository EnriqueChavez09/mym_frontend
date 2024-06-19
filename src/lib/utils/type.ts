export type TListContact = {
  id: number
  fullNames: string
  phone: string
  address: string
  email: string
  company: string
  created: string
}

export type TCRUContact = {
  id: number
  fullNames: string
  phone: string
  address: string
  email: string
  company: number | string
}

export type TListCompany = {
  id: number
  companyName: string
}

export type TListOptionSelect = {
  value: number
  name: string
}
