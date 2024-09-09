import { Link } from "react-router-dom";
import { Teams } from "../../../types/teams";
import { Member } from "../../../types/members";
import { useGetMembers } from "../../../hooks/useGetMembers";

export default function TeamLayout({ team }: { team: Teams }) {
    const members: Member[] = useGetMembers(team._id);

    return (
        <article className="layout">
            <img src={team.logoUrl} className="team-logo left-col" />
            <div className="tm-preview">
                <h2>{team.name}</h2>
                <p>{team.description}</p>
                <span className="details">{members.length} Members</span>
                <div><Link to={`/teams/details/${team._id}`} className="action">See details</Link></div>
            </div>
        </article>
    );
}