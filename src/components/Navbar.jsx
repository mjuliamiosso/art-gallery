import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='container'>
        <p className='nav-logo'>MJMIOSSO</p>
        <div className='nav-link'>
          <Link to="/">Portfolio</Link>
          <Link to="/aboutme">Sobre mim</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar