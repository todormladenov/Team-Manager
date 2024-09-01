import { Member } from "../types/members";
import { deleteReq, get, post } from "./api";

const BASE_URL = 'http://localhost:3030/data/members';

export const getAllTeamMembers = (teamId: string | undefined) =>
    get<Member[]>(`${BASE_URL}?where=teamId%3D%22${teamId}%22%20AND%20status%3D%22member%22&load=user%3D_ownerId%3Ausers`);

export const getAllTeamPendingMembers = (teamId: string | undefined) =>
    get<Member[]>(`${BASE_URL}?where=teamId%3D%22${teamId}%22%20AND%20status%3D%22pending%22&load=user%3D_ownerId%3Ausers`);

export const joinTeamReq = (teamId: string) => post<Member>(BASE_URL, { teamId })

export const deleteMember = (memberId: string) => deleteReq(`${BASE_URL}/${memberId}`); 