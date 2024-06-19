import { useEffect, useState } from 'react'
import { ContactService } from '../services/contactService'
import { generateUUID } from '../utils/functions'
import { TCRUContact, TListContact } from '../utils/type'
import { useUpdateTableContact } from './useUpdateTableContact'

export const useTableContact = () => {
  const [listContacts, setlistContacts] = useState<TListContact[] | undefined>(undefined)
  const { uuid, setUUID } = useUpdateTableContact()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [contact, setContact] = useState<TCRUContact>()

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
  const updateContact = (contactId: number) => {
    ContactService.detail(contactId).then((data) => {
      if (data === undefined) return
      setContact(data)
      handleOpen()
    })
  }

  const handleOpen = (): void => setIsOpen(true)
  const handleClose = (): void => setIsOpen(false)
  return { listContacts, contact, isOpen, deleteContact, updateContact, handleClose, setIsOpen }
}
