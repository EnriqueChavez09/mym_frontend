import { useEffect, useState } from 'react'
import { CompanyService } from '../services/companyService'
import { TListCompany } from '../utils/type'

export const useHome = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [listCompanies, setListCompanies] = useState<TListCompany[] | undefined>(undefined)

  useEffect(() => {
    if (listCompanies != undefined) return
    CompanyService.list().then((data) => {
      if (data === undefined) return

      setListCompanies(data)
    })
  }, [listCompanies])

  const handleOpen = (): void => setIsOpen(true)
  const handleClose = (): void => setIsOpen(false)
  return {
    isOpen,
    listCompanies,
    handleOpen,
    handleClose,
  }
}
