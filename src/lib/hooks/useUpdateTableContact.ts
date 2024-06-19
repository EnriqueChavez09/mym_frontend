import { useContext } from 'react'
import UpdateTableContactContext from '../contexts/UpdateTableContactContext'

export const useUpdateTableContact = () => {
  const context = useContext(UpdateTableContactContext)
  if (!context) {
    throw new Error('UpdateTableContactContext')
  }
  return context
}
