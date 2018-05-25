import { read } from 'support/request'

export const LOGIN = 'auth/LOGIN'
export const LOGOUT = 'auth/LOGOUT'

export const login = () => ({
  type: LOGIN,
  payload: read('login')
})

export const logout = () => ({
  type: LOGOUT,
  payload: read('logout')
})
