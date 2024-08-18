import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllTeams } from "../../../services/teamsAPI";
import { Teams } from "../../../types/teams";
import TeamLayout from "./TeamLayout";

export default function TeamsCatalog() {
    const [teams, setTeams] = useState<Teams[] | []>([]);

    useEffect(() => {
        (async () => {
            const teams: Teams[] = await getAllTeams();

            setTeams(teams);
        })()
    }, [])
    return (
        <section id="browse">

            <article className="pad-med">
                <h1>Team Browser</h1>
            </article>

            <article className="layout narrow">
                <div className="pad-small"><Link to="#" className="action cta">Create Team</Link></div>
            </article>

            {teams.map(team => <TeamLayout team={team} key={team._id} />)}

        </section>
    );
}