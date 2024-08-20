import { Link } from "react-router-dom";
import TeamLayout from "./TeamLayout";
import { useTeams } from "../../../hooks/useTeams";
import { Teams } from "../../../types/teams";

export default function TeamsCatalog() {
    const teams: Teams[] = useTeams();

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