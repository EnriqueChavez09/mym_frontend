import { FC } from 'react'

type Props = {
  isOpen: boolean
  handleClose: () => void
  children: React.ReactNode
}

const Popup: FC<Props> = ({ isOpen, handleClose, children }) => {
  if (!isOpen) return null

  return (
    <div className="popupOverlay">
      <div className="popupOverlay__content">
        <button className="popupOverlay__content__close" onClick={handleClose}>
          X
        </button>
        {children}
      </div>
    </div>
  )
}

export default Popup
