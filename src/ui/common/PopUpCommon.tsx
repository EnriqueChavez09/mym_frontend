import { FC } from 'react'

type Props = {
  isOpen: boolean
  handleClose: () => void
  children: React.ReactNode
}

const Popup: FC<Props> = ({ isOpen, handleClose, children }) => {
  if (!isOpen) return null
  const handleContentClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
  }
  return (
    <div className="popupOverlay" onClick={handleClose}>
      <div className="popupOverlay__content" onClick={handleContentClick}>
        <button className="popupOverlay__content__close" onClick={handleClose}>
          X
        </button>
        {children}
      </div>
    </div>
  )
}

export default Popup
