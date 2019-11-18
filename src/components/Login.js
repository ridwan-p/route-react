import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default function() {
  const [form, setForm] = useState({username: '', password: ''})

  const handleChange = (e) => {
    const target = e.target
    setForm( state => ({...state, [target.name] : target.value}))
  }

  const handleSubmit = (e) => {

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