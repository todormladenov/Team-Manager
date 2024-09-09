import { Link } from "react-router-dom";

type UserActionsProps = {
    userStatus: string;
    teamId: string | undefined;
    onJoin: () => void;
    onLeave: () => void;
    onCancelRequest: () => void;
};

export default function UserActions({ userStatus, teamId, onJoin, onLeave, onCancelRequest }: UserActionsProps) {
    return (
        <div>
            {userStatus === 'owner' &&
                <Link to={`/teams/edit-team/${teamId}`} className="action">Edit team</Link>
            }
            {userStatus === 'member' &&
                <Link to="#" onClick={onLeave} className="action invert">Leave team</Link>
            }
            {userStatus === 'nonMember' &&
                <Link to="#" onClick={onJoin} className="action">Join team</Link>
            }
            {userStatus === 'pending' &&
                <Link to="#" onClick={onCancelRequest}>Membership pending. Cancel request</Link>
            }
        </div>
    );
}