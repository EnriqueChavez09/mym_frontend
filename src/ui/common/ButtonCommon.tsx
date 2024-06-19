'use client'

import { FC } from 'react'

type Props = {
  text: string
  isLoading?: boolean
  isDisable?: boolean
}
export const ButtonCommon: FC<Props> = ({ text, isDisable = false, isLoading = false }) => {
  return (
    <button className="buttonCommon" disabled={isDisable}>
      {isLoading ? (
        <div className="buttonCommon__loading">
          <div className="buttonCommon__loading__circle"></div>
        </div>
      ) : (
        <p>{text}</p>
      )}
    </button>
  )
}
