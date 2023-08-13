import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="login">
            <form action="">
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Login</button>
                <hr />
                <h6>or</h6>
                <Link to={"/register"}>Register</Link>
            </form>
        </div>
    )
}

export default Login
