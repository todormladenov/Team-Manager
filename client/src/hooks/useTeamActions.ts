import { useState } from "react";
import { approveJoinTeamReq, deleteMember, getMemberById, joinTeamReq } from "../services/membersAPI";
import { Teams } from "../types/teams";
import { Member } from "../types/members";

type UseTeamActionsReturn = {
    joinTeam: () => Promise<Member | undefined>;
    removeMember: (memberId: string) => Promise<void>;
    approvePending: (memberId: string) => Promise<Member | undefined>;
    error: Error | null;
};

export function useTeamActions(team: Teams): UseTeamActionsReturn {
    const [error, setError] = useState<Error | null>(null);

    const joinTeam = async () => {
        try {
            const member = await joinTeamReq(team._id);
            return member;
        } catch (err) {
            setError(err as Error);
        }
    };

    const removeMember = async (memberId: string) => {
        try {
            await deleteMember(memberId);
        } catch (err) {
            setError(err as Error);
        }
    };

    const approvePending = async (memberId: string) => {
        try {
            await approveJoinTeamReq(memberId, { status: 'member' });
            const member = await getMemberById(memberId);
            return member;
        } catch (err) {
            setError(err as Error);
        }
    };

    return { joinTeam, removeMember, approvePending, error };
}