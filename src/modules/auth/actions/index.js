import request from 'support/request'

export const LOGIN = 'auth/LOGIN'
export const LOGOUT = 'auth/LOGOUT'

export const login = () => ({
  type: LOGIN,
  payload: request('login', 'get')
})

export const logout = () => ({
  type: LOGOUT,
  payload: request('logout', 'get')
})
