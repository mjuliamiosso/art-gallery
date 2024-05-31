import React from 'react'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='container'>
        <p className='nav-logo'>MJMIOSSO</p>
        <div className='nav-link'>
          <a href="">Portfolio</a>
          <a href="">Sobre mim</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar