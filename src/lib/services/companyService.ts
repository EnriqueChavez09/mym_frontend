import axios from 'axios'
import { apiClientWithToken } from '../utils/apiClient'
import { TListCompany } from '../utils/type'

export class CompanyService {
  static list = async (): Promise<undefined | TListCompany[]> => {
    try {
      const response = await apiClientWithToken.get(`companies/`, {})
      if (response.status === 200) {
        const listOptions: TListCompany[] = response.data
        return listOptions
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 500) {
          throw { error: 'Error del servidor. Inténtalo de nuevo más tarde.' }
        }
        throw { error: 'Algo salió mal. Inténtalo de nuevo.' }
      } else {
        throw { error: 'Algo salió mal. Inténtalo de nuevo.' }
      }
    }
  }
}
