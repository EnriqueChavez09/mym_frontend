import { TListOptionSelect } from '@/lib/utils/type'
import { ChangeEvent, FC, useState } from 'react'

type Props = {
  placeholder: string
  listOptions: TListOptionSelect[]
}

export const SelectCommon: FC<Props> = ({ placeholder, listOptions }) => {
  const [option, setOption] = useState('')

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setOption(event.target.value)
  }
  return (
    <div>
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
