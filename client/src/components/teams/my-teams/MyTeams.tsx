import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { getAllUserMemberTeams } from "../../../services/membersAPI";
import { MemberWithTeams } from "../../../types/members";
import TeamLayout from "../teams-catalog/TeamLayout";

export default function MyTeams() {
    const { _id } = useContext(AuthContext);
    const [teamsMember, setTeamsMember] = useState<MemberWithTeams[]>([]);

    useEffect(() => {
        (async () => {
            const teamsMember = await getAllUserMemberTeams(_id);
            setTeamsMember(() => teamsMember);
        })();
    }, [_id]);

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
                        <p><a href="#">Browse all teams</a> to join one, or use the button bellow to cerate your own
                            team.</p>
                    </div>
                    <div className=""><a href="#" className="action cta">Create Team</a></div>
                </article>
            }
        </section>
    );
}