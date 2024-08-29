import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Home() {
    const { isAuth } = useContext(AuthContext);
    return (
        <section id="home">
            <article className="hero layout">
                <img src="./../../assets/team.png" className="left-col pad-med" />
                <div className="pad-med tm-hero-col">
                    <h2>Welcome to Team Manager!</h2>
                    <p>Want to organize your peers? Create and manage a team for free.</p>
                    <p>Looking for a team to join? Browse our communities and find like-minded people!</p>
                    {!isAuth && <Link to="/auth/register" className="action cta">Sign Up Now</Link>}
                    <Link to="/teams" className="action cta">Browse Teams</Link>
                </div>
            </article>
        </section>
    );
}