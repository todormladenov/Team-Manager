import { Link, useParams } from "react-router-dom";
import { useGetOneTeam } from "../../hooks/useGetOneTeam";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useCheckUserStatus } from "../../hooks/useCheckUserStatus";
import { useTeamActions } from "../../hooks/useTeamActions";

export default function TeamDetails() {
    const { isAuth, _id } = useContext(AuthContext);
    const { teamId } = useParams();
    const { team, changeTeamState, ActionType } = useGetOneTeam(teamId);
    const { userStatus, userMembershipId, changeUserInfoState } = useCheckUserStatus(team, _id);
    const { joinTeam, removeMember, approvePending, error } = useTeamActions(team)

    const joinTeamHandler = async () => {
        const member = await joinTeam();
        if (member) {
            changeTeamState(ActionType.JOIN_TEAM, undefined, member);
            changeUserInfoState('pending', member._id);
        }
    }

    const removeMemberHandler = async (memberId: string) => {
        await removeMember(memberId);
        changeTeamState(ActionType.REMOVE_MEMBER, memberId);
        changeUserInfoState('nonMember', '');
    }

    const removePendingHandler = async (memberId: string) => {
        await removeMember(memberId);
        changeTeamState(ActionType.REMOVE_PENDING, memberId);
        changeUserInfoState('nonMember', '');
    }

    const approvePendingHandler = async (memberId: string) => {
        const member = await approvePending(memberId);
        if (member) {
            changeTeamState(ActionType.APPROVE_PENDING, member._id, member);
            changeUserInfoState('member', member._id);
        }
    }

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
                            {userStatus === 'member' && <Link to="#" onClick={() => removeMemberHandler(userMembershipId)} className="action invert">Leave team</Link>}
                            {userStatus === 'nonMember' && <Link to="#" onClick={joinTeamHandler} className="action">Join team</Link>}
                            {userStatus === 'pending' && <>Membership pending. <Link to="#" onClick={() => removePendingHandler(userMembershipId)}>Cancel request</Link></>}
                        </div>
                    }
                </div>
                <div className="pad-large">
                    <h3>Members</h3>
                    <ul className="tm-members">
                        {team?.members.map(member =>
                            <li key={member._id}>{member.user?.username}
                                {userStatus === 'owner' &&
                                    <Link to='#' onClick={() => removeMemberHandler(member._id)} className="tm-control action">Remove from team</Link>
                                }
                            </li>)
                        }
                    </ul>
                </div>
                {userStatus === 'owner' &&
                    <div className="pad-large">
                        <h3>Membership Requests</h3>
                        <ul className="tm-members">
                            {team?.pendingMembers.map(member =>
                                <li key={member._id}>{member.user?.username}
                                    <Link to="#" onClick={() => approvePendingHandler(member._id)} className="tm-control action">Approve</Link>
                                    <Link to="#" onClick={() => removePendingHandler(member._id)} className="tm-control action">Decline</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                }
            </article>
        </section >
    );
}