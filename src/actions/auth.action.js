import { AUTH_LOGIN } from "../commons/action.type"
import { USERNAME, PASSWORD } from '../commons/dummy.js'

export const login  = (username, password) => {
  return {
    type: AUTH_LOGIN,
    payload: {
      isLogin: ( USERNAME === username ) && ( PASSWORD === password )
    }
  }
}