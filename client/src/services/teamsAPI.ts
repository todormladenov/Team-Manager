import { TeamFormValues } from "../components/teams/create-team/createTeamValidation";
import { Teams } from "../types/teams";
import { get, post } from "./api";

const BASE_URL = 'http://localhost:3030/data/teams';

export const getAllTeams = (): Promise<Teams[]> => get<Teams[]>(BASE_URL);

export const getOneTeamById = (teamId: string | undefined): Promise<Teams> => get<Teams>(`${BASE_URL}/${teamId}`);

export const createTeam = (data: TeamFormValues): Promise<Teams> => post<Teams>(BASE_URL, data);