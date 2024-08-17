import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="layout">
            <Link to="/" className="site-logo">Team Manager</Link>
            <nav>
                <Link to="/teams" className="action">Browse Teams</Link>
                <Link to="/auth/login" className="action">Login</Link>
                <Link to="/auth/register" className="action">Register</Link>
                <Link to="/teams/my-teams" className="action">My Teams</Link>
                <Link to="" className="action">Logout</Link>
            </nav>
        </header>
    );
}