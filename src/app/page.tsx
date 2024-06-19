'use client'

import UpdateTableContactContext from '@/lib/contexts/UpdateTableContactContext'
import { useHome } from '@/lib/hooks/useHome'
import { ButtonCommon } from '@/ui/components/common/ButtonCommon'
import Popup from '@/ui/components/common/PopUpCommon'
import { TableContact } from '@/ui/components/contact/TableContact'
import { RegisterContact } from '@/ui/containers/contact/RegisterContact'

export default function Home() {
  const { isOpen, listCompanies, handleClose, handleOpen, setIsOpen, setUUID, uuid } = useHome()

  return (
    <UpdateTableContactContext.Provider value={{ uuid, setUUID }}>
      <div className="home">
        <div className="home__title">
          <h1>Lista de contactos</h1>
        </div>
        <div className="home__tableContact">
          <TableContact />
        </div>
        <div className="home__bottonRegister">
          <ButtonCommon text="Registrar contacto" onClick={handleOpen} />
        </div>
        <Popup isOpen={isOpen} handleClose={handleClose}>
          {listCompanies != undefined && (
            <RegisterContact setIsOpen={setIsOpen} listCompanies={listCompanies} />
          )}
        </Popup>
      </div>
    </UpdateTableContactContext.Provider>
  )
}
