import { Teams } from "./teams"

export interface Member {
    _ownerId: string,
    teamId: string,
    status: string,
    _createdOn: number,
    _updatedOn: number,
    _id: string,
    user?: {
        email: string,
        username: string,
        _id: string
    }
}

export interface MemberWithTeams extends Member {
    team: Teams
}