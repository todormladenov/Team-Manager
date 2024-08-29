import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
    const { isAuth, logout } = useContext(AuthContext);

    return (
        <header className="layout">
            <Link to="/" className="site-logo">Team Manager</Link>
            <nav>
                <Link to="/teams" className="action">Browse Teams</Link>
                {isAuth ?
                    <>
                        <Link to="/teams/my-teams" className="action">My Teams</Link>
                        <Link to="" className="action" onClick={logout}>Logout</Link>
                    </>
                    :
                    <>
                        <Link to="/auth/login" className="action">Login</Link>
                        <Link to="/auth/register" className="action">Register</Link>
                    </>
                }
            </nav>
        </header>
    );
}