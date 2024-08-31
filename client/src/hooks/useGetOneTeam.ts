import { useEffect, useReducer } from "react"
import { TeamWithMembers } from "../types/teams"
import { getOneTeamById } from "../services/teamsAPI";
import { getAllTeamMembers, getAllTeamPendingMembers } from "../services/membersAPI";

enum ActionType {
    GET = 'GET',
    REMOVE_MEMBER = 'REMOVE_MEMBER',
    REMOVE_PENDING = 'REMOVE_PENDING',
}

interface StateAction {
    type: ActionType;
    payload: TeamWithMembers;
    memberId?: string
}

const initialState: TeamWithMembers = {
    _id: '',
    name: '',
    logoUrl: '',
    description: '',
    _ownerId: '',
    _createdOn: 0,
    members: [],
    pendingMembers: []
};

function teamReducer(state: TeamWithMembers, action: StateAction): TeamWithMembers {
    switch (action.type) {
        case ActionType.GET:
            return { ...state, ...action.payload };
        case ActionType.REMOVE_MEMBER:
            return {
                ...state,
                members: action.payload.members.filter(member => member._id !== action.memberId)
            }
        case ActionType.REMOVE_PENDING:
            return {
                ...state,
                pendingMembers: action.payload.pendingMembers.filter(member => member._id !== action.memberId)
            }
        default:
            return state;
    }
}

export const useGetOneTeam = (teamId: string | undefined) => {
    const [team, dispatch] = useReducer(teamReducer, initialState);

    useEffect(() => {
        (async () => {
            const [team, members, pending] = await Promise.all([
                getOneTeamById(teamId),
                getAllTeamMembers(teamId),
                getAllTeamPendingMembers(teamId)]);

            dispatch({
                type: ActionType.GET,
                payload: { ...team, members, pendingMembers: pending }
            });
        })()
    }, [teamId]);

    const changeTeamState = (type: ActionType, memberId?: string) => {
        dispatch({ type, payload: team, memberId })
    }

    return { team, changeTeamState, ActionType }
}