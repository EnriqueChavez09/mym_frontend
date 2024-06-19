import { useContactTable } from '@/lib/hooks/useContactTable'
import { ButtonCommon } from '../common/ButtonCommon'

export const ContactTable = () => {
  const { listContacts, deleteContact, updateContact } = useContactTable()
  return (
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
        {listContacts?.map((contact) => (
          <tr key={contact.id}>
            <td>{contact.id}</td>
            <td>{contact.fullNames}</td>
            <td>{contact.phone}</td>
            <td>{contact.company}</td>
            <td>{contact.created}</td>
            <td>
              <ButtonCommon text="Editar" onClick={updateContact} />
              <ButtonCommon text="Eliminar" onClick={deleteContact} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
