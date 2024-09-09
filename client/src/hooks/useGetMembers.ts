import { useEffect, useState } from "react";
import { Member } from "../types/members";
import { getMembers } from "../services/membersAPI";

export const useGetMembers = (teamId: string) => {
    const [members, setMembers] = useState<Member[]>([]);

    useEffect(() => {
        (async () => {
            const members = await getMembers(teamId);
            setMembers(members);
        })()
    }, [teamId]);

    return members;
}