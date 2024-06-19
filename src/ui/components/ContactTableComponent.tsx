import { useContactTable } from '@/lib/hooks/useContactTable'

export const ContactTable = () => {
  const { listContacts } = useContactTable()
  return (
    <div className="contactTable">
      <table>
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
                <button>Editar</button>
                <button>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
