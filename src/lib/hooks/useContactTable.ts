import { useEffect, useState } from 'react'
import { ContactService } from '../services/contactService'
import { TListContact } from '../utils/type'

export const useContactTable = () => {
  const [listContacts, setlistContacts] = useState<TListContact[] | undefined>(undefined)

  useEffect(() => {
    if (listContacts != undefined) return
    ContactService.list().then((data) => {
      if (data === undefined) return

      setlistContacts(data)
    })
  }, [listContacts])

  return { listContacts }
}
