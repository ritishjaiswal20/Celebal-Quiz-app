import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

function Header() {
  return (
    <div className="header">
        <Link to="/" className="title">Quiz hub</Link>
        <hr className="divider"/>

    </div>
  )
}

export default Header