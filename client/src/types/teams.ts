import { Member } from "./members"

export interface Teams {
    _ownerId: string,
    name: string,
    logoUrl: string,
    description: string,
    _createdOn: number,
    _id: string
}

export interface TeamWithMembers extends Teams {
    members: Member[]
}