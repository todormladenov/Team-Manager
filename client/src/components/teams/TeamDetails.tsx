import { Link, useParams } from "react-router-dom";
import { useGetOneTeam } from "../../hooks/useGetOneTeam";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { checkUserStatus } from "../../utils/checkUserStatus";

export default function TeamDetails() {
    const { isAuth, _id } = useContext(AuthContext);
    const { teamId } = useParams();
    const team = useGetOneTeam(teamId);
    const userStatus = checkUserStatus(team, _id);

    return (
        <section id="team-home">
            <article className="layout">
                <img src={team?.logoUrl} className="team-logo left-col" />
                <div className="tm-preview">
                    <h2>{team?.name}</h2>
                    <p>{team?.description}</p>
                    <span className="details">{team?.members.length} Members</span>
                    {isAuth &&
                        <div>
                            {userStatus === 'owner' && <Link to={`/teams/edit-team/${teamId}`} className="action">Edit team</Link>}
                            {userStatus === 'member' && <Link to="#" className="action invert">Leave team</Link>}
                            {userStatus === 'nonMember' && <Link to="#" className="action">Join team</Link>}
                            {userStatus === 'pending' && <>Membership pending. <Link to="#">Cancel request</Link></>}
                        </div>
                    }
                </div>
                <div className="pad-large">
                    <h3>Members</h3>
                    <ul className="tm-members">
                        <li>My Username</li>
                        {team?.members.map(member =>
                            <li key={member._id}>{member.user.username}
                                <Link to="#" className="tm-control action">Remove from team</Link>
                            </li>)
                        }
                    </ul>
                </div>
                <div className="pad-large">
                    <h3>Membership Requests</h3>
                    <ul className="tm-members">
                        {team?.pendingMembers.map(member =>
                            <li key={member._id}>{member.user.username}
                                <Link to="#" className="tm-control action">Approve</Link>
                                <Link to="#" className="tm-control action">Decline</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </article>
        </section >
    );
}