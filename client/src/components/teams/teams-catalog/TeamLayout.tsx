import { Link } from "react-router-dom";
import { Teams } from "../../../types/teams";
import { useEffect, useState } from "react";
import { getMembers } from "../../../services/membersAPI";
import { Member } from "../../../types/members";

export default function TeamLayout({ team }: { team: Teams }) {
    const [state, setState] = useState<Member[]>([]);

    useEffect(() => {
        (async () => {
            const res = await getMembers(team._id);
            setState(res);
        })()
    }, [team]);

    return (
        <article className="layout">
            <img src={team.logoUrl} className="team-logo left-col" />
            <div className="tm-preview">
                <h2>{team.name}</h2>
                <p>{team.description}</p>
                <span className="details">{state.length} Members</span>
                <div><Link to={`/teams/details/${team._id}`} className="action">See details</Link></div>
            </div>
        </article>
    );
}