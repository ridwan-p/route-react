import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from "../actions/auth.action"
import {
  Route,
  Redirect
} from "react-router-dom";

export default function({rest}) {
  const auth = useSelector(state => state.auth)

  return <Route
        {...rest}
        render={({ location }) =>
          !auth.isLogin ? (
            <LoginForm></LoginForm>
          ) : (
            <Redirect
              to={{
                pathname: "/dashboard",
                state: { from: location }
              }}
            />
          )
        }
      />
}

export const LoginForm = ()=> {
  const [form, setForm] = useState({username: '', password: ''})
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const target = e.target
    setForm( state => ({...state, [target.name] : target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(form.username, form.password))
  }

  return (
    <div style={{padding:"1em"}}>
      <Link to="/" ><h1>Home</h1></Link>
      <form onSubmit={handleSubmit} style={{display:"inline-grid", gridGap: ".5em"}}>
        <input type="text" name="username" value={form.username} onChange={handleChange} placeholder="username" />
        <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="password" />
        <button>Submit</button>
      </form>
    </div>
  )
}