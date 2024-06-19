import { useEffect, useState } from 'react'
import { ContactService } from '../services/contactService'
import { generateUUID } from '../utils/functions'
import { TListContact } from '../utils/type'
import { useUpdateTableContact } from './useUpdateTableContact'

export const useTableContact = () => {
  const [listContacts, setlistContacts] = useState<TListContact[] | undefined>(undefined)
  const { uuid, setUUID } = useUpdateTableContact()

  useEffect(() => {
    if (listContacts != undefined) return
    createContact()
  }, [listContacts])

  useEffect(() => {
    if (uuid === undefined || uuid === '') return
    createContact()
  }, [uuid])

  const createContact = () => {
    ContactService.list().then((data) => {
      if (data === undefined) return
      setlistContacts(data)
    })
  }

  const deleteContact = (contactId: number) => {
    ContactService.delete(contactId)
    setUUID(generateUUID())
  }
  const updateContact = () => {
    console.log('update')
  }

  return { listContacts, deleteContact, updateContact }
}
