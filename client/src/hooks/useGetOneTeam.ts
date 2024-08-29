import { useEffect, useState } from "react"
import { TeamWithMembers } from "../types/teams"
import { getOneTeamById } from "../services/teamsAPI";
import { getAllTeamMembers, getAllTeamPendingMembers } from "../services/membersAPI";

export const useGetOneTeam = (teamId: string | undefined) => {
    const [team, setTeam] = useState<TeamWithMembers | undefined>();

    useEffect(() => {
        (async () => {
            const [team, members, pending] = await Promise.all([
                getOneTeamById(teamId),
                getAllTeamMembers(teamId),
                getAllTeamPendingMembers(teamId)]);

            setTeam(() => ({ ...team, members, pendingMembers: pending }));
        })()
    }, [teamId]);

    return team
}