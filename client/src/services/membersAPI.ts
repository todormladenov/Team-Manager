import { Member } from "../types/members";
import { get } from "./api";

const BASE_URL = 'http://localhost:3030/data/members';

export const getAllTeamMembers = (teamId: string | undefined) => get<Member[]>(`${BASE_URL}?where=teamId%3D%22${teamId}%22%20AND%20status%3D%22member%22&load=user%3D_ownerId%3Ausers`);

export const getAllTeamPendingMembers = (teamId: string | undefined) => get<Member[]>(`${BASE_URL}?where=teamId%3D%22${teamId}%22%20AND%20status%3D%22pending%22&load=user%3D_ownerId%3Ausers`);