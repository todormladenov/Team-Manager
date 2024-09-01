import { useEffect, useState } from "react";
import { TeamWithMembers } from "../types/teams";

export const useCheckUserStatus = (team: TeamWithMembers | undefined, userId: string) => {
    const [userStatus, setUserStatus] = useState('');
    const [userMembershipId, setUserMembershipIds] = useState('');

    useEffect(() => {
        if (userId && team?._ownerId === userId) {
            setUserStatus('owner');
        } else if (userId) {
            let membership = team?.members.find(member => member.user._id === userId);
            if (!membership) {
                membership = team?.pendingMembers.find(member => member.user._id === userId);
                if (!membership) {
                    setUserStatus('nonMember');
                }
            } else if (membership.status === 'pending') {
                setUserMembershipIds(membership._id);
                setUserStatus('pending');
            } else if (membership.status === 'member') {
                setUserMembershipIds(membership._id);
                setUserStatus('member');
            }
        }
    }, []);

    const changeUserInfoState = (status: string, memberId: string) => {
        setUserStatus(status);
        setUserMembershipIds(memberId);
    }

    return { userStatus, userMembershipId, changeUserInfoState };
}