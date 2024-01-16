import React from 'react'
import "./Navbar.css"

const Navbar = () =>  {
  return (
    <nav className='nav'>
        <div className='item'>
          <a href='/profile'>Profile</a>
        </div>
        <div className='item'>
          <a href='/dialogs'>Masseges</a>
        </div>
        <div className='item'>
          <a>News</a>
        </div>
        <div className='item'>
          <a>Music</a>
        </div>
        <div className='item'>
          <a>Setting</a>
        </div>
      </nav>
  )
}

export default Navbar
