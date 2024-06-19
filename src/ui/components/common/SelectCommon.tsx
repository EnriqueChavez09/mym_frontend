import { TListOptionSelect } from '@/lib/utils/type'
import { FC } from 'react'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form'

type Props = {
  label: string
  placeholder: string
  listOptions: TListOptionSelect[]
  register: UseFormRegisterReturn
  error: FieldError | undefined
}

export const SelectCommon: FC<Props> = ({ placeholder, listOptions, label, register, error }) => {
  return (
    <div className="selectCommon">
      <p>{label}</p>
      <select {...register}>
        <option value="">{placeholder}</option>
        {listOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      <p className="inputError">{error ? error.message : ''}</p>
    </div>
  )
}
