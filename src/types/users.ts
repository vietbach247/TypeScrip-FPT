type hair = {
  color: string
  type: string
}

type coordinates = {
  lat: number
  lng: number
}

type address = {
  address: string
  city: string
  coordinates: coordinates
  postalCode: string
  state: string
}

type bank = {
  cardExpire: string
  cardNumber: string
  cardType: string
  currency: string
  iban: string
}

type company = {
  address: address
  department: string
  name: string
  title: string
}

type crypto = {
  coin: string
  wallet: string
  network: string
}

export type TUser = {
  id: number
  firstName: string
  lastName: string
  maidenName: string
  age: number
  gender: 'male' | 'female' | 'other'
  email: string
  phone: string
  username: string
  password: string
  birthDate: string
  image: string
  bloodGroup: string
  height: number
  weight: number
  eyeColor: string
  hair: hair
  domain: string
  ip: string
  address: address
  macAddress: string
  university: string
  bank: bank
  company: company
  ein: string
  ssn: string
  userAgent: string
  crypto: crypto
}
