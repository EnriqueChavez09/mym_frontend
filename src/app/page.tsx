'use client'

import { useHome } from '@/lib/hooks/useHome'
import { ButtonCommon } from '@/ui/common/ButtonCommon'
import Popup from '@/ui/common/PopUpCommon'
import { ContactTable } from '@/ui/components/ContactTableComponent'
import { RegisterContactComponent } from '@/ui/components/RegisterContactComponent'

export default function Home() {
  const { isOpen, listCompanies, handleClose, handleOpen } = useHome()

  return (
    <div className="home">
      <div className="home__tableContact">
        <ContactTable />
      </div>
      <div className="home__bottonRegister">
        <ButtonCommon text="Registrar contacto" onClick={handleOpen} />
      </div>
      <Popup isOpen={isOpen} handleClose={handleClose}>
        {listCompanies != undefined && <RegisterContactComponent listCompanies={listCompanies} />}
      </Popup>
    </div>
  )
}
