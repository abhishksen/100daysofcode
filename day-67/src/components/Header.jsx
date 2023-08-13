import { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../main"

const Header = () => {

    const { isAuthenticated, setIsAuthenticated } = useContext(Context);

    return (
        <nav>
            <div className="logo">
                <Link to={"/"}>ToDo</Link>
            </div>
            <div className="links">
                <Link to={"/me"}>Profile</Link>
                {
                    isAuthenticated
                        ? <button className="btn">Logout</button>
                        : <Link to={"/login"}>Login</Link>
                }
            </div>
        </nav>
    )
}

export default Header
