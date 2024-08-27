import { Link } from "react-router-dom";

export default function TeamDetails() {
    return (
        <section id="team-home">
            <article className="layout">
                <img src="./assets/rocket.png" className="team-logo left-col" />
                <div className="tm-preview">
                    <h2>Team Rocket</h2>
                    <p>Gotta catch 'em all!</p>
                    <span className="details">3 Members</span>
                    <div>
                        <Link to="#" className="action">Edit team</Link>
                        <Link to="#" className="action">Join team</Link>
                        <Link to="#" className="action invert">Leave team</Link>
                        Membership pending. <Link to="#">Cancel request</Link>
                    </div>
                </div>
                <div className="pad-large">
                    <h3>Members</h3>
                    <ul className="tm-members">
                        <li>My Username</li>
                        <li>James<Link to="#" className="tm-control action">Remove from team</Link></li>
                        <li>Meowth<Link to="#" className="tm-control action">Remove from team</Link></li>
                    </ul>
                </div>
                <div className="pad-large">
                    <h3>Membership Requests</h3>
                    <ul className="tm-members">
                        <li>John
                            <Link to="#" className="tm-control action">Approve</Link>
                            <Link to="#" className="tm-control action">Decline</Link>
                        </li>
                        <li>Preya
                            <Link to="#" className="tm-control action">Approve</Link>
                            <Link to="#" className="tm-control action">Decline</Link>
                        </li>
                    </ul>
                </div>
            </article>
        </section>
    );
}