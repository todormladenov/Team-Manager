import { useEffect, useState } from "react";
import { Teams } from "../types/teams";
import { getAllTeams } from "../services/teamsAPI";

export const useTeams = () => {
    const [teams, setTeams] = useState<Teams[] | []>([]);

    useEffect(() => {
        (async () => {
            try {
                const teams: Teams[] = await getAllTeams();
                
                setTeams(teams);
            } catch (error) {
                
            }

        })()
    }, []);

    return teams
}