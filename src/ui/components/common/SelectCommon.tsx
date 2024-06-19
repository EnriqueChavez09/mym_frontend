import { TListOptionSelect } from '@/lib/utils/type'
import { ChangeEvent, FC, useState } from 'react'

type Props = {
  label: string
  placeholder: string
  listOptions: TListOptionSelect[]
}

export const SelectCommon: FC<Props> = ({ placeholder, listOptions, label }) => {
  const [option, setOption] = useState('')

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setOption(event.target.value)
  }
  return (
    <div className="selectCommon">
      <p>{label}</p>
      <select value={option} onChange={handleChange}>
        <option value="" disabled>
          {placeholder}
        </option>
        {listOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}
