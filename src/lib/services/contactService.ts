import axios from 'axios'
import { apiClientWithToken } from '../utils/apiClient'
import { TCRUContact, TListContact } from '../utils/type'

export class ContactService {
  static create = async (body: TCRUContact): Promise<undefined> => {
    try {
      await apiClientWithToken.post(`contacts/`, body, {})
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

  static update = async (body: Partial<TCRUContact>, contactId: number): Promise<undefined> => {
    try {
      await apiClientWithToken.patch(`contacts/${contactId}/`, body, {})
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

  static delete = async (contactId: number): Promise<undefined> => {
    try {
      await apiClientWithToken.delete(`contacts/${contactId}/`, {})
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

  static detail = async (contactId: number): Promise<undefined | TCRUContact> => {
    try {
      const response = await apiClientWithToken.get(`contacts/${contactId}/`, {})
      if (response.status === 200) {
        const detailContact: TCRUContact = response.data
        return detailContact
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

  static list = async (): Promise<undefined | TListContact[]> => {
    try {
      const response = await apiClientWithToken.get(`contacts/`, {})
      if (response.status === 200) {
        const listOptions: TListContact[] = response.data
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
