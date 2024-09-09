import { useEffect, useState } from "react";
import { MemberWithTeams } from "../types/members";
import { getAllUserMemberTeams } from "../services/membersAPI";

export const useMyTeams = (userId: string) => {
    const [teamsMember, setTeamsMember] = useState<MemberWithTeams[]>([]);

    useEffect(() => {
        (async () => {
            const teamsMember = await getAllUserMemberTeams(userId);
            setTeamsMember(() => teamsMember);
        })();
    }, [userId]);

    return teamsMember
}