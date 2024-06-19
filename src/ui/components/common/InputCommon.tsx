import { FC, HTMLInputTypeAttribute } from 'react'

type Props = {
  type: HTMLInputTypeAttribute
  label: string
  placeholder: string
}

export const InputCommon: FC<Props> = ({ type, placeholder, label }) => {
  return (
    <div className="inputCommon">
      <p>{label}</p>
      <input type={type} placeholder={placeholder} />
    </div>
  )
}
