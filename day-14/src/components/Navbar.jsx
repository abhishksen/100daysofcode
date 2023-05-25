import React from 'react'
import logo from '../../public/assets/logo.png'

const Navbar = () => {
  return (
    <header className='navbar'>
      <img src={logo} alt="logo-img" className='logo-img' />
      <ul className="list">
        {/* <li>About</li>
        <li>More</li> */}
        <li>Experiences</li>
      </ul>
    </header>
  )
}

export default Navbar
