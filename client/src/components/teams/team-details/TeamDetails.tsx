import { useParams } from "react-router-dom";
import { useGetOneTeam } from "../../../hooks/useGetOneTeam";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useCheckUserStatus } from "../../../hooks/useCheckUserStatus";
import { useTeamActions } from "../../../hooks/useTeamActions";
import UserActions from "./team-details-components/UserActions ";
import MemberList from "./team-details-components/MemberList";
import MembershipRequestsList from "./team-details-components/MembershipRequestsListProps";

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
                        <UserActions
                            userStatus={userStatus}
                            teamId={teamId}
                            onJoin={joinTeamHandler}
                            onLeave={() => removeMemberHandler(userMembershipId)}
                            onCancelRequest={() => removePendingHandler(userMembershipId)}
                        />}
                </div>

                <MemberList
                    members={team.members}
                    userStatus={userStatus}
                    onRemoveMember={removeMemberHandler}
                />

                {userStatus === 'owner' &&
                    <MembershipRequestsList
                        pendingMembers={team.pendingMembers}
                        onApprovePending={approvePendingHandler}
                        onRemovePending={removePendingHandler}
                    />
                }
            </article>
        </section >
    );
}