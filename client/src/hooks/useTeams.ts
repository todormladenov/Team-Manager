import { useEffect, useState } from "react";
import { Teams } from "../types/teams";
import { getAllTeams } from "../services/teamsAPI";

export const useTeams = () => {
    const [teams, setTeams] = useState<Teams[]>([]);
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        (async () => {
            try {
                const teams: Teams[] = await getAllTeams();
                setTeams(teams);
            } catch (error) {
                setError(error as Error)
            }
        })()
    }, []);

    return { teams, error }
}