import { AUTH_LOGIN } from "../commons/action.type"

const initialState = {
  isLogin: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case AUTH_LOGIN:
       const { isLogin } = action.payload
       return {...state, isLogin }
    default:
      return {...state}
  }
}