import React, { createContext } from 'react'

type Props = {
  uuid: string
  setUUID: React.Dispatch<React.SetStateAction<string>>
}

const UpdateTableContactContext = createContext<Props | undefined>(undefined)

export default UpdateTableContactContext
