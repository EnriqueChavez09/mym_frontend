'use client'

import { ButtonCommon } from '@/ui/common/ButtonCommon'
import Popup from '@/ui/common/PopUpCommon'
import { ContactTable } from '@/ui/components/ContactTableComponent'
import { RegisterContactComponent } from '@/ui/components/RegisterContactComponent'
import { useState } from 'react'

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleOpen = (): void => setIsOpen(true)
  const handleClose = (): void => setIsOpen(false)

  return (
    <div className="home">
      <div className="home__bottonRegister">
        <ButtonCommon text="Registrar contacto" onClick={handleOpen} />
      </div>
      <div className="home__tableContact">
        <ContactTable />
      </div>
      <Popup isOpen={isOpen} handleClose={handleClose}>
        <RegisterContactComponent />
      </Popup>
    </div>
  )
}
