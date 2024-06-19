import { TListCompany, TListOptionSelect } from '../utils/type'

type Props = {
  listCompanies: TListCompany[]
}

export const useRegisterContact = ({ listCompanies }: Props) => {
  const listOptionCompanies: TListOptionSelect[] = listCompanies.map((company) => {
    return {
      value: company.id,
      name: company.companyName,
    }
  })

  const registerContact = () => {}
  return {
    listOptionCompanies,
    registerContact,
  }
}
