import { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import { ContactService } from '../services/contactService'
import { generateUUID, getDataModify } from '../utils/functions'
import { TCRUContact, TListCompany, TListOptionSelect } from '../utils/type'
import { useUpdateTableContact } from './useUpdateTableContact'

type Props = {
  isCreate: boolean
  listCompanies: TListCompany[]
  setIsOpen: Dispatch<SetStateAction<boolean>>
  contact?: TCRUContact
}

export const useRegisterContact = ({ listCompanies, setIsOpen, isCreate, contact }: Props) => {
  const initialContact: Partial<TCRUContact> = {
    fullNames: isCreate ? '' : contact?.fullNames,
    address: isCreate ? '' : contact?.address,
    company: isCreate ? '' : contact?.company,
    email: isCreate ? '' : contact?.email,
    phone: isCreate ? '' : contact?.phone,
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCRUContact>({
    defaultValues: initialContact,
  })
  const { setUUID } = useUpdateTableContact()

  const listOptionCompanies: TListOptionSelect[] = listCompanies.map((company) => {
    return {
      value: company.id,
      name: company.companyName,
    }
  })

  const registerContact = (data: TCRUContact) => {
    ContactService.create(data)
      .then(() => {
        setIsOpen(false)
        setUUID(generateUUID())
      })
      .catch((errors) => {
        console.log(errors)
      })
  }
  const updateContact = (data: TCRUContact) => {
    const body: Partial<TCRUContact> = data

    getDataModify(['fullNames', 'address', 'company', 'email', 'phone'], body, initialContact)

    ContactService.update(body, contact?.id as number)
      .then(() => {
        setIsOpen(false)
        setUUID(generateUUID())
      })
      .catch((errors) => {
        console.log(errors)
      })
  }

  return {
    listOptionCompanies,
    errors,
    registerContact,
    updateContact,
    handleSubmit,
    register,
  }
}
