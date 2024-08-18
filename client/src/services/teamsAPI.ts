import { Teams } from "../types/teams";
import { get } from "./api";

const BASE_URL = 'http://localhost:3030/data/teams';

export const getAllTeams = (): Promise<Teams[]> => get<Teams[]>(BASE_URL);