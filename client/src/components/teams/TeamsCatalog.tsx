import { Link } from "react-router-dom";

export default function TeamsCatalog() {
    return (
        <section id="browse">

            <article className="pad-med">
                <h1>Team Browser</h1>
            </article>

            <article className="layout narrow">
                <div className="pad-small"><Link to="#" className="action cta">Create Team</Link></div>
            </article>

            <article className="layout">
                <img src="./assets/atat.png" className="team-logo left-col" />
                <div className="tm-preview">
                    <h2>Storm Troopers</h2>
                    <p>These ARE the droids we're looking for</p>
                    <span className="details">5000 Members</span>
                    <div><Link to="#" className="action">See details</Link></div>
                </div>
            </article>

            <article className="layout">
                <img src="./assets/rocket.png" className="team-logo left-col" />
                <div className="tm-preview">
                    <h2>Team Rocket</h2>
                    <p>Gotta catch 'em all!</p>
                    <span className="details">3 Members</span>
                    <div><Link to="#" className="action">See details</Link></div>
                </div>
            </article>

            <article className="layout">
                <img src="./assets/hydrant.png" className="team-logo left-col" />
                <div className="tm-preview">
                    <h2>Minions</h2>
                    <p>Friendly neighbourhood jelly beans, helping evil-doers succeed.</p>
                    <span className="details">150 Members</span>
                    <div><Link to="#" className="action">See details</Link></div>
                </div>
            </article>

        </section>
    );
}