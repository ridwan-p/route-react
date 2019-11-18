import React from 'react'
import { Link } from 'react-router-dom'

export default function() {
  return (
    <div>
      <Link to="/" ><h1>Home</h1></Link>
      <Link to="/login">Login</Link>
    </div>
  )
}