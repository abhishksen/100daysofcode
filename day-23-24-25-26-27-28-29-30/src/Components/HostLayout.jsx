import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HostLayout = () => {
  const styles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#ff8c38"
  }
  return (
    <>
      <nav className='host-nav'>
        <NavLink
          end
          style={({ isActive }) => isActive ? styles : null}
          to={'.'} >Dashboard</NavLink>
        <NavLink
          style={({ isActive }) => isActive ? styles : null}
          to={'income'} >Income</NavLink>
        <NavLink
          style={({ isActive }) => isActive ? styles : null}
          to={'vans'} >Vans</NavLink>
        <NavLink
          style={({ isActive }) => isActive ? styles : null}
          to={'reviews'} >Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default HostLayout
