import { FC, HTMLInputTypeAttribute } from 'react'

type Props = {
  type: HTMLInputTypeAttribute
  placeholder: string
}

export const InputCommon: FC<Props> = ({ type, placeholder }) => {
  return <input type={type} placeholder={placeholder} />
}
