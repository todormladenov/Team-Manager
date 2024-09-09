import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { MemberWithTeams } from "../../../types/members";
import TeamLayout from "../teams-catalog/TeamLayout";
import { useMyTeams } from "../../../hooks/useMyTeams";
import { Link } from "react-router-dom";

export default function MyTeams() {
    const { _id } = useContext(AuthContext);
    const teamsMember: MemberWithTeams[] = useMyTeams(_id);

    return (
        <section id="my-teams">

            <article className="pad-med">
                <h1>My Teams</h1>
            </article>

            {teamsMember.length > 0
                ?
                teamsMember.map(member => <TeamLayout key={member.teamId} team={member.team} />)
                :
                <article className="layout narrow">
                    <div className="pad-med">
                        <p>You are not a member of any team yet.</p>
                        <p>
                            <Link to="/teams">Browse all teams</Link> to join one, or use the button bellow to cerate your own
                            team.
                        </p>
                    </div>
                    <div><Link to="/teams/create-team" className="action cta">Create Team</Link></div>
                </article>
            }
        </section>
    );
}