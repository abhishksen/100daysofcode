import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="logo-container">
                <Link to={'/'}>VanLyf</Link>
            </div>
            <div className="nav-links">
                <NavLink
                    to={'/host'}
                    className={({ isActive }) => isActive ? "active-link" : null}
                >Host</NavLink>
                <NavLink
                    to={'/about'}
                    className={({ isActive }) => isActive ? "active-link" : null}
                >About</NavLink>
                <NavLink
                    to={'/vans'}
                    className={({ isActive }) => isActive ? "active-link" : null}
                >Vans</NavLink>
            </div>
        </nav>
    )
}

export default Navbar
