import { useTableContact } from '@/lib/hooks/useTableContact'
import { AssetData } from '@/lib/utils/assets'
import { formatDateString } from '@/lib/utils/datatime'
import { TListCompany } from '@/lib/utils/type'
import { CRUContact } from '@/ui/containers/contact/CRUContact'
import { FC } from 'react'
import Popup from '../common/PopUpCommon'

type Props = {
  listCompanies: TListCompany[] | undefined
}

export const TableContact: FC<Props> = ({ listCompanies }) => {
  const { listContacts, isOpen, contact, deleteContact, updateContact, handleClose, setIsOpen } =
    useTableContact()
  return (
    <>
      <table className="contactTable">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Celular</th>
            <th>Empresa</th>
            <th>Fecha de registro</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {listContacts?.map((contact, index) => {
            const date = formatDateString(contact.created)
            return (
              <tr key={contact.id}>
                <td>{index + 1}</td>
                <td>{contact.fullNames}</td>
                <td>{contact.phone}</td>
                <td>{contact.company}</td>
                <td>{date}</td>
                <td>
                  <AssetData.UpdateIcon onClick={() => updateContact(contact.id)} />
                  <AssetData.DeleteIcon onClick={() => deleteContact(contact.id)} />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <Popup isOpen={isOpen} handleClose={handleClose}>
        {listCompanies != undefined && (
          <CRUContact
            isCreate={false}
            contact={contact}
            setIsOpen={setIsOpen}
            listCompanies={listCompanies}
          />
        )}
      </Popup>
    </>
  )
}
