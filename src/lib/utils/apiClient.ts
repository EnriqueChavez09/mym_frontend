import axios, { AxiosInstance } from 'axios'

const baseUrl = process.env.REACT_APP_URL_API

export const apiClientWithToken: AxiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: 'Token 8fcb16eacd33956d71c98f2a21dd8468782e6f11',
  },
})
