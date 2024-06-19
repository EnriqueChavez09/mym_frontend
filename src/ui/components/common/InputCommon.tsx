import { FC, HTMLInputTypeAttribute } from 'react'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form'

type Props = {
  type: HTMLInputTypeAttribute
  label: string
  placeholder: string
  register: UseFormRegisterReturn
  error: FieldError | undefined
}

export const InputCommon: FC<Props> = ({ type, placeholder, label, register, error }) => {
  return (
    <div className="inputCommon">
      <p>{label}</p>
      <input {...register} type={type} placeholder={placeholder} />
      <p className="inputError">{error ? error.message : ''}</p>
    </div>
  )
}
