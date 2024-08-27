import { Link } from "react-router-dom";
import { Teams } from "../../../types/teams";

export default function TeamLayout({ team }: { team: Teams }) {
    return (
        <article className="layout">
            <img src={team.logoUrl} className="team-logo left-col" />
            <div className="tm-preview">
                <h2>{team.name}</h2>
                <p>{team.description}</p>
                <span className="details">0 Members</span>
                <div><Link to={`/teams/details/${team._id}`} className="action">See details</Link></div>
            </div>
        </article>
    );
}