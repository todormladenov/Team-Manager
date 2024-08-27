import { useEffect, useState } from "react"
import { TeamWithMembers } from "../types/teams"
import { getOneTeamById } from "../services/teamsAPI";
import { getAllTeamMembers } from "../services/membersAPI";

export const useGetOneTeam = (teamId: string | undefined) => {
    const [team, setTeam] = useState<TeamWithMembers | undefined>();

    useEffect(() => {
        (async () => {
            const [team, members] = await Promise.all([getOneTeamById(teamId), getAllTeamMembers(teamId)]);

            setTeam(() => ({...team, members}));
        })()
    }, [teamId]);

    return team
}