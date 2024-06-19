import { FC, MouseEventHandler } from 'react'

type Props = {
  text: string
  onClick: MouseEventHandler<HTMLButtonElement>
  isLoading?: boolean
  isDisable?: boolean
}
export const ButtonCommon: FC<Props> = ({ text, onClick, isDisable = false, isLoading = false }) => {
  return (
    <button className="buttonCommon" onClick={onClick} disabled={isDisable}>
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
