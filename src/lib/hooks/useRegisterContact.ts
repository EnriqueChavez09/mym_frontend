import { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import { ContactService } from '../services/contactService'
import { generateUUID } from '../utils/functions'
import { TCRUContact, TListCompany, TListOptionSelect } from '../utils/type'
import { useUpdateTableContact } from './useUpdateTableContact'

type Props = {
  listCompanies: TListCompany[]
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const useRegisterContact = ({ listCompanies, setIsOpen }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCRUContact>()
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
  return {
    listOptionCompanies,
    errors,
    registerContact,
    handleSubmit,
    register,
  }
}
