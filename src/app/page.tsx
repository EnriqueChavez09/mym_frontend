'use client'

import { useHome } from '@/lib/hooks/useHome'
import { ButtonCommon } from '@/ui/components/common/ButtonCommon'
import Popup from '@/ui/components/common/PopUpCommon'
import { TableContact } from '@/ui/components/contact/TableContact'
import { RegisterContact } from '@/ui/containers/contact/RegisterContact'

export default function Home() {
  const { isOpen, listCompanies, handleClose, handleOpen } = useHome()

  return (
    <div className="home">
      <div className="home__tableContact">
        <TableContact />
      </div>
      <div className="home__bottonRegister">
        <ButtonCommon text="Registrar contacto" onClick={handleOpen} />
      </div>
      <Popup isOpen={isOpen} handleClose={handleClose}>
        {listCompanies != undefined && <RegisterContact listCompanies={listCompanies} />}
      </Popup>
    </div>
  )
}
