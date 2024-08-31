import { TeamWithMembers } from "../types/teams";

export const checkUserStatus = (team: TeamWithMembers | undefined, userId: string) => {
    let userStatus = '';
    let userMembershipId = '';

    if (userId && team?._ownerId === userId) {
        userStatus = 'owner';
    } else if (userId) {
        const membership = team?.members.find(member => member._id === userId);
        if (!membership) {
            userStatus = 'nonMember';
        } else if (membership.status === 'pending') {
            userMembershipId = membership._id;
            userStatus = 'pending';
        } else if (membership.status === 'member') {
            userMembershipId = membership._id;
            userStatus = 'member';
        }
    }

    return { userStatus, userMembershipId };
}